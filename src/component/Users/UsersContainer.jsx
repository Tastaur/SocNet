import React from 'react'
import {connect} from 'react-redux'
import {
  follow,
  setCurrentPage,
  setTotalUserCount,
  setUsers,
  toggleFollowingInProgress,
  toggleIsFetching,
  unfollow,
} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {userAPI} from '../../API/api'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    userAPI.getUser(this.props.currentPage, this.props.pageSize)
        .then(data => {
          this.props.setUsers(data.items)
          this.props.setTotalUserCount(data.totalCount)
          this.props.toggleIsFetching(false)
        })

  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    userAPI.getUser(pageNumber)
        .then(data => {
          this.props.setUsers(data.items)
          this.props.toggleIsFetching(false)
        })
  }

  render() {

    return <>

      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             toggleFollowingInProgress={this.props.toggleFollowingInProgress}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUserCount,
  setCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer)


