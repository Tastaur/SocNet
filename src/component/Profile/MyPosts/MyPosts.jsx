import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsElement = props.posts
      .map(post => <Post likeCount={post.likeCount} message={post.message} creater={post.creater} key={post.id} id={post.id}/>)

  let newPostEl = React.createRef()
  let addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostEl.current.value
    props.updateNewPostText(text)
}
return <div className={classes.postsBlock}>
  <h3>my posts</h3>
  <div>
    <div>
      <textarea onChange={onPostChange} ref={newPostEl} value={props.newPostText}/>
    </div>
    <button onClick={addPost}>Add posts</button>
  </div>
  <div className={classes.posts}>
    {postsElement}
  </div>
</div>
}

export default MyPosts
