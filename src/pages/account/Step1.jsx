import React, { Fragment } from 'react';
import { Form, Input, Button, Select } from 'antd';
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
        }
    }
    componentDidMount() {
        if (localStorage.length !== 0)
            this.setState({
                email: localStorage.getItem('email'),
                fullname: localStorage.getItem('fullname'),
                username: localStorage.getItem('username'),
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.next()
                localStorage.setItem('email', values.email)
                localStorage.setItem('fullname', values.fullname)
                localStorage.setItem('username', values.username)
            }

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { email, fullname, username } = this.state
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
                    
                    <Form.Item label=''>
                        <Button loading={this.props.loading} htmlType="submit"
                            className='step-submit'
                            style={{marginLeft: '30px'}}
                        >Tiếp tục</Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}


const WrappedStep1 = Form.create({ name: 'step1' })(Step1);



export default WrappedStep1;
