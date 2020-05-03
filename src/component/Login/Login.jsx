import React from 'react'
import {Field, reduxForm,reset} from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {email, maxLengthCreator, minLengthCreator, required} from '../../utils/validators/validator'
import {Input} from '../common/Forms/FormsControl'
import {Redirect} from 'react-router-dom'
import Preloader from '../common/preloader/Preloader'


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)



const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} validate={email} name={'email'} placeholder={`email`}/></div>
        <div><Field component={Input}
                    validate={[required, maxLength20, minLength2]}
                    type={`password`}
                    name={'password'}
                    placeholder={`password`}
        /></div>
        <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData,dispatch) => {
    props.login(formData.email, formData.password, formData.rememberMe);
    dispatch(reset('login'))
  }
  if (props.isAuth){
    return <Redirect to={'/profile'}/>
  }
  return <div>
    {props.isAuth ? <Preloader/> : null}
    <h1>Wellcome!</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}
const mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
