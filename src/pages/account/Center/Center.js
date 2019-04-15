import React, { PureComponent, Suspense } from 'react';
import { Card, Row, Col, Icon, Steps, Button, Tabs, message, Form } from 'antd';
import '../../../styles/center.css'
import Infor from './Infor'
import WrappedStep1 from './Step1'
import WrappedStep2 from './Step2'
import WrappedStep3 from './Step3'



class TabChange extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      loading: false
    }
  }
  next() {
    const current = this.state.current + 1;
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({ 
        current,loading: false
      });
    }, 1000);
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  fini() {
    const current = this.state.current + 1
    this.setState({loading: true})
    message.loading('Confirming')
    setTimeout(() => {
      
      this.setState({ 
        current,loading: false
      });
    }, 3000);
  }
  init() {
    message.success('Initial complete!')
    this.setState({current: 0})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  CLick = type => {
    console.log(type)
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const steps = [
      {
        title: 'Initial account',
        content: <WrappedStep1 handleSubmit={this.handleSubmit} getFieldDecorator={getFieldDecorator} CLick={this.CLick}/>,
        icon: <Icon type="solution" />
      },
      {
        title: 'Initial password',
        content: <WrappedStep2 />,
        icon: <Icon type="lock" />
      },
      {
        title: 'Done',
        content: <WrappedStep3 />,
        icon: <Icon type="smile" />
      },
    ]
    const current = this.state.current
    const loading = this.state.loading
    return (
      <Suspense>
        <Tabs >
          <Tabs.TabPane tab='Add Employee' key='1'>
            <Steps current={current}>
              {steps.map(item => <Steps.Step icon={item.icon} key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {
                current === 0
                && <Button loading={loading} className='step-submit' style={{ marginLeft: '360px' }} onClick={() => this.next()}>Next</Button>
              }
              {
                current === steps.length - 1
                && <Button className='step-submit' style={{ marginLeft: '280px' }} onClick={() => this.init()}>Finished</Button>
              }
              {
                (current > 0 && current !== steps.length - 1)
                && (
                  <div>
                    <Button loading={loading} className='step-submit' onClick={() => this.fini()}>Next</Button>
                    <Button className='step-submit' style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Previous
                  </Button>
                  </div>
                )
              }
            </div>
          </Tabs.TabPane>
        </Tabs>
      </Suspense >
    );
  }
}
class Center extends PureComponent {
  render() {
    return (
      <Card className='userCenter' style={{ margin: '15px', }}>
        <Row gutter={24} >
          <Col lg={7} md={24}>
            <Card bordered={true} loading={false}>
              <Infor />
            </Card>
          </Col>
          <Col lg={17} md={24}>
            <WrappedStep />
          </Col>
        </Row>
      </Card>
    );
  }
}
const WrappedStep = Form.create({ name: 'step' })(TabChange);
export default Center;
