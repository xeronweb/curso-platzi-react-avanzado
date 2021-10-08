import React from 'react'
import { Router } from '@reach/router'
import { Favs } from '../pages/Favs'
import { User } from '../pages/User'
import { NotRegisterUser } from '../pages/NotRegisterUser'



export const PrivateRoute = ({isAuth}) => {
  return (
    <Router>
      {
        isAuth ? (
          <>
            <Favs path='/favs' />
            <User path='/user' />
          </>
        ) : (
          <>
            <NotRegisterUser path='/favs' />
            <NotRegisterUser path='/user' />
          </>
        )
      }
    </Router>
  )
}