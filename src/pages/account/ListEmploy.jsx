import React, {Component} from 'react'
import {Input, Card, Table, Button, Avatar, Popconfirm, Icon, message } from 'antd'
import {Link} from 'react-router-dom'
import Highlighter from 'react-highlight-words'
import dog from '../../assets/icons/dog.png'
import cat from '../../assets/icons/cat.png'
import beer from '../../assets/icons/beer.png'
import girafee from '../../assets/icons/girafee.png'
import bee from '../../assets/icons/bee.png'
import alien from '../../assets/icons/alien.png'
import bird from '../../assets/icons/bird.png'
import girl from '../../assets/icons/girl.png'

import callAPI from '../../utils/apiCaller'

const ava = [dog,cat,bee, beer, girafee, alien, bird, girl]
const header = () => <div style={{ color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600' }}>Danh sách nhân viên</div>;
class ListEmploy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            dataSource: [],
            loading: false
        }
    }
    componentDidMount() {
        let rights = localStorage.getItem('rights')
        let infoRequest = `/Inside/DanhSachNhanVien?ID_Boss=${rights}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if(res !== undefined)
            {
                var data = []
            const arr = res.data.data
            for(let i = 0; i < arr.length; i++)
                data.push(arr[i])
            
            this.setState({dataSource: data})
            }
            else console.log(res)
        })
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

    handleDelete = (ID_Employee) => {
        const dataSource = [...this.state.dataSource];
        this.setState({loading: true})
        let infoRequest = `/Inside/DeleteEmployee?ID_Employee=${ID_Employee}`
        callAPI(infoRequest, 'POST', null).then(res => {
            if(res !== undefined)
            {
                setTimeout(() => {
                    message.success('Xóa tài khoản thành công!')
                    this.setState({ 
                        dataSource: dataSource.filter(item => item.ID_Employee !== ID_Employee),
                        loading: false
                    });
                    this.componentDidMount()
                }, 1000);
            }
            else console.log(res)
        })
        
        
        
        
    }
    render() {
        const columns = [
        {
            align: 'left',
            title: '',
            dataIndex:'ava',
            width: '2%',
            render() {
                return <Avatar src={ava[Math.floor((Math.random() * 8))]}/>
            }

        }, {
            align: 'center',
            title: 'ID',
            dataIndex: 'ID_Employee',
            width: '20%',
            ...this.getColumnSearchProps('ID_Employee'),
            
        },{
            align: 'center',
            title: 'Username',
            dataIndex: 'username',
            ...this.getColumnSearchProps('username'),
        },
         {
            align: 'center',
            title: 'Họ Tên',
            dataIndex: 'fullname',
            ...this.getColumnSearchProps('fullname'),
        }, {
            align: 'center',
            title: 'Email',
            dataIndex: 'email',
            ...this.getColumnSearchProps('email'),
        }, {
            align: 'center',
            title: 'Xóa tài khoản',
            dataIndex: 'action',
            render: (text, record) => (
                this.state.dataSource.length >= 1
                  ? (
                    <Popconfirm title="Chắc chắn muốn xóa?" 
                        placement='topRight' 
                        onConfirm={() => this.handleDelete(record.ID_Employee)}
                        icon={<Icon type='rest' theme='filled' style={{color: '#0077ff'}}/>}
                        okText='Có'
                        cancelText='Không'>
                        <Link>Xóa</Link>
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
                            loading={this.state.loading}
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