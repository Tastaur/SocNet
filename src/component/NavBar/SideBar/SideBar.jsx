import React from 'react'
import classes from './SideBar.module.css'
import SideBarItem from './SideBarItem/SideBarItem'

const SideBar = (props) => {
  let sideBarElements = props.state
      .map(sideEl => <SideBarItem id={sideEl.id} key={sideEl.id} name={sideEl.name} src={sideEl.src}/>)
  return <div className={classes.bar}>
    <div>
      <p>Friends</p>
    </div>
    <div className={classes.barItem}>
      {sideBarElements}
    </div>
  </div>
}

export default SideBar
