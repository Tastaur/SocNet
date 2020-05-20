import {profileAPI} from '../API/api'
import {stopSubmit} from 'redux-form'

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS'
const CHANGE_PROFILE_SUCCESS = 'profile/CHANGE_PROFILE_SUCCESS'

let initialState = {
  posts: [
    {id: 1, message: 'Hello, this my first post', likeCount: 5},
    {id: 2, message: 'I do that page for training my skiil on JS and React', likeCount: 10},
  ],
  profile: null,
  status: '',
  profileUpdate: false,
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newPostBody
      return {
        ...state,
        posts: [{id: 6, likeCount: Math.random().toFixed(1) * 10, message: text}, ...state.posts],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id),
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      }
    }
    case SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: {...action.profile},
      }
    }
    case CHANGE_PROFILE_SUCCESS: {
      return {
        ...state,
        profileUpdate: action.profileUpdate,
      }
    }
    default:
      return state
  }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const changeProfileSuccess = (profileUpdate) => ({type: CHANGE_PROFILE_SUCCESS, profileUpdate})

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.setUser(userId)
  dispatch(setUserProfile(data))
}
export const getUserStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (file) => async (dispatch, getState) => {
  dispatch(changeProfileSuccess(true))
  const userId = getState().auth.userId
  let response = await profileAPI.saveProfile(file)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
    dispatch(changeProfileSuccess(false))
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Incorrect Data'
    dispatch(stopSubmit('profileDataStatus', {_error: message}))
    dispatch(changeProfileSuccess(false))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer
