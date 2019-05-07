import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip } from 'antd';
import { ChartCard, MiniProgress, Field } from 'ant-design-pro/lib/Charts';
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
const IntroduceRow = memo(({ loading, sumDay, sumMon, profitDay, profitMon }) => (
  <Row gutter={24} className='row-intro'>
    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Tổng hàng trong ngày'
        action={
          <Tooltip
            title='Hôm nay'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#86E3CE' }} />
          </Tooltip>
        }
        loading={loading}
        total= {sumDay}
        
        contentHeight={30}
      >
      
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Tổng hàng trong tháng'
        action={
          <Tooltip
            title='Tháng 5'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#ffdd94' }} />
          </Tooltip>
        }
        loading={loading}
        total={sumMon}
        contentHeight={30}
      >
        
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title='Lợi nhuận ngày'
        action={
          <Tooltip
            title='Hôm nay'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#ccabd8' }} />
          </Tooltip>
        }
        total={profitDay}
        contentHeight={30}
      >
      </ChartCard>
    </Col>
    <Col {...topColResponsiveProps}>
      <ChartCard
        loading={loading}
        bordered={false}
        title='Lợi nhuận tháng'
        action={
          <Tooltip
            title='Tháng 5'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#a72f1d' }} />
          </Tooltip>
        }
        total={profitMon}
        contentHeight={30}
      >
      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
