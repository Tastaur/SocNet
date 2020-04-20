const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  posts: [
    {id: 1, message: 'Hello, this my first post', likeCount: 5},
    {id: 2, message: 'I do that page for training my skiil on JS and React', likeCount: 10},
  ],
  newPostText: '',
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
    default:
      return state
  }
}
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer
