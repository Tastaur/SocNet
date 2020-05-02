import React from 'react'
import {sendNewMessage} from '../../redux/dialogReducer'
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
    connect(mapStateToProps, { sendNewMessage}),
    withAuthRedirect
)(Dialogs)
