import {applyMiddleware, combineReducers, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogReducer'
import musicReducer from './musicReducer'
import newsReducer from './newsReducer'
import sideBraReducer from './sideBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  music: musicReducer,
  news: newsReducer,
  sideBarPage: sideBraReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store=store

export default store
