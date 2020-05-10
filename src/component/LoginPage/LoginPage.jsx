import React from 'react'
import classes from './LoginPage.module.css'
import Login from '../Login/Login'

const LoginPage = (props) => {
  return <div className={classes.page}>
    <Login/>
  </div>
}

export default LoginPage
