import {authApi, securityApi} from '../API/api'
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'auth/GET_CAPTCHA_URL'


let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state
  }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, captchaUrl})

export const getAuthUserData = () => async (dispatch) => {
  let data = await authApi.submit()
  if (data.resultCode === 0) {
    let {id, email, login} = data.data
    dispatch(setAuthUserData(id, email, login, true))
  }

}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authApi.login(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    //success
    dispatch(getAuthUserData())
  } else {
    //error
    if (response.data.resultCode === 10) {
      dispatch(setCaptcha())
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Email or Password is wrong'
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logout = () => async (dispatch) => {
  let response = await authApi.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const setCaptcha = () => async (dispatch) => {
  let response = await securityApi.getCaptcha()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrl(captchaUrl))
}

export default authReducer
