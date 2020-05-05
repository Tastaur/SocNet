import React from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import {Route, withRouter} from 'react-router-dom'
import Setting from './component/Setting/Setting'
import DialogsContainer from './component/Dialogs/DialogsContainer'
import MusicContainer from './component/Music/MusicContainer'
import NewsContainer from './component/News/NewsContainer'
import UsersContainer from './component/Users/UsersContainer'
import ProfileContainer from './component/Profile/ProfileContainer'
import HeaderContainer from './component/Header/HeaderContainer'
import Login from './component/Login/Login'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/appReducer'
import Preloader from './component/common/preloader/Preloader'
import LoginPage from './component/LoginPage/LoginPage'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()

  }
  render() {

    if(!this.props.initialized){
      return <Preloader/>
    }
    if(!this.props.isAuth){
      return <LoginPage/>
    }
    return (
        <div className="appWrapper">
          <HeaderContainer/>
          <NavBar/>
          <div className="appWrapperContent">
            <Route path='/dialogs'
                   render={() => <DialogsContainer/>}
            />
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer
                   />}
            />
            <Route path='/music'
                   render={() => <MusicContainer
                   />}
            />
            <Route path='/settings'
                   render={() => <Setting/>}
            />
            <Route path='/news'
                   render={() => <NewsContainer
                   />}
            />
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>

          </div>
        </div>
    )
  }
}

const mapStateToProps= (state) =>{
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
  }
}

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
