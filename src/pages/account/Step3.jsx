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
                        Hạng：
                    </Col>
                    <Col xs={24} sm={16}>
                        Nhân viên
                     </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='{label'>
                        Username：
                    </Col>
                    <Col xs={24} sm={16}>
                        {localStorage.getItem('username')}
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
                        Họ và tên：
                    </Col>
                    <Col xs={24} sm={16}>
                        {localStorage.getItem('fullname')}
                    </Col>
                </Row>
               

            </div>
        );
        const action = (
            <Fragment>
                <Button className='step-submit' onFocus={this.remove}
                    style={{ marginLeft: '10px' }}
                    onClick={() => this.props.init()}
                >Hoàn tất</Button>
            </Fragment>
        )
        return (
            <Result
                type="success"
                title="Tạo tài khoản thành công"
                description="Cấp tài khoản cho nhân viên ngay!"
                extra={information}
                actions={action}
                className='result'
            />
        );
    }
}
const WrappedStep3 = Form.create({ name: 'step3' })(Step3);
export default WrappedStep3;
