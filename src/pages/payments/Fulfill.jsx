import React from 'react'
import { Row, Col, Typography, Icon } from 'antd'
import Result from 'ant-design-pro/lib/Result';
const { Title } = Typography
class Fulfill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { info } = this.props
        if (info.length !== 0)
            info[3] = `${info[3]} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        const information = (
            <div className='billInfor'>
                <Row>
                    <Col xs={24} sm={8} className='label'>
                        Hóa đơn số:
                    </Col>
                    <Col xs={24} sm={16}>
                        {info[4]}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='label'>
                        Ngày：
                    </Col>
                    <Col xs={24} sm={16}>
                        {info[5]}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='label'>
                        Thu ngân:
                    </Col>
                    <Col xs={24} sm={16}>
                        {info[0]}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={11} className='label'>
                        Tên sản phẩm：
                </Col>
                    <Col xs={24} sm={13}>
                        {info[1]}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='label'>
                        Số lượng：
                    </Col>
                    <Col xs={24} sm={16}>
                        {info[2]}
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} sm={8} className='label'>
                        Tổng tiền：
                    </Col>
                    <Col xs={24} sm={16}>
                        {info[3]}
                    </Col>
                </Row>
            </div>
        );
        return (
            <div className={info.length !== 0 ? 'res' : 'unRes'}>
                {info.length === 0 ? <Icon className='query' type="question-circle" theme="filled" /> : ''}
                <Result
                    type="success"
                    title={info.length !== 0 ? <Title level={3}>Tạo hóa đơn thành công!</Title> : ''}
                    extra={information}
                    className='result'
                />
            </div>
        );
    }
}
export default Fulfill