import React from 'react'
import {  Form, Button, Input, Card, Popconfirm, Icon, notification, message } from 'antd'
import callAPI from '../../utils/apiCaller'
import * as types from '../../routes/constans/index'

const TextArea = Input.TextArea;
const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} />
            </Form.Item>
            <Form.Item>
                <Popconfirm title="Chắc chắn muốn gửi?"
                    onConfirm={onSubmit}
                    icon={<Icon type='mail' theme='filled' style={{ color: '#0077ff' }} />}
                    okText='Có'
                    cancelText='Không'>
                    <Button
                        htmlType="submit"
                        loading={submitting}
                        className='step-submit'
                        style={{ marginLeft: '10px' }}
                    >
                        Gửi
                </Button>
                </Popconfirm>

            </Form.Item>
        </div>
    );




class Report extends React.Component {
    state = {
        comments: [],
        submitting: false,
        value: '',
    }

    handleSubmit = () => {
        var notify = ''
        const id = localStorage.getItem('ID')
        const {value} = this.state
        if (value === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_TEXT,
                icon: types.ICON_INCOMPLETE,
            })
        else
        {
            this.setState({
                submitting: true,
            })
            let infoRequest = `/Inside/ReportToBoss?ID_Employee=${id}&TEXTREPORT=${value}`
            callAPI(infoRequest, 'POST', null).then(res => {
                if(res !== undefined)
                { 
                setTimeout(() => {
                    message.success('Gửi thành công!')
                    this.setState({
                        submitting: false,
                    })
                }, 2000);
                }
                else console.log(res)
                
            })
            
        }
        
        return notify
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { submitting, value } = this.state;
        return (
            <div>
                <Card style={{ margin: 15 }}>
                    <div style={{ color: 'rgba(0,0,0,0.85)', fontSize: '16px', fontWeight: '600' }}>
                        Gửi phản hồi cho quản lý của bạn
                    </div>
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        value={value}
                    />

                </Card>
            </div>
        );
    }

}
export default Report