import React from 'react'
import { Card, Select, Typography, InputNumber, Button, AutoComplete, message, Row, Col, Tooltip, Popconfirm, Icon } from 'antd'
import moment from 'moment'
import '../../styles/payment.scss'
import Fulfill from './Fulfill.jsx'
import callAPI from '../../utils/apiCaller'

const { Title } = Typography
const cashiers = ['Kim Dung', 'Vân Dung', 'Hoàng Dung', 'Phương Dung', 'Ngọc Dung', 'Mộ Dung']
var products = [
]
var idBill = Math.floor((Math.random() * 89999) + 10000)
const paymentDate = moment().format('DD-MM-YYYY')
//[thungan, productName, quantity, money, ...]
var info = ['', '', '', '', idBill, paymentDate]
class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tranfer: 0,
            data: [],
            isCompleting: false,
            prodPrice: '',
            quantity: 0,
            availableProducts: [],
            availableQuantity: 'Số lượng'
        }
        let infoRequest = `/Products/KiemHangTrongKho?ID_Employee=1`
        callAPI(infoRequest, 'POST', null).then(res => {
            if(res.data.code === 200){
                products = res.data.data
                let listpros = []
                for (let i = 0; i < products.length; i++)
                    listpros.push(products[i].productName)
                this.setState({availableProducts: listpros})
            }
        })
    }
    getName = (value) => {
        info[0] = value
    }
    onSelect = (value) => {
        info[1] = value
        
        for (let i = 0; i < products.length; i++)
            if (value === products[i].productName){
                this.setState({prodPrice: Number(products[i].buyPrice),
                    availableQuantity: products[i].quantityInStock})
            }
                

    }
    changeNum = (value) => {
        info[2] = value
        this.setState({quantity: Number(value)})
    }
    onTranfer = () => {
        const {prodPrice, quantity} = this.state
        var count = 0
        for (let i = 0; i < info.length - 3; i++)
            if (info[i] === '')
                count = Number(count) + 1
        
        if (count === 0) {
            info[3] = prodPrice * quantity
            this.setState({ isCompleting: true, tranfer: info[3]})
        }
        else message.warn('Thiếu thông tin không thể tính tiền!')
    }
    onSubmit = () => {
        message.success('Tạo hóa đơn thành công!')
        idBill = Math.floor((Math.random() * 89999) + 10000)
        this.setState({ data: info })
    }
    render() {
        const { isCompleting } = this.state
        
        return (
            <Card className='payment-card'>
                <Row gutter={24} >
                    <Col lg={12} md={24}>
                        <Card >
                            <Title level={3} style={{ textAlign: 'center' }}>Tạo hóa đơn thanh toán</Title>
                            <Card>
                                <div>Hóa đơn số: {idBill}</div>
                                <br />
                                <div>Ngày: {paymentDate}</div>
                                <br />
                                <div>
                                    Thu ngân:
                        <br />
                                    <Select
                                        className='select-cash'
                                        showSearch
                                        onSelect={this.getName}
                                        style={{ width: '200px' }}
                                        placeholder="Chọn thu ngân"
                                        optionFilterProp="children"
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        {cashiers.map((cashier, i) => (
                                            <Select.Option key={i} value={cashier}>
                                                {cashier}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </div>
                                <br />
                                <div>
                                    Mặt hàng:
                        <br />
                                    <AutoComplete
                                        style={{ width: 200 }}
                                        dataSource={this.state.availableProducts}
                                        placeholder="Chọn sản phẩm"
                                        onSelect={this.onSelect}
                                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                    />
                                </div>
                                <br />
                                <div>
                                    Số lượng:
                        <br />
                                    <InputNumber min={0} max={this.state.availableQuantity} onChange={this.changeNum} placeholder={this.state.availableQuantity}/>
                                </div>
                                <br />
                                <span>Thành tiền: <small>{`${this.state.tranfer} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</small></span>
                                <br />
                                <Button onClick={this.onTranfer}>Thành tiền</Button>
                                <Tooltip title={!isCompleting ? 'Hãy nhập đầy đủ thông tin!' : ''}>
                                    {!isCompleting ? 
                                        <Button disabled>Hoàn tất</Button> :
                                        <Popconfirm title='Bạn có chắc muốn hoàn tất?' 
                                            onConfirm={this.onSubmit}
                                            okText='Có'
                                            cancelText='Không'
                                            icon={<Icon type="loading" style={{color: '#5bb2ff'}}/>}>
                                                <Button>Hoàn tất</Button>
                                        </Popconfirm>
                                    }
                                    
                                </Tooltip>
                            </Card>
                        </Card>
                    </Col>
                    <Col lg={12} md={24}>
                        <Card>
                            <Fulfill info={this.state.data}/>
                        </Card>
                    </Col>
                </Row>

            </Card>
        );
    }
}
export default Payment