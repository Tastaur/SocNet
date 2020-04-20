import React from 'react'
import classes from './User.module.css'
import userPhoto from '../../assets/images/thor.png'
import {NavLink} from 'react-router-dom'

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)


  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return <div>
    <div className={classes.pageContainer}>
      {pages.map(p => {
        return <span onClick={(e) => {
          props.onPageChanged(p)
        }} className={props.currentPage === p && classes.selectedPage} key={p.id}
        >{p}</span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}> Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}> Follow</button>}
            </div>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
              </span>
            </span>
          </div>,
      )
    }
  </div>
}


export default Users
