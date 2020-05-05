import React from 'react'
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }


  onStatusChange = (e) =>{
    let text = e.target.value;
    this.setState({
      status: text,

    })
  }
  activateEditmode =() =>{
        this.setState({
      editMode:true
    })
  }
  deactivateEditmode =() =>{
    this.setState({
      editMode:false
    });
    this.props.updateStatus(this.state.status)
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
        <div>
          {!this.state.editMode &&
            <div>
              <span className={classes.profileStatus} onDoubleClick={this.activateEditmode} >{this.props.status || `No status`} </span>
            </div>
          }
          {this.state.editMode &&
            <div>
              <input autoFocus={true}  value={this.state.status} onChange={this.onStatusChange} onBlur={this.deactivateEditmode}/>
            </div>
          }
        </div>
    )
  }
}

export default ProfileStatus
