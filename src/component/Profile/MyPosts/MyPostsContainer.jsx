import React from 'react'
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profileReducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(addPostActionCreater())} ,
    updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreater(text))} ,
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
