import React, { Fragment } from 'react';
import { Button, Row, Col,Form } from 'antd';
import Result from 'ant-design-pro/lib/Result';

class Step3 extends React.PureComponent {
  render() {
    const information = (
      <div className='information'>
        <Row>
          <Col xs={24} sm={8} className='{label'>
            Rank：
          </Col>
          <Col xs={24} sm={16}>
            Empolyee
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className='{label'>
            E-mail：
          </Col>
          <Col xs={24} sm={16}>
            employee1@osm.vn
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className='{label'>
            First Name：
          </Col>
          <Col xs={24} sm={16}>
            Tram
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={8} className='{label'>
            Last Name：
          </Col>
          <Col xs={24} sm={16}>
            Anh
          </Col>
        </Row>
      </div>
    );
    
    return (
      <Result
        type="success"
        title="Create Account Success"
        description="Supply this account for your Employee now! "
        extra={information}
        className='result'
      />
    );
  }
}
const WrappedStep3 = Form.create({name: 'step3' })(Step3);
export default WrappedStep3;
