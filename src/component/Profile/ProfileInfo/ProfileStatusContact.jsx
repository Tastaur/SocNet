import React from 'react'
import classes from './ProfileInfo.module.css'
import facebook from '../../../assets/images/facebook.svg'
import instagram from '../../../assets/images/instagram.svg'
import vk from '../../../assets/images/vk.svg'
import twitter from '../../../assets/images/twitter.svg'
import github from '../../../assets/images/github.svg'
import website from '../../../assets/images/website.svg'
import mainLink from '../../../assets/images/mainLink.svg'
import youtube from '../../../assets/images/youtube.svg'

const ProfileStatusContact = (props) => {
  return <div>

    {props.profile.contacts.facebook &&
    <div className={classes.contactItem}><img src={facebook} className={classes.contactImg}/>
      <a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
    </div>}

    {props.profile.contacts.instagram &&
    <div className={classes.contactItem}><img src={instagram} className={classes.contactImg}/>
      <a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
    </div>}

    {props.profile.contacts.vk &&
    <div className={classes.contactItem}><img src={vk} className={classes.contactImg}/>
      <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>}

    {props.profile.contacts.twitter &&
    <div className={classes.contactItem}><img src={twitter} className={classes.contactImg}/>
      <a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
    </div>}

    {props.profile.contacts.github &&
    <div className={classes.contactItem}><img src={github} className={classes.contactImg}/>
      <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>}

      {props.profile.contacts.website &&
    <div className={classes.contactItem}><img src={website} className={classes.contactImg}/>
      <a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>}

      {props.profile.contacts.youtube &&
    <div className={classes.contactItem}><img src={youtube} className={classes.contactImg}/>
      <a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></div>}

      {props.profile.contacts.mainLink &&
    <div className={classes.contactItem}><img src={mainLink} className={classes.contactImg}/>
      <a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></div>}

  </div>
}

export default ProfileStatusContact
