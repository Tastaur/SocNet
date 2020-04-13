import React from 'react'
import classes from './SendMessage.module.css'
import {sendNewMessageCreater, updateNewMessageBodyCreater} from '../../../store'

const SendMessage = (props) => {
  let message = React.createRef()

  let sendMessage = () =>{
    props.dispatch(sendNewMessageCreater());
  }

  let changeMessage = () =>{
    let text = message.current.value;
    props.dispatch(updateNewMessageBodyCreater(text));
  }
  return (
      <div className={classes.send}>
        <textarea ref={message} value={props.state.newMessage} onChange={changeMessage} className={classes.area}/>
        <button onClick={sendMessage} className={classes.button}>Send message</button>
      </div>
  )
}

export default SendMessage
