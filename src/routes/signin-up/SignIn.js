import React from 'react'
import '../../styles/style.css'
import { Button, Input, notification, message } from 'antd'
import { Link, Redirect } from 'react-router-dom'
import * as types from '../constans/index.js'
import { account } from '../constans/index'



class Signinup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redir: false,
            loading: false,
        }
    }
    
    changeMail = (e) => {
        console.log(e.target)
        this.setState({ email: e.target.value })
    }
    changePW = (e) => {
        this.setState({ password: e.target.value })
    }
    onSubmit = (e) => {
        let { email, password } = this.state
        var notify = ''
        e.preventDefault()
        if (email === '' || password === '')
            notify = notification.open({
                message: types.INCOMPLETE_INFORMATION,
                description: types.BD_INCOMPLETE_INFORMATION,
                icon: types.ICON_INCOMPLETE,
                placement: "topLeft"
            })
        else if (email !== '' && email !== account[0].mail)
            notify = notification.open({
                message: types.MESSAGE_FAILED,
                description: types.BD_MESSAGE_FAILED_PHONE_NOT_EXIST,
                icon: types.ICON_FAILED,
                placement: "topLeft"
            })
        else if (password !== '' && password !== account[0].password) {
            notify = notification.open({
                message: types.MESSAGE_FAILED,
                description: types.BD_MESSAGE_FAILED_WRONG_PASSWORD,
                icon: types.ICON_FAILED,
                placement: "topLeft"
            })
            this.setState({ password: '' })
        }
        else {
           
            this.setState({ loading: true})
            setTimeout(() => {
                notify= message.success(types.BD_MESSAGE_SUCCESS)
                this.setState({redir: true})
            }, 2000);
        }
        return notify
    }
    render() {
        if(this.state.redir)
            {
                sessionStorage.setItem("verify", true)
                return <Redirect to='/osm/dashboard' />
            }
        console.log(sessionStorage.getItem("verify"))
        return (
            <div className="form sign-in">
                <h2>Đăng nhập OSM,</h2>
                <h4>E-mail</h4>
                <label>
                    <Input className='input-in' 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.changeMail} 
                    placeholder='123@osm.vn' 
                    onPressEnter={this.onSubmit}/>
                </label>
                <h4>Mật khẩu</h4>
                <label>
                    <Input className='input-in' 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.changePW} 
                    placeholder='123' 
                    onPressEnter={this.onSubmit}/>
                </label>
                <Link to='/send-mail' className="forgot-pass">Quên mật khẩu?</Link>
                <Button className="submit" onClick={this.onSubmit} loading={this.state.loading}>Đăng nhập</Button>
                
            </div>


        );
    }
}
export default Signinup;
