import React from 'react'
import {Card, Typography, Table, Button} from 'antd'
import '../../styles/checkout.scss'
import axios from 'axios'
import {saveas} from 'file-saver'
const {Title} = Typography
function handleToString(value) {
    var num = 0
    num = `${Number(value).toString()} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return num
  }
const data = []
for (let i = 0; i < 10; i++) {
    var res = Math.floor(Math.random() * 20000) + 5000
    data.push({
      id: `${i + 1}`,
      name: `Pepsi ${i + 1}`,
      line: 'Dòng sản phẩm',
      price: handleToString(res),
      cashier: "Unique",
      description: `Đây là mô tả sản phẩm ${i + 1}`
  
    });
}
const columns = [{
    align: 'center',
    title: 'STT',
    dataIndex: 'id',
    width: '5%',
  }, {
    align: 'center',
    title: 'Tên sản phẩm',
    dataIndex: 'name',
  },
  {
    align: 'center',
    title: 'Dòng sản phẩm',
    dataIndex: 'line',
  },
  {
    align: 'center',
    title: 'Giá',
    dataIndex: 'price',
    
  },{
    align: 'center',
    title: 'Thu ngân',
    dataIndex: 'cashier',
  },
  ]

class Checkout extends React.Component{
    state = {
        name: 'Adrian',
        receiptId: 0,
        price1: 0,
        price2: 0,
     }
    printPdf = () => {
        axios.post('/create-pdf', this.state)
    }
    render() {
        return (
            <Card className='checkout-card'>
                <Title level={3}>Bảng thống kê hàng hóa</Title>
                <Table
                    className='productTable'
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                    columns={columns}
                    bordered/>
                <Button>Nhập hàng</Button>
                <Button onClick={this.printPdf}>Xuất PDF</Button>
            </Card>
        );
    }
}
export default Checkout