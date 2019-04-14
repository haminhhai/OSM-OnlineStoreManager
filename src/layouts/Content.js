import React from 'react'
import { Layout, Menu, Icon, } from 'antd'
import '../styles/layout.css'
import Dashboard from '../pages/dashboard/Dashboard'

class Content extends React.Component {
    
    render() {
        return (
            <div>
                <Dashboard />
            </div>
        );
    }
}
export default Content