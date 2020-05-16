import React from 'react'
import classes from './ProfileInfo.module.css'
import defaultAvatar from '../../../assets/images/thor.png'

const ProfileStatusAvatar = (props) => {
  return <div>
    <div><img className={classes.avatar} src={props.profile.photos.large || defaultAvatar}/></div>


    {props.isOwner && <div className={classes.fileForm}>
      <div className={classes.selectButton}>Change avatar</div>
      <input type={'file'} className={classes.upload} onChange={props.onPhotoSelected}/>
    </div>}

  </div>
}

export default ProfileStatusAvatar
