import React, { Component, Fragment } from 'react'
import { Layout, Icon } from 'antd'
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter'
import '../styles/layout.css'
import Pic from '../assets/icons/symbol.png'
class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <Layout.Footer>
                    <GlobalFooter
                        links={[
                            {
                                key: '4hoang',
                                title: 'Tứ Hoàng',
                                href: '',
                                blankTarget: true,
                            },
                            {
                                key: 'github',
                                title: <Icon type="github" />,
                                href: 'https://github.com/haminhhai/OSM-testing',
                                blankTarget: true,
                            },
                            {
                                key: 'Online store management',
                                title: 'OSM',
                                blankTarget: true,
                            },
                            {
                                key: 'home',
                                title: <img className='imgfoot' src={Pic} alt='' />,
                                href: '/',
                                blankTarget: true,
                            },
                        ]}
                        copyright={
                            <Fragment>
                                Copyright <Icon type="copyright" /> 2019 Dự án Công nghệ phần mềm UET
                            </Fragment>
                        }
                    />
                </Layout.Footer>

            </div>
        );
    }
}
export default Footer