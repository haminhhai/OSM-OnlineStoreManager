import React from 'react'
import { Icon, Button, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import '../../styles/home.css'
import logo from '../../assets/icons/symbol.png'
import HomeInfor from './HomeInfor';

class HomePage extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0" >
                    Phạm Đức Duy
                </Menu.Item>
                <Menu.Item key="1" >
                    Hà Minh Hải
                </Menu.Item>
                <Menu.Item key="2" >
                    Đỗ Thành Đạt
                </Menu.Item>
                <Menu.Item key="3" >
                    Nguyễn Hữu Đạt
                </Menu.Item>
            </Menu>
        )
        return (
            <div>
                <div className='background'>
                    <div className='home-panel'>
                        <div className='logo'>
                            <div className='osm-logo' />
                        </div>
                        <Dropdown className='home-panel__about' overlay={menu}>
                            <span>
                                <Icon type='profile' className='icon-about' theme='filled' />
                                Thành viên
                        </span>
                        </Dropdown>
                        <div className='home-panel__support'>
                            <Icon type="github" theme="filled" className='icon-sp' />
                            Github
                        </div>
                        <Link to='/signin&signup'>
                            <Button className='home-panel__button' shape="round">
                                Đăng nhập
                        </Button>
                        </Link>
                    </div>
                    <div className='body'>
                        <img src={logo} alt='' />
                        <h1>Chào mừng tới <br />Online Store Management!</h1>
                    </div>

                </div>
                <HomeInfor />
            </div>
        );
    }
}
export default HomePage