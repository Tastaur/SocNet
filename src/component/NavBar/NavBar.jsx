import React from 'react'
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom'
import SideBarContainer from './SideBar/SideBarContainer'

const NavBar = (props) => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/dialogs'>Dialogs</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/news'>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/music'>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink activeClassName={classes.active} to='/users'>Users</NavLink>
    </div>
    <div className={classes.sidebar}>
      <SideBarContainer state={props.state}/>
    </div>
  </nav>
}

export default NavBar
