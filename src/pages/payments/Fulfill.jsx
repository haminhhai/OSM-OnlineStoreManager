import React from 'react'
import { Row, Col, Typography, Icon, Button } from 'antd'
import Result from 'ant-design-pro/lib/Result';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const { Title } = Typography
class Fulfill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    generatepdf = () => {
        var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAYAAAAZDlfxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTE2VDIwOjA3OjUyKzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0yNlQwOTozMDowNiswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wNC0yNlQwOTozMDowNiswNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjA0ODk5NS1hNTUzLTUyNGYtOWYxOC1iNDU1Mzk1ZWRmNzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkMGJmNTNlZC0xYzM2LTI5NDctOTFhNi05NzNhYmM1MmEyYzkiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZTcyN2Q0NC1mZWY4LWJlNGQtYmJjYi1lNmYwNmE0ZGQ2Y2IiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJlNzI3ZDQ0LWZlZjgtYmU0ZC1iYmNiLWU2ZjA2YTRkZDZjYiIgc3RFdnQ6d2hlbj0iMjAxOS0wNC0xNlQyMDowNzo1MiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MjA0ODk5NS1hNTUzLTUyNGYtOWYxOC1iNDU1Mzk1ZWRmNzkiIHN0RXZ0OndoZW49IjIwMTktMDQtMjZUMDk6MzA6MDYrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MhSNpAAAY4UlEQVR4nO2df7QWxXnHPxdEgeiFeukFWqgSQYpWKoYW1KpAjJGANrFiiwnR9g//6ek51DYhnDYGTXpO2xBNTU89saZNbI4JYgnij/iDgtrGYk2V1IiCoKAIiPz2gpcf927/eO76vvdlZ3Z2d3Zndt/3c85wD/fH7jMz33d2duaZ52kLgoAWLarOKQBtbW2u7SgzZwAT+8q5QCcwAujo+zocOA04te4rwDHgaN3XA8AeYG/f193AJmBjX/mggLpUkiAIaAuCoCV0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'
        const { info } = this.props
        if (info.length !== 0)
            info[3] = `${info[3]} đ`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        var doc = new jsPDF();
        doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
        doc.setFont('Roboto-Regular');
        doc.setFontSize(40)
        doc.text(35, 25, 'MADE BY OSM')
        doc.addImage(imgData, 'JPEG', 15, 40, 186, 186)

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