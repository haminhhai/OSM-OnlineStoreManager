import {Icon} from 'antd'
import React from 'react'
//account
export const account = [
    {
        mail: '123@osm.vn',
        password: '123'
    },
    {
        mail: 'hihi@osm.vn',
        password: '123'
    },

]

//message headers
export const MESSAGE_SUCCESS = "Thành công!"
export const INCOMPLETE_INFORMATION = "Thiếu thông tin"
export const MESSAGE_FAILED = "Thất bại"
export const NOTIFICATION = "Thông báo!"

//message bodies
export const BD_INCOMPLETE_INFORMATION = "Vui lòng điền đầy đủ thông tin của bạn!"
export const BD_INCOMPLETE_NAME = "Vui lòng điền tên của bạn!"
export const BD_INCOMPLETE_FIRSTTIME_PASSWORD = "Vui lòng điền mật khẩu của bạn!"
export const BD_INCOMPLETE_EMAIL = "Vui lòng điền email của bạn!"
export const BD_INCOMPLETE_PASSWORD = "Vui lòng điền mật khẩu mới của bạn!"
export const BD_INCOMPLETE_CONFIRM_PASSWORD = "Vui lòng nhập lại mật khẩu mới của bạn!"
export const BD_INCOMPLETE_INFORMATION_PHONE = "Bạn chưa nhập số điện thoại!"
export const BD_INCOMPLETE_INFORMATION_CAPTCHA = "Hãy nhập Captcha để tiếp tục!"
export const BD_MESSAGE_FAILED_WRONG_PHONE_FORMAT = "Số điện thoại khách hàng sai định dạng. Xin vui lòng thử lại"
export const BD_MESSAGE_FAILED_PHONE_NOT_EXIST = "Tài khoản không tồn tại! Xin vui lòng thử lại hoặc Đăng ký!"
export const BD_MESSAGE_FAILED_WRONG_PASSWORD = "Mật khẩu không đúng. Xin vui lòng thử lại"
export const BD_MESSAGE_FAILED_WRONG_CAPTCHA = "Bạn đã nhập sai captcha! Xin vui lòng thử lại."
export const BD_MESSAGE_FAILED_PHONE_EXISTED = "Số điện thoại này đã có tài khoản trên hệ thống. Vui lòng đăng nhập hoặc ấn Quên mật khẩu nếu bạn quên mật khẩu."
export const BD_MESSAGE_FILL_OTP = "Vui lòng điền mã OTP để tiếp tục."
export const BD_MESSAGE_WRONG_OTP = "Bạn đã nhập sai mã OTP. Xin vui lòng thử lại!"
export const BD_MESSAGE_FILL_INFORMATION = "Hãy điền thông tin cá nhân để tiếp tục!"
export const BD_MESSAGE_RESENT = "Hệ thống đã gửi lại mã OTP. Vui lòng kiển tra điện thoại của bạn."
export const BD_MESSAGE_TRY_TIME_EXCEEDED = "Quý khách đã nhập sai mã OTP quá số lần cho phép. Xin vui lòng thử lại trong vài phút nữa!"
export const BD_MESSAGE_ERROR = "Đã có lỗi xảy ra. Vui lòng thử lại sau vài phút."
export const BD_RE_ENTER_CAPTCHA = "Hãy nhập lại Captcha để tiếp tục!"
export const BD_REGISTER_SUCCESS = "Đăng ký thành công! Vui lòng đăng nhập để tiếp tục"
export const BD_EMAIL_EXISTED = "Email đã được đăng ký! Vui lòng sử dụng email khác để đăng ký."
export const BD_MESSAGE_SUCCESS = 'Đăng nhập thành công!'
export const BD_RESET_PASSWORD_SUCCESS = 'Đổi mật khẩu thành công! Đăng nhập ngay!'
//messages received

export const RC_MESSAGE_WRONG_PHONE_FORMAT = "Số điện thoại khách hàng sai định dạng"
export const RC_MESSAGE_PHONE_NOT_EXIST = "Không tồn tại customer"
export const RC_MESSAGE_WRONG_PASSWORD = "Mật khẩu không đúng"
export const RC_MESSAGE_WRONG_CAPTCHA = "Mã bảo vệ không chính xác."
export const RC_MESSAGE_PHONE_EXISTED = "Số điện thoại này đã có tài khoản trên hệ thống."
export const RC_MESSAGE_WRONG_CONFIRMPASSWORD = "Mật khẩu không trùng khớp vui lòng nhập lại!"


//icon in messages
export const ICON_SUCCESS = <Icon type="check-circle" style={{color: "#52c41a"}}/>
export const ICON_FAILED = <Icon type="close-circle" style={{color: "red "}}/>
export const ICON_INCOMPLETE = <Icon type="exclamation-circle" style={{color: "#fffb00"}}/>

  