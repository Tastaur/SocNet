import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {loginUserData} from '../../redux/authReducer'
let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} name={'email'} placeholder={`email`}/></div>
        <div><Field component={'input'} type={`password`} name={'password'} placeholder={`password`}/></div>
        <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me</div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)


const LoginConnectForm = connect(mapStateToProps,{loginUserData})(LoginReduxForm)
const Login = (props) => {
  const onSubmit = (formData) =>{
    console.log(formData)
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginConnectForm onSubmit={onSubmit} />
  </div>
}








export default Login
