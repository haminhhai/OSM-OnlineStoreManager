import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from 'ant-design-pro/lib/Charts';
import Trend from 'ant-design-pro/lib/Trend';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};
function handleToString(value) {
  var num = 0
  num = Number(value).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " VND"
  return num
}
const IntroduceRow = memo(({ loading }) => (
  <Row gutter={24} className='row-intro'>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Total Daily'
        action={
          <Tooltip
            title='Today'
          >
            <Icon type="pie-chart" theme="filled" style={{color: '#86E3CE'}}/>
          </Tooltip>
        }
        loading={loading}
        total={handleToString(1000000)}
        footer={
          <Field
            label='DailyChanges'
            value={handleToString(200000)}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          Weekly Changes
          <span className='trendText'> 12%</span>
        </Trend>
        <Trend flag="down">
          DailyChanges
          <span className='trendText'> 11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Total Monthly'
        action={
          <Tooltip
            title='April'
          >
            <Icon type="pie-chart" theme="filled" style={{color: '#ffdd94'}}/>
          </Tooltip>
        }
        loading={loading}
        total={handleToString(12000000)}
        footer={
          <Field
            label='MonthlyChanges'
            value={handleToString(200000)}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }}>
          Monthly Changes
          <span className='trendText'> 2%</span>
        </Trend>
        <Trend flag="down">
          Weekly Changes
          <span className='trendText'> 69%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title='Profit on Day'
        action={
          <Tooltip
            title='Today'
          >
            <Icon type="pie-chart" theme="filled" style={{color: '#ccabd8'}}/>
          </Tooltip>
        }
        total="80%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }}>
              Compare to yesterday
              <span className='trendText'> 12%</span>
            </Trend>

          </div>
        }
        contentHeight={46}
      >
        <span>Reach to target:</span>
        <MiniProgress
          percent={78}
          strokeWidth={8}
          target={80}
          color="#DE5B6D"
        />
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title='Profit in Month'
        action={
          <Tooltip
            title='April'
          >
            <Icon type="pie-chart" theme="filled" style={{color: '#a72f1d'}}/>
          </Tooltip>
        }
        total="60%"
        
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="down">
              Compare to previous month
              <span className='trendText'> 30%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <span>Reach to target:</span>
        <MiniProgress
          percent={78}
          strokeWidth={8}
          target={80}
          color="#86E3CE"
        />
        
        
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
