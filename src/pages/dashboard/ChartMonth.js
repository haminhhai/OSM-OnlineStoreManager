import React, { memo } from 'react';
import { Row, Col, Table, Tooltip, Card, Icon } from 'antd';
import Trend from 'ant-design-pro/lib/Trend';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import { MiniArea } from 'ant-design-pro/lib/Charts';


const columns = [
  {
    title: 'Rank',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Product Name',
    dataIndex: 'keyword',
    key: 'keyword',
    render: text => <a href="/">{text}</a>,
  },
  {
    title: 'Number',
    dataIndex: 'count',
    key: 'count',
    sorter: (a, b) => a.count - b.count,
    align: 'center',
  },
  {
    title: 'Weekly Range',
    dataIndex: 'range',
    key: 'range',
    sorter: (a, b) => a.range - b.range,
    render: (text, record) => (
      <Trend flag={record.status === 1 ? 'down' : 'up'}>
        <span style={{ marginRight: 4 }}>{text}%</span>
      </Trend>
    ),
    align: 'right',
  }
];
function handleToString(value) {
    var num = 0
    num = Number(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return num
  }
const title = () => <div style={{color: 'rgba(0,0,0,0.85)', fontSize: '14px', fontWeight: '600', textAlign: 'center'}}>Product Trending in April</div>;
const ChartMonth = memo(({ loading, monthData, rankData, dropdownGroup }) => (
  <Card style={{margin: 15}}
    loading={loading}
    bordered={false}
    title='Total Monthly'
    extra={dropdownGroup}
  >
    <Row gutter={68}>
      <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo
          subTitle={
            <span>
              Money Changes
              <Tooltip
                title='money'
              >
                <Icon type="fund" theme="filled" style={{ marginLeft: 8, color: '#6b8e4e' }}/>
              </Tooltip>
            </span>
          }
          gap={8}
          total={handleToString(12321)}
          status="up"
          subTotal={17.1}
        />
        <MiniArea line height={45} data={monthData} />
      </Col>
      <Col sm={12} xs={24} style={{ marginBottom: 24 }}>
        <NumberInfo
          subTitle={
            <span>
              Percent Changes
              <Tooltip
                title='percent'
              >
                <Icon type="fund" theme="filled" style={{ marginLeft: 8, color: '#ec6091'  }}/>
              </Tooltip>
            </span>
          }
          total={2.7+ '%'}
          status="down"
          subTotal={26.2+ '%'}
          gap={8}
        />
        <MiniArea line height={45} data={monthData} />
      </Col>
    </Row>
    <Table title = {title}
      rowKey={record => record.index}
      columns={columns}
      dataSource={rankData}
      pagination={{
        style: { marginBottom: 0 },
        pageSize: 5,
      }}
    />
  </Card>
));

export default ChartMonth;
