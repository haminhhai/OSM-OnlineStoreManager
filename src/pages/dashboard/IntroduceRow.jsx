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
const IntroduceRow = memo(({ loading }) => (
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
        total={handleToString(1000000)}
        footer={
          <Field
            label='Thay đổi ngày'
            value={handleToString(200000)}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }} reverseColor={true}>
          Thay đổi tuần
          <span className='trendText'> 12%</span>
        </Trend>
        <Trend flag="down" reverseColor={true}>
          Thay đổi ngày
          <span className='trendText'> 11%</span>
        </Trend>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard
        bordered={false}
        title='Tổng hàng trong tháng'
        action={
          <Tooltip
            title='Tháng 4'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#ffdd94' }} />
          </Tooltip>
        }
        loading={loading}
        total={handleToString(12000000)}
        footer={
          <Field
            label='Thay đổi tháng'
            value={handleToString(200000)}
          />
        }
        contentHeight={46}
      >
        <Trend flag="up" style={{ marginRight: 16 }} reverseColor={true}>
          Thay đổi tháng
          <span className='trendText'> 2%</span>
        </Trend>
        <Trend flag="down" reverseColor={true}>
          Thay đổi tuần
          <span className='trendText'> 69%</span>
        </Trend>
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
        total="80%"
        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="up" style={{ marginRight: 16 }} reverseColor={true}>
              So với hôm qua:
              <span className='trendText'> 12%</span>
            </Trend>

          </div>
        }
        contentHeight={46}
      >
        <span>Đạt chỉ tiêu:</span>
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
        title='Lợi nhuận tháng'
        action={
          <Tooltip
            title='Tháng 4'
          >
            <Icon type="pie-chart" theme="filled" style={{ color: '#a72f1d' }} />
          </Tooltip>
        }
        total="60%"

        footer={
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend flag="down" reverseColor={true}>
              So với tháng trước
              <span className='trendText'> 30%</span>
            </Trend>
          </div>
        }
        contentHeight={46}
      >
        <span>Đạt chỉ tiêu:</span>
        <MiniProgress
          percent={60}
          strokeWidth={8}
          target={60}
          color="#86E3CE"
        />


      </ChartCard>
    </Col>
  </Row>
));

export default IntroduceRow;
