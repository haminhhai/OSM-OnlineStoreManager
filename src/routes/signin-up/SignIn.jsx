import React from 'react'
import '../../styles/style.css'
import { Button, Input, notification } from 'antd'
import { Link, Redirect } from 'react-router-dom'
import * as types from '../constans/index.js'
import callAPI from '../../utils/apiCaller'


class Signinup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redir: false,
            loading: false,
        }
    }

    changeusername = (e) => {
        this.setState({ username: e.target.value })
    }
    changePW = (e) => {
        this.setState({ password: e.target.value })
    }
    onSubmit = (e) => {
        let { username, password } = this.state
        var notify = ''
        e.preventDefault()
        if (username === '' || password === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_INFORMATION,
                icon: types.ICON_INCOMPLETE,
                placement: "topLeft"
            })
        else {
            let infoRequest = `/Outside/Login?USERNAME=${username}&PASSWORD=${password}`
            callAPI(infoRequest, 'POST', null).then(res => {
                if (res !== undefined) {
                    this.setState({ code: res.data.code, message: res.data.message })
                    let code = this.state.code
                    let message = this.state.message
                    if (Number(code) === 400) {
                        if (message === "Không tồn tại tên đăng nhập") {
                            notify = notification.open({
                                message: types.MESSAGE_FAILED,
                                description: types.BD_MESSAGE_FAILED_USER_NOT_EXIST,
                                icon: types.ICON_FAILED,
                                placement: "topLeft"
                            })
                            this.setState({ username: '', password: '' })
                        }
                        else if (message === "Mật khẩu sai") {
                            notify = notification.open({
                                message: types.MESSAGE_FAILED,
                                description: types.BD_MESSAGE_FAILED_WRONG_PASSWORD,
                                icon: types.ICON_FAILED,
                                placement: "topLeft"
                            })
                            this.setState({ password: '' })
                        }
                    }
                    else {
                        localStorage.setItem("ID", res.data.ID_Employee)
                        localStorage.setItem("rights", res.data.reportsTo)
                        localStorage.setItem("nameAcc", res.data.fullname)
                        localStorage.setItem("emailAcc", res.data.email)
                        localStorage.setItem("ava", Math.floor(Math.random() * 8))
                        this.setState({ loading: true, redir: true })
                        notify = notification.open({
                            message: types.MESSAGE_SUCCESS,
                            description: types.BD_MESSAGE_SUCCESS,
                            icon: types.ICON_SUCCESS,
                            placement: "topLeft"
                        })
                        
                    }


                }
                else console.log(res)
            })
            
        }
        return notify
    }
    render() {
        if (this.state.redir) {
            sessionStorage.setItem("verify", true)
            return <Redirect to='/osm/dashboard' />
        }
        if (sessionStorage.length !== 0)
            return <Redirect to='/osm/dashboard' />
        return (
            <div className="form sign-in">
                <div className="title-line-wrapper1" style={{ opacity: 1, transform: 'translate(0px)' }}>
                    <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
                </div>
                <h2>Đăng nhập OSM,</h2>
                <h4>User name</h4>
                <label>
                    <Input className='input-in'
                        type="username"
                        value={this.state.username}
                        onChange={this.changeusername}
                        placeholder='username'
                        onPressEnter={this.onSubmit} />
                </label>
                <h4>Mật khẩu</h4>
                <label>
                    <Input className='input-in'
                        type="password"
                        value={this.state.password}
                        onChange={this.changePW}
                        placeholder='password'
                        onPressEnter={this.onSubmit} />
                </label>
                <Link to='/send-mail' className="forgot-pass">Quên mật khẩu?</Link>
                <Button className="submit" onClick={this.onSubmit} loading={this.state.loading}>Đăng nhập</Button>

            </div>


        );
    }
}
export default Signinup;
