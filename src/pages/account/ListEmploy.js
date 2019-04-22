import React, {Component} from 'react'
import {Input, Card, Table, Button, Avatar, Popconfirm, Icon } from 'antd'
import Highlighter from 'react-highlight-words'
import dog from '../../assets/icons/dog.png'
import cat from '../../assets/icons/cat.png'
import beer from '../../assets/icons/beer.png'
import girafee from '../../assets/icons/girafee.png'
import bee from '../../assets/icons/bee.png'
const data = []
for (let i = 0; i < 20; i++) {
    data.push({
        key: `${i+1}`,  
        id: Math.floor(Math.random() * 999) + 1,
        tên: `Nhân viên ${i}`,
        email: 'email@osm.vn',
        hạng: 'Nhân viên',
        ava: Math.floor(Math.random() * 5)
    })
}
const ava = [dog,cat,bee, beer, girafee]
const header = () => <div style={{ color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600' }}>Danh sách nhân viên</div>;
class ListEmploy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            dataSource: data
        }
    }
    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={node => { this.searchInput = node; }}
                        placeholder={`Tìm ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        shape='round'
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm)}
                        icon="search"
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Tìm
                     </Button>
                    <Button
                        shape='round'
                        onClick={() => this.handleReset(clearFilters)}
                        size="small"
                        icon='redo'
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </div>
            ),
        filterIcon: filtered => <Icon type="search"
            style={{
                color: filtered ? '#0077ff' : undefined,
                fontSize: filtered ? '15px' : '12px',
                textAlign: 'center'
            }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#00c3ff', padding: 0, color: 'white' }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    })

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });

    }

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    }

    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
        
    }
    render() {
        const columns = [
        {
            align: 'left',
            title: '',
            dataIndex:'ava',
            width: '2%',
            render(val) {
                return <Avatar src={ava[val]}/>
            }

        }, {
            align: 'center',
            title: 'ID',
            dataIndex: 'id',
            width: '20%',
            ...this.getColumnSearchProps('id'),
            
        }, {
            align: 'center',
            title: 'Họ Tên',
            dataIndex: 'tên',
            ...this.getColumnSearchProps('tên'),
        }, {
            align: 'center',
            title: 'Email',
            dataIndex: 'email',
            ...this.getColumnSearchProps('email'),
        }, {
            align: 'center',
            title: 'Cấp bậc',
            dataIndex: 'hạng',
        }, {
            align: 'center',
            title: 'Xóa tài khoản',
            dataIndex: 'action',
            render: (text, record) => (
                this.state.dataSource.length >= 1
                  ? (
                    <Popconfirm title="Chắc chắn muốn xóa?" 
                        placement='topRight' 
                        onConfirm={() => this.handleDelete(record.key)}
                        icon={<Icon type='rest' theme='filled' style={{color: '#0077ff'}}/>}
                        okText='Có'
                        cancelText='Không'>
                        <a href="javascript:;">Xóa</a>
                    </Popconfirm>
                  ) : null
              ),
              
        },
        ]
        return (
            <div>     
                <Card loading={this.props.loading} style={{ margin: 15 }}>
                    <div className='ListTab'>
                        <Table title={header}
                            dataSource={this.state.dataSource}
                            columns={columns}
                        />
                    </div>
                </Card>
            </div>
        );
    }

}
export default ListEmploy