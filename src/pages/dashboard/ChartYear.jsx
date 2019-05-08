import React, { memo } from 'react';
import { Row, Col, Card, Tabs} from 'antd';
import '../../styles/dashboard.css';
import { Bar } from 'ant-design-pro/lib/Charts';

const { TabPane } = Tabs;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `Coca Cola${i}`,
    total: 10,
  });
}
function handleToString(value) {
    var num = 0
    num = Number(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return num
  }
const ChartYear = memo(
  ({  yearData,  loading, rankingTrend}) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0}} style={{margin: 15}}>
      <div className='salesCard'>
        <Tabs
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane
            tab='Tổng năm'
            key="sales"
          >
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className='salesBar'>
                  <Bar
                    height={295}
                    title='Tổng hàng bán được năm 2019'
                    data={yearData !== [] ? yearData : []}
                  />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className='salesRank'>
                  <h4 className='rankingTitle'>
                        Xếp hạng sản phẩm 2019
                  </h4>
                  <ul className='rankingList'>
                    {rankingTrend.map((item, i) => (
                      <li key={item.productName}>
                        <span
                          className={`rankingItemNumber ${i < 3 ? 'active' : ''}`}
                        >
                          {i + 1}
                        </span>
                        <span className='rankingItemTitle' title={item.title}>
                          {item.productName}
                        </span>
                        <span className='rankingItemValue'>
                          {handleToString(item.amount)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  )
);

export default ChartYear;
