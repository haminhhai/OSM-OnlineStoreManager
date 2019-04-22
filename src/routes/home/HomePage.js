import React from 'react'
import { Icon, Button, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import '../../styles/home.css'

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
                        <Icon type="question-circle" theme='filled' className='icon-sp' />
                        Hướng dẫn
                    </div>
                    <Link to='/signin&signup'>
                        <Button className='home-panel__button' shape="round">
                            Đăng nhập
                        </Button>
                    </Link>

                </div>
                <div className='body'>
                    Chào mừng tới <br />Online Store Management!
                </div>
            </div>
        );
    }
}
export default HomePage