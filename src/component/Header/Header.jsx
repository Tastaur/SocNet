import React from 'react'
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return <header className={classes.header}>
    <img src="https://gonki-na-android.ru/uploads/posts/2015-03/1427120788_97374123.png"/>

    <div className={classes.loginBlock}>
      {props.isAuth
          ? <div>{props.login}  <button onClick={props.logout} className={classes.logout}> Logout</button></div>
          : <NavLink to={'/login'} activeClassName={classes.active}>Login</NavLink>}
    </div>
  </header>
}

export default Header
