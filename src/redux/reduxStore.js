import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogReducer'
import musicReducer from './musicReducer'
import newsReducer from './newsReducer'
import sideBraReducer from './sideBarReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

let reducers = combineReducers({
  messagesPage: dialogsReducer,
  profilePage: profileReducer,
  music: musicReducer,
  news: newsReducer,
  sideBarPage: sideBraReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
window.store = store

export default store
