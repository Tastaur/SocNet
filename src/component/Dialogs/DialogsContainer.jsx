import React from 'react'
import {sendNewMessage, updateNewMessageBody} from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}


const DialogsContainer = connect(mapStateToProps,{updateNewMessageBody,sendNewMessage})(Dialogs);

export default DialogsContainer
