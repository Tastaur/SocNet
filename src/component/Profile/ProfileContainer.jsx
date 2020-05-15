import React from 'react'
import Profile from './Profile'
import {getUserProfile, getUserStatus, savePhoto, updateStatus} from '../../redux/profileReducer'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'
import {compose} from 'redux'

class ProfileContainer extends React.Component {

  refreshProfile = () => {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
                 isOwner={!this.props.match.params.userId}
                 savePhoto={this.props.savePhoto}
        />
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
})


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

