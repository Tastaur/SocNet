import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {maxLengthCreator, minLengthCreator, required} from '../../../utils/validators/validator'

const maxLength30 = maxLengthCreator(30)
const minLength2 = minLengthCreator(2)
let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field component={'textarea'} name={'newPostText'}  placeholder='Enter your post'  validate={[required, maxLength30,minLength2]}/>
    <button>Add posts</button>
  </form>
}

let AddNewPostFormRedux = reduxForm({
  form: 'newPostBody',
})(AddNewPostForm)


export default AddNewPostFormRedux
