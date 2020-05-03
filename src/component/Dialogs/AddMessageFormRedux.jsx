import React from 'react'
import classes from './Dialogs.module.css'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../utils/validators/validator'
import {Textarea} from '../common/Forms/FormsControl'

const minLength2 = minLengthCreator(2)
const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <Field
        component={Textarea}
        name={'newMessageBody'}
        className={classes.area}
        placeholder='Enter your message'
        validate={[required, maxLength100,minLength2]}
    />
    <button className={classes.button}>Send message</button>
  </form>
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm',
})
(AddMessageForm)
export default AddMessageFormRedux
