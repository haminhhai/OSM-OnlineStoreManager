import React, { Component } from 'react';
import moment from 'moment';
import { Table, Card, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words'
import callAPI from '../../utils/apiCaller'
 
const header = () => <div style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600'}}>Lịch sử giao dịch</div>;

class TradingHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      dataSource: []
    }
  }
  componentDidMount() {
    const ID  = localStorage.getItem('ID')
    let infoRequest = `/Payments/LichSuThanhToan?ID_Employee=${ID}`
    callAPI(infoRequest, 'POST', null).then(res => {
      console.log(res)
      var data = []
      const getData = res.data.data
      for(let i = 0; i < getData.length; i++)
        data.push(getData[i])
      this.setState({dataSource: data})
  })
  }
  handleToString = (value) => {
    var num = 0
    num = `${Number(value).toString()} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num
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
    const columns = [ {
      align: 'center',
      title: 'Tên sản phẩm',
      dataIndex: 'productName',
      ...this.getColumnSearchProps('productName'),
    }, {
      align: 'center',
      title: 'Số lượng',
      dataIndex: 'amount',
      sorter: (a, b) => a.amount - b.amount, sortDirections: ['ascend', 'descend'],
      ...this.getColumnSearchProps('amount'),
    }, 
    {
      align: 'center',
      title: 'Tiền',
      dataIndex: 'Tien',
      sorter: (a, b) => a.Tien - b.Tien, sortDirections: ['ascend', 'descend'],
      render: (Tien) => (<div>{`${Tien} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>),
      ...this.getColumnSearchProps('Tien'),
    }, {
      align: 'center',
      title: 'Thời điểm',
      dataIndex: 'paymentDate',
      ...this.getColumnSearchProps('paymentDate'),
    }, {
      align: 'center',
      title: 'Thu ngân',
      dataIndex: 'fullname',
      ...this.getColumnSearchProps('fullname'),
    },
    ]
    return (
      <div>
        <Card loading={this.props.loading} style={{margin: 15}}>
          <div className='salesCard'>
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
export default TradingHistory;
