import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import Payment from '../../pages/payments/Payment'
import Checkout from '../../pages/checkouts/Checkout'
import Account from '../../pages/account/Account'


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
        name: 'account',
        component:() => <Account />,
        exact: false,
    },

]

export default routes