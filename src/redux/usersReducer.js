const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
  users: [],
  pageSize: 80,
  totalCount: 0,
  currentPage: 1,
  isFetching: false,
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
    default:
      return state
  }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer
