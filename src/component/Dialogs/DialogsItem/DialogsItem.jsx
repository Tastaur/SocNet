import React from 'react'
import classes from './DialogsItem.module.css'
import {NavLink, Route} from 'react-router-dom'

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
      <div className={classes.dialog}>
        <img src={props.src} />
        <NavLink activeClassName={classes.active} to={path}>{props.name}</NavLink>
      </div>
  )
}


export default DialogsItem
