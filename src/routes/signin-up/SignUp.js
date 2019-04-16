import React from 'react'
import '../../styles/style.css'
import { Button, Input, notification, message } from 'antd'
import * as types from '../constans/index'


class Signinup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    myFunction = () => {
        document.querySelector('.cont').classList.toggle('s--signup')
    }
    changeName = (e) => {
        this.setState({ name: e.target.value })
    }
    changeMail = (e) => {
        this.setState({ email: e.target.value })
    }
    changePW = (e) => {
        this.setState({ password: e.target.value })
    }
    onSubmit = (e) => {
        var notify = ''
        const { name, email, password } = this.state
        e.preventDefault()
        if (name === '' || email === '' || password === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_INFORMATION,
                icon: types.ICON_INCOMPLETE,
            })
        else if (email === types.account[0].mail)
            notify = notification.open({
                message: types.MESSAGE_FAILED,
                description: types.BD_EMAIL_EXISTED,
                icon: types.ICON_FAILED,
            })
        else {
            notify= message.success(types.BD_REGISTER_SUCCESS)
            this.myFunction()
        }

        console.log(notify)
        return notify
    }
    render() {
        return (
            <div className="sub-cont">
                <div className="img">
                    <div className="img__text m--up">
                        <h2 className='txt-tranform'>Bạn chưa có tài khoản?</h2>
                        <p>Đăng kí và khám phá những điều thú vị với web của chúng tôi</p>
                    </div>
                    <div className="img__text m--in">
                        <h2 className='txt-tranform'>Bạn đã là thành viên của OSM?</h2>
                        <p>Nếu bạn đã có tài khoản, hãy Đăng nhập ngay. Chúng tôi đang chờ bạn!</p>
                    </div>
                    <div className="img__btn" onClick={this.myFunction}>
                        <span className="m--up" >Đăng ký</span>
                        <span className="m--in" >Đăng nhập</span>
                    </div>
                </div>
                <div className="form sign-up">
                    <h2>Tạo tài khoản OSM,</h2>
                    <label >
                        <Input className='input-up' type="text" value={this.state.name} onChange={this.changeName} placeholder='Họ và tên' />
                    </label>
                    <label >
                        <Input className='input-up' type="email" value={this.state.email} onChange={this.changeMail} placeholder='Email' />
                    </label>
                    <label >
                        <Input className='input-up' type="password" value={this.state.password} onChange={this.changePW} placeholder='Mật khẩu' />
                    </label>
                    <Button type="button" className="submit1" onClick={this.onSubmit}>Đăng ký</Button>
                </div>
            </div>

        );
    }
}
export default Signinup;
