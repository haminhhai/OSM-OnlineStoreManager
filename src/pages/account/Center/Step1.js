import React, { Fragment,memo } from 'react';
import { Form, Input, Button, Select, Tabs } from 'antd';

const { Option } = Select;



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
        const Step1 = memo(
            ({handleSubmit, getFieldDecorator, Click}) => (
                <Fragment>
                <Form {...formItemLayout} onSubmit={handleSubmit} className='stepForm'>
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
                            rules: [{
                                required: true, message: 'Please input his/her last name',
                            }],
                        })(
                            <Input className='input-employee' type="text" placeholder='Last Name' />
                        )}
                    </Form.Item>
                </Form>
            </Fragment>
            )
        )
        

const WrappedStep1 = Form.create({ name: 'step1' })(Step1);
export default WrappedStep1;
