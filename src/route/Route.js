import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { Home } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { PrivateRoute } from './PrivateRoute'
import { Context,context } from '../Context'


export const Route = () => {

    const { isAuth } = useContext(context)


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