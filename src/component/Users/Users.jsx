import React from 'react'
import classes from './User.module.css'
import userPhoto from '../../assets/images/thor.png'
import {NavLink} from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'

let Users = (props) => {
  return <div>
   <Paginator {...props} />
    {
      props.users.map(u => <div key={u.id}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img alt={'user'} src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                   props.unfollow(u.id)
                  }}
                  > Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                  }}
                  > Follow</button>}
            </div>
            <div>{u.name}</div>
        <br/>
            <div>{u.status}</div>
          </div>,
      )
    }
  </div>
}


export default Users
