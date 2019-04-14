import React from 'react'
import { Menu, Icon } from 'antd'
import mail from '../../assets/icons/mail.png'
import wing from '../../assets/icons/wing.png'
import plus from '../../assets/icons/plus.png'
import gift from '../../assets/icons/gift.png'
import star from '../../assets/icons/star.png'
import query from '../../assets/icons/query.png'
//data for notify
export const noti = [
    {
        id: '000000001',
        avatar: mail,
        title: '14 tin nhắn mới',
        datetime: '2019-04-09',
        type: 'notification',
    }, {
        id: '000000002',
        avatar: wing,
        title: 'Lời mời của EverWing',
        datetime: '2019-04-04',
        type: 'notification',
    }, {
        id: '000000003',
        avatar: plus,
        title: 'Cập nhật thêm thông tin',
        datetime: '2019-04-07',
        read: true,
        type: 'notification',
    }, {
        id: '000000004',
        avatar: gift,
        title: 'Quà từ haihaidb',
        datetime: '2019-04-07',
        type: 'notification',
    }, {
        id: '000000005',
        avatar: star,
        title: 'Bạn đã được thăng chức lên quản lý',
        datetime: '2019-04-07',
        type: 'notification',
    }, {
        id: '000000007',
        avatar: query,
        title: 'Quiz Daily',
        description: '1 + 1 = ?',
        datetime: '2019-04-07',
        type: 'message',
        clickClose: true,
    }, {
        id: '000000009',
        title: 'Họp fan OSM',
        description: 'Thời gian 2019-04-30 20:00 buổi off sẽ bắt đầu',
        extra: 'SE',
        status: 'todo',
        type: 'event',
    },
]

//menu for account
export const menu = (
    <Menu>
        <Menu.Item key="0">
            <Icon type='profile' />
            Thông tin
      </Menu.Item>
        <Menu.Item key="1">
            <Icon type='setting' />
            Cài đặt
      </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" >
            <Icon type='logout' />
            Đăng xuất
    </Menu.Item>
    </Menu>
);