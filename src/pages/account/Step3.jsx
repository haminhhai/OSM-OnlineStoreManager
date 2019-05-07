import React, { Fragment } from 'react';
import { Form, Input, Divider, Alert, Button } from 'antd';

class Step2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            fullname: '',
            password: ''
        }
    }
    componentDidMount() {
        if (localStorage.length !== 0)
            this.setState({
                email: localStorage.getItem('email'),
                username: localStorage.getItem('username'),
                fullname: localStorage.getItem('fullname'),
                password: localStorage.getItem('password'),
            })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    }
    render() {
        const {email, username, fullname, password} = this.state
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        return (
            <Fragment>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className='stepFormText'>
                    <Alert
                        closable
                        showIcon
                        message="Kiểm tra lại thông tin và nhập mật khẩu để tiếp tục!"
                        style={{ marginBottom: 24 }}
                    />
                    <Form.Item
                        label="Hạng"
                    >
                        Nhân viên
                    </Form.Item>
                    <Form.Item
                        label="Username"
                    >
                        {username}
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                    >
                        {email}
                    </Form.Item>
                    
                    <Form.Item
                        label="Họ và tên"
                    >
                        {fullname}
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                    >
                        {password}
                    </Form.Item>
                    <Divider style={{ margin: '24px 0' }} />
                   
                    <Form.Item>
                        <Button className='step-submit' 
                            onClick={() => this.props.prev()}>Quay lại</Button>
                        <Button loading={this.props.loading} 
                            className='step-submit' 
                            style={{ marginLeft: 2 }} 
                            htmlType='submit'>
                            Tiếp tục
                        </Button>
                    </Form.Item>
                </Form>

            </Fragment>
        );
    }
}
const WrappedStep2 = Form.create({ name: 'step2' })(Step2);
export default WrappedStep2;