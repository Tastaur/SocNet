import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileStatusContact from './ProfileStatusContact'
import ProfileStatusDiscription from './ProfileStatusDiscription'
import ProfileStatusAvatar from './ProfileStatusAvatar'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return <div className={classes.profileInfo}>
    <div>
      <ProfileStatusAvatar {...props} onPhotoSelected={onPhotoSelected}/>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      <ProfileStatusDiscription {...props} />

    </div>
    <div className={classes.contactContainer}>
      <ProfileStatusContact  {...props}/>
    </div>
  </div>


}

export default ProfileInfo
