import {profileAPI} from '../API/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    {id: 1, message: 'Hello, this my first post', likeCount: 5},
    {id: 2, message: 'I do that page for training my skiil on JS and React', likeCount: 10},
  ],
  newPostText: '',
  profile:null,
}


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText
      return {
        ...state,
        posts: [...state.posts, {id: 6, likeCount: Math.random().toFixed(1)*10, message: text}],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) =>
  profileAPI.setUser(userId)
      .then(data => {
        dispatch(setUserProfile(data))
})

export default profileReducer
