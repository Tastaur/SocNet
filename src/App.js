import React, {Component, Suspense} from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import HeaderContainer from './component/Header/HeaderContainer'
import Login from './component/Login/Login'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './component/common/preloader/Preloader'
import LoginPage from './component/LoginPage/LoginPage'
import store from './redux/reduxStore'
import {withSuspense} from './HOC/withSuspense'

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'))
const MusicContainer = React.lazy(() => import('./component/Music/MusicContainer'))
const NewsContainer = React.lazy(() => import('./component/News/NewsContainer'))
const Setting = React.lazy(() => import('./component/Setting/Setting'))
const UsersContainer = React.lazy(() => import('./component/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()

  }

  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }
    if (!this.props.isAuth) {
      return <LoginPage/>
    }
    return (
        <div className="appWrapper">
          <HeaderContainer/>
          <NavBar/>
          <div className="appWrapperContent">
            <Route path='/profile/:userId?'
                   render={withSuspense(ProfileContainer)}
            />
            <Suspense fallback={<Preloader/>}>
              <Route path='/dialogs'
                     render={() => <DialogsContainer/>}
              />
              <Route path='/music'
                     render={() => <MusicContainer/>}
              />
              <Route path='/settings'
                     render={() => <Setting/>}
              />
              <Route path='/news'
                     render={() => <NewsContainer/>}
              />
              <Route path='/users' render={() => <UsersContainer/>}/>
            </Suspense>
            <Route path='/login' render={() => <Login/>}/>

          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
  }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocNetApp = (props) => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>)
}
export default SocNetApp
