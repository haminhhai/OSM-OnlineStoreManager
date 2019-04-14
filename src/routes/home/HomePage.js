import React from 'react'
import { Icon, Button} from 'antd'
import {Link} from 'react-router-dom'
import '../../styles/home.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className='background'>
                <div className='home-panel'>
                    <div className='logo'>
                        <div className='osm-logo' />
                    </div>
                    <div className='home-panel__about'>
                        <Icon type='profile' className='icon-about' theme='filled' />
                        Thông tin
                    </div>
                    <div className='home-panel__support'>
                        <Icon type="question-circle" theme='filled' className='icon-sp' />
                        Hỗ trợ
                        <Icon type='down' className='icon-down' />
                    </div>
                    <Link to='/signin'>
                        <Button className='home-panel__button' shape="round">
                            Đăng nhập
                        </Button>
                    </Link>

                </div>
                <div className='body'>
                    Welcome to Online Store Management!
                </div>
            </div>
        );
    }
}
export default HomePage