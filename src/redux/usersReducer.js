import {userAPI} from '../API/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
  users: [],
  pageSize: 80,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        }),
      }
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_TOTAL_COUNT_USERS:
      return {...state, totalCount: action.count}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
            [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id != action.userId),
      }
    default:
      return state
  }
}
export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
  userAPI.getUser(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUserCount(data.totalCount))
        dispatch(toggleIsFetching(false))
      })
}
export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId))
  userAPI.followUser(userId)
      .then(data => {
        if (data.resultCode == 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
      })
}
export const unfollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId))
  userAPI.unfollowUser(userId)
      .then(data => {
        if (data.resultCode == 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
      })

}


export default usersReducer
