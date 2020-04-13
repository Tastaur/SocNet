import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return <div className={classes.profile}>
    <img className={classes.mainImage}
         src="https://trofotodesign.ru/images/trofotocontent/orca/TROFOTO_4831_07072012.jpg"/>
    <ProfileInfo/>
    <MyPostsContainer  />
  </div>
}

export default Profile
