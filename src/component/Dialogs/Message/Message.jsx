import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
  return <div>
    <p className={classes.message}>{props.message}</p>
  </div>
}

export default Message
