import React, { Fragment } from 'react';
import { Form, Input, Divider, Alert } from 'antd';

class Step2 extends React.PureComponent {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    render() {

        const { getFieldDecorator } = this.props.form;

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
                        employee1@osm.vn
                            </Form.Item>
                    <Form.Item
                        label="First Name"
                    >
                        Tram
                            </Form.Item>
                    <Form.Item
                        label="Last Name"
                    >
                        Anh
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
                </Form>

            </Fragment>
        );
    }
}
const WrappedStep2 = Form.create({ name: 'step2' })(Step2);
export default WrappedStep2;
