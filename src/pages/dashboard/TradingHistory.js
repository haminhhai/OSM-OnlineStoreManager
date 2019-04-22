import React, { Component } from 'react';
import moment from 'moment';
import { Table, Card, Badge, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words'

const statusMap = [
  {
    status: 'success',
    txt: 'Success'
  }, {
    status: 'error',
    txt: 'Fail'
  }, {
    status: 'processing',
    txt: 'Paying'
  },

]

function handleToString(value) {
  var num = 0
  num = Number(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' VND'
  return num
}
const data = []
const beginDay = new Date().getTime();
for (let i = 0; i < 10; i++) {
  var res = Math.floor(Math.random() * 20000) + 5000
  data.push({
    id: `${i + 1}`,
    name: `Pepsi ${i + 1}`,
    price: handleToString(res),
    realprice: res,
    time: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD HH:mm:ss'),
    status: statusMap[Math.floor(Math.random() * 3)].status,
    cashier: "Unique",
    description: `Đây là mô tả sản phẩm ${i + 1}`

  });
}
const header = () => <div style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600'}}>Lịch sử giao dịch</div>;

class TradingHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
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
  render() {
    const columns = [{
      align: 'center',
      title: 'Mã sản phẩm',
      dataIndex: 'id',
      width: '20%',
      ...this.getColumnSearchProps('id'),
    }, {
      align: 'center',
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      ...this.getColumnSearchProps('name'),
    }, {
      align: 'center',
      title: 'Giá',
      dataIndex: 'price',
      sorter: (a, b) => a.realprice - b.realprice, sortDirections: ['ascend', 'descend'],defaultSortOrder: 'ascend',
      
      ...this.getColumnSearchProps('price'),
    }, {
      align: 'center',
      title: 'Thời điểm',
      dataIndex: 'time',
      ...this.getColumnSearchProps('time'),
    }, {
      align: 'left',
      title: 'Trạng thái',
      dataIndex: 'status',
      ...this.getColumnSearchProps('status'),
      render(val) {
        return <Badge status={val} text={val.toUpperCase()} />
      },
    
    }, {
      align: 'center',
      title: 'Thu ngân',
      dataIndex: 'cashier',
      ...this.getColumnSearchProps('cashier'),
    },
    ]
    return (
      <div>
        <Card loading={this.props.loading} style={{margin: 15}}>
          <div className='salesCard'>
            <Table title={header}
              expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
              dataSource={data}
              columns={columns}
            />
          </div>
        </Card>
      </div>
    );
  }

}
export default TradingHistory;
