import React from 'react'
import {sendNewMessageCreater, updateNewMessageBodyCreater} from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {dispatch(sendNewMessageCreater())} ,
    changeMessage: (body) => {dispatch(updateNewMessageBodyCreater(body))} ,
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer
