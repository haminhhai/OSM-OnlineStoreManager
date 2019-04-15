import React from 'react'
import { Layout, Menu, Icon, } from 'antd'
import { Route, NavLink, Link } from 'react-router-dom'
import '../styles/layout.css'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Pic from '../assets/icons/symbol.png'
import SubMenu from 'antd/lib/menu/SubMenu';
import { options } from './constans/index'

class ManageLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            key: []
        }
    }
    componentDidMount() {
        this.changeOption()
    }

    changeOption = () => {
        let defaul = ''
        var pos = window.location.pathname.slice(1).indexOf('/')
        var path = window.location.pathname.slice(pos + 2)
        for (var i = 0; i < options.length; i++)
            if (path === options[i].path)
                defaul = options[i].key

        this.setState({ key: defaul })
    }
    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed })
    }
    render() {
        const { match } = this.props.match
        const url = match.url
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
                        <Menu theme="dark" mode="inline" selectedKeys={this.state.key} defaultOpenKeys={['0']}>
                            <Menu.Item key="1" onClick={this.changeOption}>
                                <Link to={`${url}/dashboard`}>
                                    <Icon type="dashboard" />
                                    <span>{options[0].title}</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={this.changeOption}>
                                <Link to={`${url}/payment`}>
                                    <Icon type="credit-card" />
                                    <span>{options[1].title}</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={this.changeOption}>
                                <Link to={`${url}/checkout`}>
                                    <Icon type="security-scan" />
                                    <span>{options[2].title}</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu key='0' 
                                title={<span>
                                    <Icon type="user" />
                                    <span>Tài khoản</span>
                                </span>}>
                                <Menu.Item key="4" onClick={this.changeOption}>
                                    <Link to={`${url}/information`}>
                                        <Icon type='profile' />
                                        <span>{options[3].title}</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="5" onClick={this.changeOption}>
                                    <Link to={`${url}/setting`}>
                                        <Icon type='setting' />
                                        <span>{options[4].title}</span>
                                    </Link>
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
                            <Route path='/:id/:name' component={Content} />
                        </Layout.Content>
                        <Layout.Footer style={{
                            margin: '24px 16px', padding: 0, minHeight: 50,
                        }}
                        >
                            <Footer />
                        </Layout.Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default ManageLayout