import React from 'react'
import {  Dropdown, Avatar,Menu, Icon, message  } from 'antd';
import '../styles/layout.css'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'F.Hiquery'
        }
    }

    onLogout = () => {
        sessionStorage.clear()
        message.warning("Bạn đã đăng xuất!")
    }
    render() {
        var pos = window.location.pathname.slice(1).indexOf('/')
        var path = window.location.pathname.slice(0,pos + 1)
        const menu = (
            <Menu>
                <Menu.Item key="0" onClick={this.props.compo}>
                    <Link to={`${path}/account`} >
                        <Icon type='user' />
                        {` Tài khoản`}
                    </Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1" onClick={this.onLogout}>
                    <Link to='/signin&signup'>
                        <Icon type='logout' />
                        {` Đăng xuất`}
                    </Link>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className='notice-ant'>
                <Dropdown overlay={menu} >
                    <span className='dropdown-user'>
                        <Avatar className='avatar-user'>OSM</Avatar>
                        <div className='name-user'>{this.state.name}</div>    
                    </span>
                </Dropdown>
            </div>
        );
    }
}
export default Header