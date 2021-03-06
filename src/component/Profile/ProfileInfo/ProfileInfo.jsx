import React, {useState} from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileStatusContact from './ProfileStatusContact'
import ProfileStatusDiscription from './ProfileStatusDiscription'
import ProfileStatusAvatar from './ProfileStatusAvatar'
import ProfileFormRedux from './ProfileForm'

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)


  let saveProfile = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(!editMode)
    })

  }

  if (!props.profile) {
    return <Preloader/>
  }
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return <div>
    {props.profileUpdate ? <Preloader/> : null}

    {editMode ? <ProfileFormRedux initialValues={{...props.profile}}
                                  profile={{...props.profile}}
                                  onSubmit={saveProfile}
        /> :

        <div className={classes.profileInfo}>
          <div>
            <ProfileStatusAvatar {...props} onPhotoSelected={onPhotoSelected}/>
            <ProfileStatusWithHooks status={props.status} isOwner={props.isOwner} updateStatus={props.updateStatus}/>
            <ProfileStatusDiscription {...props} />
            {props.isOwner ?
                <button onClick={() => {
                  setEditMode(!editMode)
                }}
                > Edit profile </button> : null
            }</div>
          <div className={classes.contactContainer}>
            <ProfileStatusContact  {...props}/>
          </div>
        </div>}


  </div>


}

export default ProfileInfo
