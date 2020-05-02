import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNewPostFormRedux from './AddNewPostFormRedux'


const MyPosts = (props) => {
  let postsElement = props.posts
      .map(post => <Post likeCount={post.likeCount} message={post.message} creater={post.creater} key={post.id} id={post.id}/>)

  let addPost = (value) => {
    props.addPost(value.newPostText)
    value.newPostText = ''
  }

  return <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div>
      <AddNewPostFormRedux onSubmit={addPost}/>
    </div>
    <div className={classes.posts}>
      {postsElement}
    </div>
  </div>
}


export default MyPosts
