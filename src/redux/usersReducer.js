import {userAPI} from '../API/api'
import {updateObjectInArray} from '../utils/objects-helpers'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_COUNT_USERS = 'users/SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'


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
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}),
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
  let data = await userAPI.getUser(currentPage, pageSize)

  dispatch(setUsers(data.items))
  dispatch(setTotalUserCount(data.totalCount))
  dispatch(toggleIsFetching(false))

}
const followUnfollowFlow = async (dispatch, userId, apiMethhod, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId))
  let data = await apiMethhod(userId)
  if (data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess)

}
export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollowSuccess)

}


export default usersReducer
