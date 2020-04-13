import React from 'react'
import classes from './SideBarItem.module.css'

const SideBarItem = (props) => {
  return <div className={classes.item}>
    <div>
      <img src={props.src}/>
    </div>
    <p>{props.name}</p>
  </div>
}

export default SideBarItem
