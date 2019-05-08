import React, { Fragment } from 'react';
import { Form, Input, Button, Select, notification } from 'antd';
import callAPI from '../../utils/apiCaller'
import * as types from '../../routes/constans/index'

const { Option } = Select;
const formItemLayout1 = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class Step1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            fullname: '',
            password: '',
            code: '',
            message: ''
        }
    }
    componentDidMount() {
        if (localStorage.length !== 0)
            this.setState({
                email: localStorage.getItem('email'),
                fullname: localStorage.getItem('fullname'),
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password'),
            })
    }
    sendNoti = (value) => {
        return value
    }
    handleSubmit = (e) => {
        var notify = ''
        const rights = localStorage.getItem('rights')
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                const email = values.email
                const username = values.username
                const fullname = values.fullname
                const password = values.password
                let infoRequest = `/Inside/AddEmployee?ID_BOSS=${rights}&USERNAME=${username}&PASSWORD=${password}&EMAIL=${email}&FULLNAME=${fullname}`
                callAPI(infoRequest, 'POST', null).then(res => {
                    if (res !== undefined) {
                        this.setState({ code: res.data.code, message: res.data.message })
                        let { code, message } = this.state
                        if (Number(code) === 200) {
                            this.props.next()
                            localStorage.setItem('email', values.email)
                            localStorage.setItem('fullname', values.fullname)
                            localStorage.setItem('username', values.username)
                            localStorage.setItem('password', values.password)
                        }
                        else if (Number(code) === 400) {
                            if (message === "Tên đăng nhập đã tồn tại") {
                                notify = notification.open({
                                    message: types.MESSAGE_FAILED,
                                    description: types.BD_WRONG_FAILED_USER_EXIST,
                                    icon: types.ICON_FAILED,
                                })
                                this.sendNoti(notify)
                            }
                            else if (message === "Email đã tồn tại")
                                notify = notification.open({
                                    message: types.MESSAGE_FAILED,
                                    description: types.BD_EMAIL_EXISTED,
                                    icon: types.ICON_FAILED,
                                })
                            else if (message === 'Mật khẩu không đủ độ dài') {
                                notify = notification.open({
                                    message: types.MESSAGE_FAILED,
                                    description: types.BD_MESSAGE_FAILED_CHAR_PASSWORD,
                                    icon: types.ICON_FAILED,
                                })
                                this.sendNoti(notify)
                            }

                        }
                    }
                    else console.log(res)

                })




            }

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { email, fullname, username, password } = this.state
        return (
            <Fragment>
                <Form {...formItemLayout1} onSubmit={this.handleSubmit} className='stepForm'>
                    <Form.Item
                        label="Cấp bậc"
                    >
                        {getFieldDecorator('rank', {
                            initialValue: 'Nhân viên',
                            rules: [{ required: true, message: 'Hãy chọn nhân viên' }],
                        })(
                            <Select placeholder="Employee" className='input-employee'>
                                <Option value="Employee">Nhân viên</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Username"
                    >
                        {getFieldDecorator('username', {
                            initialValue: username,
                            rules: [{
                                required: true, message: 'Hãy điền thông tin!',
                            }],
                        })(
                            <Input className='input-employee' type="text" placeholder='Nhập...' />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            initialValue: email,
                            rules: [{
                                type: 'email', message: 'Sai định dạng email!',
                            }, {
                                required: true, message: 'Hãy nhập email!',
                            }],
                        })(
                            <Input className='input-employee' placeholder='test@osm.vn' />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Họ và tên"
                    >
                        {getFieldDecorator('fullname', {
                            initialValue: fullname,
                            rules: [{
                                required: true, message: 'Hãy điền thông tin!',
                            },],
                        })(
                            <Input className='input-employee' type="text" placeholder='Nhập...' />
                        )}
                    </Form.Item>
                    <Form.Item label="Mật khẩu">
                        {getFieldDecorator('password', {
                            initialValue: password,
                            rules: [
                                {
                                    required: true,
                                    message: 'Nhập mật khẩu!',
                                },
                            ],
                        })(<Input className='input-employee'
                            type="password"
                            autoComplete="off"
                            placeholder='Mật khẩu' />)}
                    </Form.Item>
                    <Form.Item label=''>
                        <Button loading={this.props.loading} htmlType="submit"
                            className='step-submit'
                            style={{ marginLeft: '30px' }}
                        >Tiếp tục</Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}


const WrappedStep1 = Form.create({ name: 'step1' })(Step1);



export default WrappedStep1;
