import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return <div className={classes.item}>
    <div>
      <img src='https://i.pinimg.com/736x/1b/44/4d/1b444dae6aa30d47c5a46ca0851eaa13--urban-art-auction.jpg'/>
      <span>
    {props.message}
      </span>
    </div>
    <div>
      <span>Like ({props.likeCount})</span>
    </div>
  </div>
}

export default Post
