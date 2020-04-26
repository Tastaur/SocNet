import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {Redirect} from 'react-router-dom'

const Profile = (props) => {

  if(props.isAuth === false) return <Redirect to={`/login`}/>
  return <div className={classes.profile}>
    <img className={classes.mainImage}
         src="https://trofotodesign.ru/images/trofotocontent/orca/TROFOTO_4831_07072012.jpg"/>
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer  />
  </div>
}

export default Profile
