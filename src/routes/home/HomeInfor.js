import React from 'react'
import { BackTop } from 'antd'
import pxl from '../../assets/images/pxl.PNG'

class HomeInfor extends React.Component {
    render() {
        return (
            <div className='home-page page1'>
                <BackTop />
                <div className='bg-top'/>
                
                <div className="home-page-wrapper" id="page1-wrapper">
                    <div className="page1-bg" style={{ transform: 'translate(0px,400px)' }}>Feature</div>
                    <h2><span>OSM</span> có thể làm gì cho bạn </h2>
                    <div className="title-line-wrapper page1-line">
                        <div className="title-line" />
                    </div>
                    <img className='sketch' src={pxl} alt=''/>
                    <div>
                        <ul className="page1-box-wrapper" >
                            <li style={{ opacity: 1, transform: 'translate(0px)' }} >
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(26, 196, 77, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg" alt="img" />
                                    </div>
                                    <h3>Linh hoạt</h3>
                                    <p>Có thể truy cập từ bất cứ đâu và bất kỳ thiết bị nào</p>
                                </div>
                            </li>
                            <li style={{ opacity: 1, transform: 'translate(0px)' }}>
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(47, 84, 235, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg" alt="img" />
                                    </div><h3>Giao diện thân thiện</h3>
                                    <p>Dễ dàng quan sát tình hình kinh doanh của cửa hàng cũng như lắng nghe ý kiến khách hàng</p>
                                </div>
                            </li>
                            <li style={{ opacity: 1, transform: 'translate(0px)' }}>
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(245, 34, 45, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg" alt="img" />
                                    </div><h3>Phân quyền</h3>
                                    <p>Hệ thống phân cấp các chức năng khác nhau cho từng cấp bậc</p>
                                </div>
                            </li>
                        </ul>
                        <ul className="page1-box-wrapper">
                            <li style={{ opacity: 1, transform: 'translate(0px)' }} >
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(250, 140, 22, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg" alt="img" />
                                    </div>
                                    <h3>Tìm kiếm nhanh gọn</h3>
                                    <p>Tìm kiếm hàng hóa 1 cách đơn giản, giúp kiểm tra tình trạng hàng, thuộc tính của hàng, giá thành...</p>
                                </div>
                            </li>
                            <li style={{ opacity: 1, transform: 'translate(0px)' }} >
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(250, 173, 20, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg" alt="img" style={{ marginLeft: '-15px' }} />
                                    </div>
                                    <h3>Bán hàng dễ dàng</h3>
                                    <p>Tạo hóa đơn thuận tiện, có giao diện nhập, xuất hàng, tính tiền nhanh chóng</p>
                                </div>
                            </li>
                            <li style={{ opacity: 1, transform: 'translate(0px)' }} >
                                <div className="page1-box">
                                    <div className="page1-image" style={{ boxShadow: 'rgba(24, 144, 255, 0.12) 0px 6px 12px' }}>
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg" alt="img" />
                                    </div>
                                    <h3>Bảo mật</h3>
                                    <p>Tránh đánh cắp thông tin, thất thoát và cơ sở dữ liệu bị chỉnh sửa sai lệch</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className='bg-bot'/>
            </div>
        );
    }
}
export default HomeInfor