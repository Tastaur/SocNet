import React from 'react'
import classes from './ProfileInfo.module.css'
import find from '../../../assets/images/findJob.svg'
import unfinde from '../../../assets/images/notNeedJob.svg'

const ProfileStatusDiscription = (props) => {
  return <div>
    <div>{props.profile.fullName}</div>
    <div className={classes.descriptionBlock}> {props.profile.aboutMe}</div>

    <div className={classes.jobStatus}><span>Need job:</span> <img src={props.profile.lookingForAJob ? find : unfinde}
                                                                   className={classes.jobPic}
                                                                   alt={'i need job'}
    /> {props.profile.lookingForAJobDescription}</div>

  </div>
}

export default ProfileStatusDiscription
