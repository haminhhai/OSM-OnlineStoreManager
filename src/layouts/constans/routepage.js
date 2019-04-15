import React from 'react'
import Dashboard from '../../pages/dashboard/Dashboard'
import Payment from '../../pages/payments/Payment'
import Checkout from '../../pages/checkouts/Checkout'
import Information from '../../pages/account/Information'
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
        name: 'information',
        component:() => <Information />,
        exact: false,
    },
    {
        name: 'setting',
        component:() => <Setting />,
        exact: false,
    },
    

]

export default routes