import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard.jsx'
import Payment from '../../pages/payments/Payment.jsx'
import Checkout from '../../pages/checkouts/Checkout.jsx'
import Account from '../../pages/account/Account.jsx'


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