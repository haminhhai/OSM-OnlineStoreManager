import React from 'react'
import Signinup from './routes/signin-up/Signin-up.jsx';
import HomePage from './routes/home/HomePage.jsx'
import SendMail from './routes/ResetPassword/SendMail.jsx'
import Sended from './routes/ResetPassword/Sended.jsx'
import NewPW from './routes/ResetPassword/NewPW.jsx'
import ManageLayout from './layouts/ManageLayout.jsx'
import Notfound from './pages/Notfound.jsx'

export const routes = [
    {
        path: '/',
        exact: true,
        main: () =>  <HomePage />
    },
    {
        path: '/signin&signup',
        exact: true,
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
        path: '/osm',
        exact: false,
        main:(match) => <ManageLayout match={match}/>
    },
    {
        path: '',
        exact: false,
        main:() => <Notfound />
    },
]
