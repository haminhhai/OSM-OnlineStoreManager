import React from 'react'
import { Layout, Menu, Icon, } from 'antd'
import '../styles/layout.css'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Pic from '../assets/icons/symbol.png'
import SubMenu from 'antd/lib/menu/SubMenu';

class ManageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }
    render() {
        return (
            <div className='layout-ant'>
                <Layout>
                    <Layout.Sider className='sider-ant'
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo-db">
                            <img src={Pic} alt='' />
                            <h1 >OSM</h1>
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Icon type="dashboard" />
                                <span>Dashboard</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="credit-card" />
                                <span>Thanh toán</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="security-scan" />
                                <span>Kiểm hàng</span>
                            </Menu.Item>
                            <SubMenu key='4' 
                                title={<span>
                                        <Icon type="user" />
                                        <span>Tài khoản</span>
                                    </span>}>
                                        <Menu.Item key="5">
                                            <Icon type='profile' />
                                            <span>Thông tin</span>
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            <Icon type='setting' />
                                            <span>Cài đặt</span>
                                        </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Layout.Sider>
                    <Layout>
                        <Layout.Header className='header-ant'>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Header />
                        </Layout.Header>
                        <Layout.Content >
                            <Content />
                        </Layout.Content>
                        <Layout.Footer style={{
                            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 100,
                        }}
                        >
                            Footer
                        </Layout.Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default ManageLayout