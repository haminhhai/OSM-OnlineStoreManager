import React from 'react'
import { Layout } from 'antd'
import '../styles/layout.css'

class Footer extends React.Component {

    render() {
        return (
            <div>
                <Layout.Footer style={{ background: '#fff', padding: 0 }}>
                    Copyright Online Store Management 2019
                </Layout.Footer>

            </div>
        );
    }
}
export default Footer