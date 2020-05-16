import React from 'react'
import classes from './ProfileInfo.module.css'
import facebookIcon from '../../../assets/images/facebook.svg'
import instagramIcon from '../../../assets/images/instagram.svg'
import vkIcon from '../../../assets/images/vk.svg'
import twitterIcon from '../../../assets/images/twitter.svg'
import githubIcon from '../../../assets/images/github.svg'

const ProfileStatusContact = (props) => {
  return <div>

    {props.profile.contacts.facebook &&
    <div className={classes.contactItem}><img src={facebookIcon} className={classes.contactImg}/>
      <span>{props.profile.contacts.facebook}</span>
    </div>}

    {props.profile.contacts.instagram &&
    <div className={classes.contactItem}><img src={instagramIcon} className={classes.contactImg}/>
      <span>{props.profile.contacts.instagram}</span>
    </div>}

    {props.profile.contacts.vk &&
    <div className={classes.contactItem}><img src={vkIcon} className={classes.contactImg}/>
      <span>{props.profile.contacts.vk}</span></div>}

    {props.profile.contacts.twitter &&
    <div className={classes.contactItem}><img src={twitterIcon} className={classes.contactImg}/>
      <span>{props.profile.contacts.twitter}</span>
    </div>}

    {props.profile.contacts.github &&
    <div className={classes.contactItem}><img src={githubIcon} className={classes.contactImg}/>
      <span>{props.profile.contacts.github}</span></div>}

  </div>
}

export default ProfileStatusContact
