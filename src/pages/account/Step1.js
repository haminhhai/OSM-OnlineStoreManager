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
            email: '',
            first: '',
            last: '',
        }
    }
    componentDidMount() {
        if (localStorage.length !== 0)
            this.setState({
                email: localStorage.getItem('email'),
                first: localStorage.getItem('first'),
                last: localStorage.getItem('last'),
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.next()
                localStorage.setItem('email', values.email)
                localStorage.setItem('first', values.first)
                localStorage.setItem('last', values.last)
            }

        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { email, first, last } = this.state
        return (
            <Fragment>
                <Form {...formItemLayout1} onSubmit={this.handleSubmit} className='stepForm'>
                    <Form.Item
                        label="Rank"
                    >
                        {getFieldDecorator('rank', {
                            initialValue: 'Employee',
                            rules: [{ required: true, message: 'Please choose Employee' }],
                        })(
                            <Select placeholder="Employee" className='input-employee'>
                                <Option value="Employee">Employee</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            initialValue: email,
                            rules: [{
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
                            }],
                        })(
                            <Input className='input-employee' placeholder='test@osm.vn' />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="First Name"
                    >
                        {getFieldDecorator('first', {
                            initialValue: first,
                            rules: [{
                                required: true, message: 'Please input his/her first name',
                            },],
                        })(
                            <Input className='input-employee' type="text" placeholder='First Name' />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                    >
                        {getFieldDecorator('last', {
                            initialValue: last,
                            rules: [{
                                required: true, message: 'Please input his/her last name',
                            }],
                        })(
                            <Input className='input-employee' type="text" placeholder='Last Name' />
                        )}
                    </Form.Item>
                    <Form.Item label=''>
                        <Button loading={this.props.loading} htmlType="submit"
                            className='step-submit'
                            style={{marginLeft: '30px'}}
                        >Next</Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}


const WrappedStep1 = Form.create({ name: 'step1' })(Step1);



export default WrappedStep1;
