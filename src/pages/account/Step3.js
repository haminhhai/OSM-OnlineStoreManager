import React, { Fragment } from 'react';
import { Button, Row, Col, Form } from 'antd';
import Result from 'ant-design-pro/lib/Result';

class Step3 extends React.PureComponent {
    remove() {
        localStorage.clear()
    }
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
                        {localStorage.getItem('email')}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='{label'>
                        First Name：
                    </Col>
                    <Col xs={24} sm={16}>
                        {localStorage.getItem('first')}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='{label'>
                        Last Name：
                    </Col>
                    <Col xs={24} sm={16}>
                        {localStorage.getItem('last')}
                    </Col>
                </Row>

            </div>
        );
        const action = (
            <Fragment>
                <Button className='step-submit' onFocus={this.remove}
                    style={{ marginLeft: '10px' }}
                    onClick={() => this.props.init()}
                >Finished</Button>
            </Fragment>
        )
        return (
            <Result
                type="success"
                title="Create Account Successfully"
                description="Supply this account for your Employee now! "
                extra={information}
                actions={action}
                className='result'
            />
        );
    }
}
const WrappedStep3 = Form.create({ name: 'step3' })(Step3);
export default WrappedStep3;
