import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogsItem/DialogsItem'

const Dialogs = (props) => {
  let state = props.messagesPage
  let messageElement = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id} myMessage={m.myMessage}/>)
  let dialogsElement = state.dialogsData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} src={d.src}/>)

  let sendMessage = () => {props.sendNewMessage()}

  let changeMessage = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }
  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsElement}
        </div>
        <div className={classes.messages}>
          {messageElement}
          <div className={classes.change}>
            <textarea value={props.messagesPage.newMessage} onChange={changeMessage} className={classes.area} placeholder='Enter your message'/>
            <button onClick={sendMessage} className={classes.button}>Send message</button>
          </div>
        </div>
      </div>
  )
}

export default Dialogs
