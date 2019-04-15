import React, { memo } from 'react';
import { Row, Col, Card, Tabs, DatePicker } from 'antd';
import '../../styles/dashboard.css';
import { Bar } from 'ant-design-pro/lib/Charts';

const { RangePicker } = DatePicker;
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
  ({ rangePickerValue, yearData, isActive, handleRangePickerChange, loading, selectDate }) => (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0}} style={{margin: 15}}>
      <div className='salesCard'>
        <Tabs
          tabBarExtraContent={
            <div className='salesExtraWrap'>
              <div className='salesExtra'>
                <a className={isActive('today')} onClick={() => selectDate('today')}>
                  All Day
                </a>
                <a className={isActive('week')} onClick={() => selectDate('week')}>
                  All Week
                </a>
                <a className={isActive('month')} onClick={() => selectDate('month')}>
                  All Month
                </a>
                <a className={isActive('year')} onClick={() => selectDate('year')}>
                  All Year
                </a>
              </div>
              <RangePicker 
                value={rangePickerValue}
                onChange={handleRangePickerChange}
               
              />
            </div>
          }
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane
            tab='Total Yearly'
            key="sales"
          >
            <Row>
              <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                <div className='salesBar'>
                  <Bar
                    height={295}
                    title='Total Sold Products in 2019'
                    data={yearData}
                  />
                </div>
              </Col>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className='salesRank'>
                  <h4 className='rankingTitle'>
                        Product Ranking 2019
                  </h4>
                  <ul className='rankingList'>
                    {rankingListData.map((item, i) => (
                      <li key={item.title}>
                        <span
                          className={`rankingItemNumber ${i < 3 ? 'active' : ''}`}
                        >
                          {i + 1}
                        </span>
                        <span className='rankingItemTitle' title={item.title}>
                          {item.title}
                        </span>
                        <span className='rankingItemValue'>
                          {handleToString(item.total)}
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
