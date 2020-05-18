import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {


  return <div className={classes.profile}>
    <ProfileInfo isOwner={props.isOwner}
                 profile={props.profile}
                 savePhoto={props.savePhoto}
                 saveProfile={props.saveProfile}
                 status={props.status}
                 updateStatus={props.updateStatus} {...props}/>
    <MyPostsContainer/>
  </div>
}

export default Profile
