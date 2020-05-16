import React from 'react'
import classes from './ProfileInfo.module.css'
import find from '../../../assets/images/findJob.svg'

const ProfileStatusDiscription = (props) => {
  return <div>
    <div>{props.profile.fullName}</div>
    <div className={classes.descriptionBlock}> {props.profile.aboutMe}</div>
    {props.profile.lookingForAJob && <img src={find} className={classes.jobPic} alt={'i need job'}/>}
    <div className={classes.jobStatus}>{props.profile.lookingForAJobDescription}</div>

  </div>
}

export default ProfileStatusDiscription
