import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import Payment from '../../pages/payments/Payment'
import Checkout from '../../pages/checkouts/Checkout'
import Center from '../../pages/account/Center/Center'
import Setting from '../../pages/account/Setting'


const routes = [
    {
        name: 'dashboard',
        component:() => <Dashboard />,
        exact: true,
    },
    {
        name: 'payment',
        component:() => <Payment />,
        exact: false,
    },
    {
        name: 'checkout',
        component:() => <Checkout />,
        exact: false,
    },
    {
        name: 'account_center',
        component:() => <Center />,
        exact: false,
    },
    {
        name: 'account_setting',
        component:() => <Setting />,
        exact: false,
    },
    

]

export default routes