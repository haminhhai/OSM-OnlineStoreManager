import React from 'react'
import { Row, Col, Typography, Icon, Button } from 'antd'
import Result from 'ant-design-pro/lib/Result';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import {BLACK_LOGO} from '../../routes/constans/index'

const { Title } = Typography
class Fulfill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    generatepdf = () => {
        var imgData = BLACK_LOGO
        const { info } = this.props
        if (info.length !== 0)
            info[3] = `${info[3]} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        var doc = new jsPDF();
        doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
        doc.setFont('Roboto-Regular');
        doc.setFontSize(40)
        doc.text(55, 25, 'MADE BY OSM')
        doc.addImage(imgData, 'JPEG', 80, 40, 50, 50)
        doc.setFontSize(20)
        doc.text(`Hóa đơn số: ${info[4]}`, 15, 105)
        doc.text(`Ngày thanh toán: ${info[5]}`, 15, 115)
        doc.text(`Thu ngân: ${info[0]}`, 15, 125)
        doc.text(`Tên sản phẩm: ${info[1]}`, 15, 135)
        doc.text(`Số lượng: ${info[2]}`, 15, 145)
        doc.text(`Tổng tiền: ${info[3]} d`, 15, 155)
        doc.save('payment.pdf');

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
                {info.length !== 0 ? <Button icon='file-pdf' onClick={this.generatepdf} style={{marginLeft: '150px'}}>Xuất PDF</Button> : ''}
            </div>
        );
    }
}
export default Fulfill