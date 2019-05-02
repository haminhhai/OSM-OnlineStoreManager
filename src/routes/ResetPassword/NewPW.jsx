import React from 'react'
import '../../styles/resetpw.css'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/forgot.jpg'
import { Input, Button, notification } from 'antd'
import * as types from '../constans/index'
import Img from '../../assets/images/city.png'

class NewPW extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirm: ''
        }
    }
    onChangePW = (e) => {
        this.setState({ password: e.target.value })
    }
    onChangeCF = (e) => {
        this.setState({ confirm: e.target.value })
    }
    onSubmit = (e) => {
        var notify = ''
        e.preventDefault()
        const { password, confirm } = this.state
        if (password === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_PASSWORD,
                icon: types.ICON_INCOMPLETE,
            })
        else if (confirm === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_CONFIRM_PASSWORD,
                icon: types.ICON_INCOMPLETE,
            })
        else if (password !== confirm && (password !== '' && confirm !== ''))
            notify = notification.open({
                message: types.MESSAGE_FAILED,
                description: types.RC_MESSAGE_WRONG_CONFIRMPASSWORD,
                icon: types.ICON_FAILED,
            })
        else 
            {notify = notification.open({
                message: types.MESSAGE_SUCCESS,
                description: types.BD_RESET_PASSWORD_SUCCESS,
                icon: types.ICON_SUCCESS,
            })}
        return notify
    }
    render() {
        return (
            <div className='wrapper'>
                <img src={Img} alt='' />
                <Link to='/'>
                    <div className='white-logo'>
                        <div className='white-osm-logo' />
                    </div>
                </Link>
                <div className="cont_forms">
                    <div className="cont_img_back_">
                        <img src={Pic} alt='' />
                    </div>
                    <div class="cont_ba_opcitiy-newpw">
                        <h2>Đặt lại mật khẩu</h2>
                        <label>
                            <Input className='inputmail'
                                type="password"
                                value={this.state.password}
                                onChange={this.onChangePW}
                                placeholder='Nhập mật khẩu mới'
                                onPressEnter={this.onSubmit} />
                        </label>
                        <label>
                            <Input className='inputmail'
                                type="password"
                                value={this.state.confirm}
                                onChange={this.onChangeCF}
                                placeholder='Nhập lại mật khẩu mới' 
                                onPressEnter={this.onSubmit}/>
                        </label>
                        <Button className="send-btn" onClick={this.onSubmit}>Yêu cầu mật khẩu mới</Button>
                        <p>Quay lại <Link to='/signin&signup' className='login-link'>Đăng nhập</Link></p>
                    </div>
                </div>
                <ul className="bg-bubbles">
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                    <li />
                </ul>

            </div>

        );
    }
}
export default NewPW

