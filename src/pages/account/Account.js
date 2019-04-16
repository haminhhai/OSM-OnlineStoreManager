import React, { PureComponent} from 'react';
import { Card, Row, Col, } from 'antd';
import '../../styles/account.css'
import Infor from './Infor'
import TabChange from './TabChange'

class Account extends PureComponent {
  render() {
    return (
      <Card className='userCenter' style={{ margin: '15px', }}>
        <Row gutter={24} >
          <Col lg={5} md={24} style={{marginTop: '75px'}}>
            <Card bordered={true} loading={false}>
              <Infor />
            </Card>
          </Col>
          <Col lg={19} md={24}>
            <TabChange />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Account;
