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

//menu options
export const options = [
    {
        title: 'Dashboard',
        key: '1',
        path: 'dashboard'
    },
    {
        title: 'Payment',
        key: '2',
        path: 'payment'
    },
    {
        title: 'Checkout',
        key: '3',
        path: 'checkout'
    },
    {
        title: 'Account',
        key: '4',
        path: 'account'
    }
]