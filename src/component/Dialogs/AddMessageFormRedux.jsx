import React from 'react'
import classes from './Dialogs.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../utils/validators/validator'

const minLength2 = minLengthCreator(2)
const maxLength30 = maxLengthCreator(30)
const AddMessageForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <Field
        component={'textarea'}
        name={'newMessageBody'}
        className={classes.area}
        placeholder='Enter your message'
        validate={[required, maxLength30,minLength2]}
    />
    <button className={classes.button}>Send message</button>
  </form>
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})
(AddMessageForm)
export default AddMessageFormRedux
