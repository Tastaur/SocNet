import React from 'react'
import {connect} from 'react-redux'
import {follow, getUsers, setCurrentPage, toggleFollowingInProgress, unfollow} from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'
import {withAuthRedirect} from '../../HOC/withAuthRedirect'
import {compose} from 'redux'
import {
  getAllUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalCount,
} from '../../redux/usersSelectors'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {

    return <>

      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             followingInProgress={this.props.followingInProgress}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
      />
    </>
  }
}



let mapStateToProps = (state) => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}


export default compose(
    connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingInProgress,
      getUsers,
    }),
    withAuthRedirect)
(UsersContainer)


