import {profileAPI} from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
  posts: [
    {id: 1, message: 'Hello, this my first post', likeCount: 5},
    {id: 2, message: 'I do that page for training my skiil on JS and React', likeCount: 10},
  ],
  profile: null,
  status: '',
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
    default:
      return state
  }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => (dispatch) =>
    profileAPI.setUser(userId)
        .then(data => {
          dispatch(setUserProfile(data))
        })

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data))
      })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
}

export default profileReducer
