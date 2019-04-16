import React, { Fragment } from 'react';
import { Form, Input, Divider, Alert, Button } from 'antd';

class Step2 extends React.PureComponent {
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
                this.props.finish()
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {email, first, last} = this.state
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
                        message="Please check below information again and input password for this account to continue."
                        style={{ marginBottom: 24 }}
                    />
                    <Form.Item
                        label="Rank"
                    >
                        Employee
                            </Form.Item>
                    <Form.Item
                        label="E-mail"
                    >
                        {email}
                            </Form.Item>
                    <Form.Item
                        label="First Name"
                    >
                        {first}
                            </Form.Item>
                    <Form.Item
                        label="Last Name"
                    >
                        {last}
                            </Form.Item>
                    <Divider style={{ margin: '24px 0' }} />
                    <Form.Item {...formItemLayout} label="Password" required={false}>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input password for this account!',
                                },
                            ],
                        })(<Input className='input-employee'
                            type="password"
                            autoComplete="off"
                            placeholder='Password' />)}
                    </Form.Item>
                    <Form.Item>
                        <Button className='step-submit' 
                            onClick={() => this.props.prev()}>Previous</Button>
                        <Button loading={this.props.loading} 
                            className='step-submit' 
                            style={{ marginLeft: 2 }} 
                            htmlType='submit'>
                            Next
                        </Button>
                    </Form.Item>
                </Form>

            </Fragment>
        );
    }
}
const WrappedStep2 = Form.create({ name: 'step2' })(Step2);
export default WrappedStep2;
