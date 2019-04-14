import React from 'react'
import { Exception } from 'ant-design-pro';
import 'ant-design-pro/dist/ant-design-pro.css';

class Notfound extends React.Component{
    render() {
        return (
            <div >
                <Exception type='404' 
                redirect='/' 
                desc='Trang bạn tới không tồn tại' />
            </div>
        );
    }
}
export default Notfound