import React from 'react'
import { Card, Typography, Table, Button, Popconfirm, Icon, Divider, Form, Input, InputNumber, Modal, message } from 'antd'
import { Link } from 'react-router-dom'
import '../../styles/checkout.scss'
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import callAPI from '../../utils/apiCaller'

const { Title } = Typography
function handleToString(value) {
    var num = 0
    num = `${Number(value).toString()} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num
}
const data = []
for (let i = 0; i < 10; i++) {
    var res = Math.floor(Math.random() * 20000) + 5000
    data.push({
        key: `${i + 1}`,
        id: `${i + 1}`,
        name: `Pepsi ${i + 1}`,
        quant: Math.floor(Math.random() * 99) + 1,
        price: res,
    });
}
const FormItem = Form.Item;
const EditableContext = React.createContext();
class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber min={1000} step={1000} />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Hãy nhập ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}
class CheckoutTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: data,
            loading: false,
            editingKey: '',
            visible: false,
            name: '',
            quant: 0,
            price: 0
        }
        this.columns = [{
            align: 'center',
            title: 'STT',
            dataIndex: 'id',
            width: '5%',
        }, {
            align: 'center',
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            editable: true,
        },
        {
            align: 'center',
            title: 'Số lượng',
            dataIndex: 'quant',
            sorter: (a, b) => a.quant - b.quant, sortDirections: ['ascend', 'descend'],
            editable: true,
        },
        {
            align: 'center',
            title: 'Giá',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price, sortDirections: ['ascend', 'descend'],
            render: (value) => (<div>{handleToString(value)}</div>),
            editable: true,
        },
        {
            align: 'center',
            title: 'Hành động',
            dataIndex: 'action',
            render: (text, record) => {
                const { editingKey } = this.state;
                const editable = this.isEditing(record);
                return (
                    <div>
                        {editable || this.state.datasource.length === 1 ? (
                            <span>
                                <EditableContext.Consumer>
                                    {form => (
                                        <Link
                                            onClick={() => this.save(form, record.key)}
                                            style={{ marginRight: 8 }}
                                        >
                                            Lưu
                                        </Link>
                                    )}
                                </EditableContext.Consumer>
                                <Popconfirm
                                    title="Chắc chắc muốn hủy?"
                                    onConfirm={() => this.cancel(record.key)}
                                    okText='Có'
                                    cancelText='Không'
                                    icon={<Icon type="stop" theme="filled" style={{ color: '#ec3b3b' }} />}>

                                    <Link>Hủy</Link>
                                </Popconfirm>
                            </span>
                        ) : (
                                <span>
                                    <Link disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>Sửa</Link>
                                    <Divider type="vertical" />
                                    <Popconfirm title="Chắc chắn muốn xóa?"
                                        placement='topRight'
                                        onConfirm={() => this.handleDelete(record.key)}
                                        icon={<Icon type='rest' theme='filled' style={{ color: '#0077ff' }} />}
                                        okText='Có'
                                        cancelText='Không'>
                                        <Link disabled={editingKey !== ''}>Xóa</Link>
                                    </Popconfirm>
                                </span>
                            )}
                    </div>
                );
            },
        },
        ]
    }

    handleDelete = (key) => {
        const datasource = [...this.state.datasource];
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                datasource: datasource.filter(item => item.key !== key),
                loading: false
            });
        }, 1000);


    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        const { datasource, name, quant, price } = this.state
        var newData = this.state.datasource
        if (name !== '' && quant !== 0 && price !== 0)
            {newData.push({
                key: `${Number(datasource[datasource.length - 1].key) + 1}`,
                id: `${Number(datasource[datasource.length - 1].id) + 1}`,
                name: name,
                quant: quant,
                price: price,
            
            })
            this.setState({
                visible: false,
                datasource: newData
            });}
        else message.warn('Hãy nhập đủ thông tin!')
        
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }
    changeQuant = (value) => {
        this.setState({ quant: value })
    }
    changePrice = value => {
        this.setState({ price: value })
    }
    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.datasource];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ datasource: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ datasource: newData, editingKey: '' });
            }
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    generatepdf = () => {
        const { datasource } = this.state
        var doc = new jsPDF();
        var databody = []
        for (let i = 0; i < datasource.length; i++) {
            databody.push([[datasource[i].id], [datasource[i].name], [datasource[i].price + ' đ'], [datasource[i].cashier]])
        }
        doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
        doc.setFont('Roboto-Regular');
        doc.autoTable({
            font: '[Base64-encoded string of your font]',
            styles: { halign: 'center', font: 'Arimo' },
            head: [['STT', 'Tên sản phẩm', 'Giá', 'Thu ngân']],
            body: databody
        });

        doc.save('table.pdf');

    }
    render() {
        const { datasource, name } = this.state
        const components = {
            body: {
                cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'price' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });
        return (
            <Card className='checkout-card' >
                <Modal
                    className='modal-add'
                    title="Thêm sản phẩm mới"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="Hủy"
                    okText='Thêm'
                    
                >
                    <p>STT: <span>{Number(datasource[datasource.length - 1].id) + 1}</span></p>
                    <p>Tên sản phẩm: <span><Input value={name} onChange={this.changeName} placeholder='Nhập tên sản phẩm' style={{ width: '200px' }} /></span></p>
                    <p>Số lượng: <span><InputNumber onChange={this.changeQuant} placeholder='Nhập số' /></span></p>
                    <p>Giá: <span><InputNumber onChange={this.changePrice} min={1000} step={1000} placeholder='Nhập giá' /></span></p>

                </Modal>
                <Title level={3} style={{ textAlign: 'center' }}>Bảng thống kê hàng hóa</Title>
                <EditableContext.Provider value={this.props.form}>
                    <Table
                        className='productTable'
                        components={components}
                        dataSource={datasource}
                        loading={this.state.loading}
                        columns={columns}
                        rowClassName="editable-row"
                        pagination={{
                            onChange: this.cancel,
                        }}
                        bordered />
                </EditableContext.Provider>
                <div className='btns'>
                    <Button icon='plus-circle' onClick={this.showModal}>Nhập hàng</Button>
                    <Button icon='file-pdf' onClick={this.generatepdf}>Xuất PDF</Button>
                </div>
            </Card>
        );
    }
}
const Checkout = Form.create()(CheckoutTable);
export default Checkout