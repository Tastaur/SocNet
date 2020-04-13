import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return <div className={classes.profileInfo}>
     <div><img className={classes.avatar} src='https://i.pinimg.com/736x/1b/44/4d/1b444dae6aa30d47c5a46ca0851eaa13--urban-art-auction.jpg'/></div>
    <div className={classes.descriptionBlock}> Helo</div>
  </div>
}

export default ProfileInfo
