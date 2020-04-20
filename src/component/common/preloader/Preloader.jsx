import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../assets/images/Spinner-1s-200px.svg'

let Preloader = (props) =>{
  return <div className={classes.preloader}> <img src={preloader}/> </div>
}

export default Preloader
