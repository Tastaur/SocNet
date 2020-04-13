import React from 'react'
import classes from './User.module.css'

let Users = (props) => {

  if(props.users.length===0){
  props.setUsers([
      {
    id: 1,
    photoUrl: 'https://ae01.alicdn.com/kf/HTB1UBilQFXXXXa6XFXXq6xXFXXXy.jpg',
    followed: true,
    fullName: 'Mark',
    status: 'i\'m learning React',
    location: {country: 'Russia', city: 'Togliatti'},
  },
    {
      id: 2,
      photoUrl: 'https://www.pinclipart.com/picdir/middle/227-2277072_marvel-daredevil-clipart-vector-png-download.png',
      followed: true,
      fullName: 'Petya',
      status: 'i\'m learning JS',
      location: {country: 'Russia', city: 'Novosibirsk'},
    },
    {
      id: 3,
      photoUrl: 'https://i.pinimg.com/originals/f0/cb/bf/f0cbbfd1f5de237d2b51ae420ccfc06e.png',
      followed: false,
      fullName: 'Vasya',
      status: 'i\'m learning HTML',
      location: {country: 'Russia', city: 'Moscow'},
    }])}
  return <div>
    {
      props.users.map(u => <div key={u.id}>

            <div>
              <img src={u.photoUrl} className={classes.userPhoto}/>
            </div>
            <div>
              {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}> Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}> Follow</button>}
            </div>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>,
      )
    }
  </div>
}

export default Users
