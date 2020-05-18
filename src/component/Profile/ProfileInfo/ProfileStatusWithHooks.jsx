import React, {useEffect, useState} from 'react'
import classes from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  let activateEditMode = () => {
    setEditMode(true)
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return (
      <div className={classes.status}>
        {!editMode &&
        <div>
          {props.isOwner ?
              <span className={classes.profileStatus} onDoubleClick={activateEditMode}>{props.status || `No status`} </span> :
              <span className={classes.profileStatus}>{props.status || `No status`} </span>
          }
        </div>
        }
        {editMode &&
        <div>
          <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
        </div>
        }
      </div>
  )

}

export default ProfileStatusWithHooks
