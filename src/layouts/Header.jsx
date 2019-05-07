import React from 'react'
import {  Dropdown, Avatar,Menu, Icon, message  } from 'antd';
import '../styles/layout.css'
import { Link } from 'react-router-dom'
import dog from '../assets/icons/dog.png'
import cat from '../assets/icons/cat.png'
import beer from '../assets/icons/beer.png'
import girafee from '../assets/icons/girafee.png'
import bee from '../assets/icons/bee.png'
import alien from '../assets/icons/alien.png'
import bird from '../assets/icons/bird.png'
import girl from '../assets/icons/girl.png'

const ava = [dog, cat, bee, beer, girafee, alien, bird, girl]
class Header extends React.Component {

    onLogout = () => {
        sessionStorage.clear()
        localStorage.clear()
        message.warning("Bạn đã đăng xuất!")
    }
    render() {
        var pos = window.location.pathname.slice(1).indexOf('/')
        var path = window.location.pathname.slice(0,pos + 1)
        const fullname = localStorage.getItem('nameAcc')
        const avatar = localStorage.getItem('ava')
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
                        <Avatar src = {ava[avatar]}/>
                        <div className='name-user'>{fullname}</div>    
                    </span>
                </Dropdown>
            </div>
        );
    }
}
export default Header