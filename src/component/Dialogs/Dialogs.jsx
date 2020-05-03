import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogsItem from './DialogsItem/DialogsItem'
import AddMessageFormRedux from './AddMessageFormRedux'
import {reset} from 'redux-form'

const Dialogs = (props) => {
  let state = props.messagesPage
  let messageElement = state.messagesData.map(m => <Message message={m.message} key={m.id} id={m.id} myMessage={m.myMessage}/>)
  let dialogsElement = state.dialogsData.map(d => <DialogsItem name={d.name} key={d.id} id={d.id} src={d.src}/>)

  let addNewMessage = (formData, dispatch) => {
    props.sendNewMessage(formData.newMessageBody)
    dispatch(reset('dialogAddMessageForm'))
  }

  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
          {dialogsElement}
        </div>
        <div className={classes.messages}>
          {messageElement}
          <div className={classes.change}>
            <AddMessageFormRedux onSubmit={addNewMessage}
                                 messagesPage={props.messagesPage}

            />
          </div>
        </div>
      </div>
  )
}


export default Dialogs
