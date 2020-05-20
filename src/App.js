import React, {Component, Suspense} from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import {HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import HeaderContainer from './component/Header/HeaderContainer'
import Login from './component/Login/Login'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './component/common/preloader/Preloader'
import LoginPage from './component/LoginPage/LoginPage'
import store from './redux/reduxStore'

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'))
const MusicContainer = React.lazy(() => import('./component/Music/MusicContainer'))
const NewsContainer = React.lazy(() => import('./component/News/NewsContainer'))
const Setting = React.lazy(() => import('./component/Setting/Setting'))
const UsersContainer = React.lazy(() => import('./component/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'))

class App extends Component {
  catchAllUnhandleError = (reason, promise)=>{

      alert('error')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandleError);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleError);

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

            <Suspense fallback={<Preloader/>}>
              <Switch>
                <Route exact path='/' render={()=>
                       <Redirect to={'/profile'}/>}
                />
              <Route path='/profile/:userId?'
                     render={() => <ProfileContainer/>}
              />
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
                <Route path='*' render={() => <>Page not found</>}/>
              </Switch>
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
      <HashRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </HashRouter>)
}
export default SocNetApp
