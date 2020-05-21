import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {email, maxLengthCreator, minLengthCreator, required} from '../../utils/validators/validator'
import {Input} from '../common/Forms/FormsControl'
import {Redirect} from 'react-router-dom'
import classes from './Login.module.css'


const maxLength20 = maxLengthCreator(20)
const minLength2 = minLengthCreator(2)


const LoginForm = ({handleSubmit, error,captchaUrl}) => {
  return (
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <div><Field className={classes.loginInput} component={Input} validate={email} name={'email'} placeholder={`E-mail`}/>
        </div>
        <div><Field component={Input}
                    validate={[required, maxLength20, minLength2]}
                    type={`password`}
                    name={'password'}
                    placeholder={`Password`}
                    className={classes.loginInput}
        /></div>
        <div className={classes.lastRow}><Field component={Input} name={'rememberMe'} type={'checkbox'}/> <span>Remember me</span>
        </div>
        {error && <div className={classes.formSumError}>
          {error}
        </div>}
        <div>
          {captchaUrl && <div>
            <img alt={'captcha'} src={captchaUrl}/>
            <Field component={Input}
                   validate={[required]}
                   name={'captcha'}
                   placeholder={`Set security password`}
                   className={classes.loginInput}
            />
          </div>}
          <button className={classes.button}>Login</button>
        </div>
      </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm)


const Login = ({login, isAuth, captchaUrl}) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return <div className={classes.loginContainer}>
    <h1 className={classes.loginTitle}>Welcome to social network</h1>
    <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
  </div>
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login})(Login)
