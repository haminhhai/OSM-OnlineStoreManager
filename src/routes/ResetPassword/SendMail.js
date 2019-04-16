import React from 'react'
import '../../styles/resetpw.css'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/forgot.jpg'
import { Input, Button, notification } from 'antd'
import {Redirect} from 'react-router-dom'
import * as types from '../constans/index'
import Img from '../../assets/images/city.png'

class SendMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            redir: false
        }
    }
    onChange = (e) => {
        this.setState({ email: e.target.value })
    }
    onSubmit = (e) => {
        var notify = ''
        e.preventDefault()
        const email= this.state.email
        if (email === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_EMAIL,
                icon: types.ICON_INCOMPLETE,
            })
        else if (email !== types.account[0].mail)
            notify = notification.open({
                message: types.MESSAGE_FAILED,
                description: types.BD_MESSAGE_FAILED_PHONE_NOT_EXIST,
                icon: types.ICON_FAILED,
            })
        else {
            notify = notification.open({
                message: types.MESSAGE_SUCCESS,
                description: '',
                icon: types.ICON_SUCCESS,
            })
            this.setState({redir:true})
        }
        return notify
    }
    render() {
        if(this.state.redir)
            return <Redirect to='/sended' /> 
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
                    <div class="cont_ba_opcitiy-mail">
                        <h2>Bạn đã quên mật khẩu?</h2>
                        <div>Điền email của bạn để OSM gửi lại mật khẩu mới</div>
                        <label>
                            <Input className='inputmail'
                                type="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                placeholder='Email' />
                        </label>
                        <Button className="send-btn" onClick={this.onSubmit}>Yêu cầu mật khẩu mới</Button>
                        <p>Quay lại <Link to='/signin' className='login-link'>Đăng nhập</Link></p>
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
export default SendMail

