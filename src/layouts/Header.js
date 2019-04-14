import React from 'react'
import { Tag, Dropdown, Avatar } from 'antd';
import { GlobalHeader, TopNavHeader, NoticeIcon } from 'ant-design-pro'
import '../styles/layout.css'
import { noti, menu } from './constans/index.js'


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