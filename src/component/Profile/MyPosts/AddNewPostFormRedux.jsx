import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../../utils/validators/validator'
import classes from './MyPosts.module.css'
import  {Textarea} from '../../common/Forms/FormsControl'

const maxLength30 = maxLengthCreator(30)
const minLength2 = minLengthCreator(2)
let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit} className={classes.form} >
    <Field component={Textarea}
           name={'newPostText'}
           placeholder='Enter your post'
           validate={[required, maxLength30, minLength2]}
    />
    <button className={classes.button}>Add posts</button>
  </form>
}

let AddNewPostFormRedux = reduxForm({
  form: 'newPostBody',
})(AddNewPostForm)


export default AddNewPostFormRedux
