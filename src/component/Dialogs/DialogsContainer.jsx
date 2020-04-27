import React from 'react'
import {sendNewMessage, updateNewMessageBody} from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'
import {compose} from 'redux'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageBody, sendNewMessage}),
    withAuthRedirect
)(Dialogs)
