import React from 'react'
import '../../styles/resetpw.css'
import { Link } from 'react-router-dom'
import Pic from '../../assets/images/forgot.jpg'
import Img from '../../assets/images/city.png'

class Sended extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='wrapper'>
                <img src={Img} alt />
                <Link to='/'>
                    <div className='white-logo'>
                        <div className='white-osm-logo' />
                    </div>
                </Link>
                <div className="cont_forms">
                    <div className="cont_img_back_">
                        <img src={Pic} alt='' />
                    </div>
                    <div class="cont_ba_opcitiy-sended">
                        <h2>Email đã được gửi tới bạn</h2>
                        <div>
                            Chúng tôi đã gửi tới bạn link đặt lại mật khẩu.
                            Cảm ơn bạn đã sử dụng OSM!
                        </div>
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
export default Sended

