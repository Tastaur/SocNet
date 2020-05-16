import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader'
import find from '../../../assets/images/findJob.svg'
import facebookIcon from '../../../assets/images/facebook.svg'
import instagramIcon from '../../../assets/images/instagram.svg'
import vkIcon from '../../../assets/images/vk.svg'
import twitterIcon from '../../../assets/images/twitter.svg'
import githubIcon from '../../../assets/images/github.svg'
import defaultAvatar from '../../../assets/images/thor.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  const onPhotoSelected = (e) =>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }
  return <div className={classes.profileInfo}>
    <div>
      <div><img className={classes.avatar} src={props.profile.photos.large || defaultAvatar}/></div>


      {props.isOwner && <div className={classes.fileForm}>
        <div className={classes.selectButton}>Change avatar</div>
        <input type={'file'} className={classes.upload} onChange={onPhotoSelected}/>
      </div>}


      <div>{props.profile.fullName}</div>
      <div className={classes.descriptionBlock}> {props.profile.aboutMe}</div>
      {props.profile.lookingForAJob ? <img src={find} className={classes.jobPic} alt={'i need job'} /> : null}
      <div className={classes.jobStatus}>{props.profile.lookingForAJobDescription}</div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>


    {/*some shitCode*/}
    <div className={classes.contactContainer}>

      {props.profile.contacts.facebook != null || props.profile.contacts.facebook != undefined ?
          <div className={classes.contactItem}><img src={facebookIcon} className={classes.contactImg}/>
            <span>{props.profile.contacts.facebook}</span>
          </div> : null}

      {props.profile.contacts.instagram != null || props.profile.contacts.instagram != undefined ?
          <div className={classes.contactItem}><img src={instagramIcon} className={classes.contactImg}/>
            <span>{props.profile.contacts.instagram}</span>
          </div> : null}

      {props.profile.contacts.vk != null || props.profile.contacts.vk != undefined ?
          <div className={classes.contactItem}><img src={vkIcon} className={classes.contactImg}/>
            <span>{props.profile.contacts.vk}</span></div> : null}

      {props.profile.contacts.twitter != null || props.profile.contacts.twitter != undefined ?
          <div className={classes.contactItem}><img src={twitterIcon} className={classes.contactImg}/>
            <span>{props.profile.contacts.twitter}</span>
          </div> : null}

      {props.profile.contacts.github != null || props.profile.contacts.github != undefined ?
          <div className={classes.contactItem}><img src={githubIcon} className={classes.contactImg}/>
            <span>{props.profile.contacts.github}</span></div> : null}

    </div>
  </div>


}

export default ProfileInfo
