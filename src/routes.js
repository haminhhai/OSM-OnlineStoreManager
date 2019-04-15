import React from 'react'
import Signinup from './routes/signin-up/Signin-up';
import HomePage from './routes/home/HomePage'
import SendMail from './routes/ResetPassword/SendMail'
import Sended from './routes/ResetPassword/Sended'
import NewPW from './routes/ResetPassword/NewPW'
import ManageLayout from './layouts/ManageLayout'
import Notfound from './pages/Notfound'

export const routes = [
    {
        path: '/',
        exact: true,
        main: () =>  <HomePage />
    },
    {
        path: '/signin',
        exact: false,
        main:() => <Signinup />
    },
    {
        path: '/send-mail',
        exact: false,
        main:() => <SendMail />
    },
    {
        path: '/sended',
        exact: false,
        main:() => <Sended />
    },
    {
        path: '/new_password',
        exact: false,
        main:() => <NewPW />
    },
    {
        path: '/:id',
        exact: false,
        main:(match) => <ManageLayout match={match}/>
    },
    {
        path: '',
        exact: false,
        main:() => <Notfound />
    },
]
