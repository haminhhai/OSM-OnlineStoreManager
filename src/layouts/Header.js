import React from 'react'
import { Tag, Dropdown, Avatar,Menu, Icon  } from 'antd';
import {  NoticeIcon } from 'ant-design-pro'
import '../styles/layout.css'
import { noti} from './constans/index.js'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'F.Hiquey'
        }
    }

    onItemClick = (item, tabProps) => {
        console.log(item, tabProps);
    }
    onClear = (tabTitle) => {
        console.log(tabTitle);
    }
    onLogout = () => {
        sessionStorage.clear()
    }
    getNoticeData = (notices) => {
        if (notices.length === 0) {
            return {};
        }
        const newNotices = notices.map(notice => {
            const newNotice = { ...notice };
            // transform id to item key
            if (newNotice.id) {
                newNotice.key = newNotice.id;
            }
            if (newNotice.extra && newNotice.status) {
                const color = {
                    todo: '',
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newNotice.status];
                newNotice.extra = (
                    <Tag color={color} style={{ marginRight: 0 }}>
                        {newNotice.extra}
                    </Tag>
                );
            }
            return newNotice;
        });
        return newNotices.reduce((pre, data) => {
            if (!pre[data.type]) {
                pre[data.type] = [];
            }
            pre[data.type].push(data);
            return pre;
        }, {});
    }
    render() {
        const noticeData = this.getNoticeData(noti);
        var pos = window.location.pathname.slice(1).indexOf('/')
        var path = window.location.pathname.slice(0,pos + 1)
        const menu = (
            <Menu>
                <Menu.Item key="0" onClick={this.props.compo}>
                    <Link to={`${path}/account`} >
                        <Icon type='user' />
                        {` Account`}
                    </Link>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1" onClick={this.onLogout}>
                    <Link to='/signin'>
                        <Icon type='logout' />
                        {` Logout`}
                    </Link>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className='notice-ant'>
                <NoticeIcon className="notice-icon" count={5} onItemClick={this.onItemClick} onClear={this.onClear}>
                    <NoticeIcon.Tab
                        list={noticeData.notification}
                        title="notification"
                    />
                    <NoticeIcon.Tab
                        list={noticeData.message}
                        title="message"
                    />
                    <NoticeIcon.Tab
                        list={noticeData.event}
                        title="event"
                    />
                </NoticeIcon>
                <Dropdown overlay={menu} >
                    <span className='dropdown-user'>
                        <Avatar className='avatar-user'>OSM</Avatar>
                        <div className='name-user'>{this.state.name}</div>    
                    </span>
                </Dropdown>
            </div>
        );
    }
}
export default Header