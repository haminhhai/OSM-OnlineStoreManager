import React from 'react'
import '../../styles/style.css'
import { Button, Input, notification, message } from 'antd'
import * as types from '../constans/index'
import callAPI from '../../utils/apiCaller'


class Signinup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            code: '',
            message: ''
        }
    }
    myFunction = () => {
        document.querySelector('.cont').classList.toggle('s--signup')
    }
    changeUserName = (e) => {
        this.setState({ username: e.target.value })
    }
    changeMail = (e) => {
        this.setState({ email: e.target.value })
    }
    changePW = (e) => {
        this.setState({ password: e.target.value })
    }
    onSubmit = (e) => {
        var notify = ''
        const { username, email, password } = this.state
        e.preventDefault()
        if (username === '' || email === '' || password === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_INFORMATION,
                icon: types.ICON_INCOMPLETE,
            })
        else {
            let infoRequest = `/Outside/Signup?USERNAME=${username}&PASSWORD=${password}&EMAIL=${email}`
            callAPI(infoRequest, 'POST', null).then(res => {
                console.log(res)
                this.setState({ code: res.data.code, message: res.data.message })
                let { code, message } = this.state
                if (Number(code) === 200)
                {
                    notify = notification.open({
                        message: types.MESSAGE_SUCCESS,
                        description: types.BD_REGISTER_SUCCESS,
                        icon: types.ICON_SUCCESS,
                    })
                    this.myFunction()
                }
                else if (Number(code) === 400) {
                    if (message === "Tên đăng nhập đã tồn tại")
                        notify = notification.open({
                            message: types.MESSAGE_FAILED,
                            description: types.BD_WRONG_FAILED_USER_EXIST,
                            icon: types.ICON_FAILED,
                        })
                    else if (message === types.BD_WRONG_TYPE_EMAIL)
                    notify = notification.open({
                        message: types.MESSAGE_FAILED,
                        description: types.BD_WRONG_TYPE_EMAIL,
                        icon: types.ICON_FAILED,
                    }) 
                    else if (message === "Email đã tồn tại")
                        notify = notification.open({
                            message: types.MESSAGE_FAILED,
                            description: types.BD_EMAIL_EXISTED,
                            icon: types.ICON_FAILED,
                        })
                    else if (message === "Mật khẩu không đủ độ dài")
                    {
                        notify = notification.open({
                            message: types.MESSAGE_FAILED,
                            description: types.BD_MESSAGE_FAILED_CHAR_PASSWORD,
                            icon: types.ICON_FAILED,
                        })
                        this.setState({password: ''})
                    }
                }
            })

        }
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
                    <div className="title-line-wrapper2" style={{ opacity: 1, transform: 'translate(0px)' }}>
                        <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
                    </div>
                    <h2>Tạo tài khoản OSM,</h2>
                    <h4>Username</h4>
                    <label >
                        <Input className='input-up' type="text" value={this.state.username}
                            onChange={this.changeUserName} placeholder='Nhập tên tài khoản' onPressEnter={this.onSubmit} />
                    </label>
                    <h4>E-mail</h4>
                    <label >
                        <Input className='input-up' type="email" value={this.state.email}
                            onChange={this.changeMail} placeholder='example@gmail.com' onPressEnter={this.onSubmit} />
                    </label>
                    <h4>Mật khẩu</h4>
                    <label >
                        <Input className='input-up' type="password" value={this.state.password}
                            onChange={this.changePW} placeholder='Mật khẩu' onPressEnter={this.onSubmit} />
                    </label>
                    <Button type="button" className="submit1" onClick={this.onSubmit}>Đăng ký</Button>
                </div>
            </div>

        );
    }
}
export default Signinup;
