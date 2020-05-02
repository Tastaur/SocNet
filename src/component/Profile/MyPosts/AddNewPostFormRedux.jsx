import React from 'react'
import {Field, reduxForm} from 'redux-form'

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field type={'textarea'} component={'textarea'} name={'newPostText'} placeholder={'Enter your post'}/>
    <button>Add posts</button>
  </form>
}

let AddNewPostFormRedux = reduxForm({
  form: 'newPostBody',
})(AddNewPostForm)


export default AddNewPostFormRedux
