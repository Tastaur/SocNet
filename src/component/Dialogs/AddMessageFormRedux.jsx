import React from 'react'
import classes from './Dialogs.module.css'
import {Field, reduxForm} from 'redux-form'

const AddMessageForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <Field
        component={'textarea'}
        name={'newMessageBody'}
        className={classes.area}
        placeholder='Enter your message'
    />
    <button className={classes.button}>Send message</button>
  </form>
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})
(AddMessageForm)
export default AddMessageFormRedux
