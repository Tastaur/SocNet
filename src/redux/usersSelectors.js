import {createSelector} from 'reselect'

export const getAllUsers = (state) =>{
  return state.usersPage.users
}
export const getAllUsersSelector = (state) =>{
  return getAllUsers(state).filter(u => true)
}
export const getAllUsersSuperSelector = (state) =>createSelector(getAllUsers, (users)=>{
  return users.filter(u => true)
})

export const getPageSize = (state) =>{
  return state.usersPage.pageSize
}

export const getTotalCount = (state) =>{
  return state.usersPage.totalCount
}
export const getCurrentPage = (state) =>{
  return state.usersPage.currentPage
}
export const getIsFetching = (state) =>{
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) =>{
  return state.usersPage.followingInProgress
}
