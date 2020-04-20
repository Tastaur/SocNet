import React from 'react'
import {connect} from 'react-redux'
import {follow, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, unfollow} from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setTotalUserCount(response.data.totalCount)
          this.props.toggleIsFetching(false);
        })

  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.toggleIsFetching(false);
        })
  }

  render() {

    return <>

      {this.props.isFetching ?   <Preloader/>: null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
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
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUserAC(users))
//     },
//     setTotalUserCount: (totalCount) => {
//       dispatch(setTotalCountUserAC(totalCount))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     toggleIsFetching: (isFetching) =>{
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }
//
// {
//   follow: followAC,
//       unfollow:
//   unfollowAC,
//       setUsers
// :
//   setUserAC,
//       setTotalUserCount
// :
//   setTotalCountUserAC,
//       setCurrentPage
// :
//   setCurrentPageAC,
//       toggleIsFetching
// :
//   toggleIsFetchingAC,
// }


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUserCount,
  setCurrentPage,
  toggleIsFetching,
})(UsersContainer)


