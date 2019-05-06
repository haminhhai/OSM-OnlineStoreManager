import React, { PureComponent, Suspense, } from 'react'
import { Icon, Steps, Tabs, message, Tooltip, } from 'antd'
import ListEmploy from './ListEmploy'
import Report from './Report'
import WrappedStep1 from './Step1'
import WrappedStep2 from './Step2'
import WrappedStep3 from './Step3'
class AddEmploy extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            loading: false,

        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ loading: true })
        setTimeout(() => {
            this.setState({
                current, loading: false
            });
        }, 1000);
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    fini() {
        const current = this.state.current + 1
        this.setState({ loading: true })
        message.loading('Confirming', 2.5)
            .then(() => message.success('Finished', 2.5))
        setTimeout(() => {
            this.setState({
                current, loading: false
            });
        }, 3000);
    }
    init() {
        this.setState({ current: 0 })
    }
    render() {
        const steps = [
            {
                title: 'Khởi tạo thông tin',
                content: <WrappedStep1 next={this.next.bind(this)} loading={this.state.loading} />,
                icon: <Icon type="solution" />
            },
            {
                title: 'Mật khẩu',
                content: <WrappedStep2 finish={this.fini.bind(this)} prev={this.prev.bind(this)} loading={this.state.loading} />,
                icon: <Icon type="lock" />
            },
            {
                title: 'Xong!',
                content: <WrappedStep3 init={this.init.bind(this)} />,
                icon: <Icon type="smile" />
            },
        ]
        const current = this.state.current
        return (
            <Suspense >
                <Tabs >
                    <Tabs.TabPane tab={<Tooltip title='Chỉ dành cho quản lý'><Icon type="table" />Danh sách</Tooltip>} key='1'>
                        <ListEmploy />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<Tooltip title='Chỉ dành cho quản lý'><Icon type="team" />Thêm nhân viên</Tooltip>} key='2'>
                        <Steps current={current}>
                            {steps.map(item =><Steps.Step icon={item.icon} key={item.title} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<Tooltip title='Chỉ dành cho nhân viên'><Icon type="message" />Gửi phản hồi</Tooltip>} key='3'>
                        <Report />
                    </Tabs.TabPane>
                </Tabs>
            </Suspense >
        );
    }
}

export default AddEmploy