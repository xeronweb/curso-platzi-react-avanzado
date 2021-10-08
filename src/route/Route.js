import React from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { PrivateRoute } from './PrivateRoute'



export const Route = ({ isAuth }) => {
    return (
        <>
            <Router>
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
            </Router>
            <PrivateRoute isAuth={isAuth} />
        </>
    )
}