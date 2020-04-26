import React from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar'
import {Route} from 'react-router-dom'
import Setting from './component/Setting/Setting'
import DialogsContainer from './component/Dialogs/DialogsContainer'
import MusicContainer from './component/Music/MusicContainer'
import NewsContainer from './component/News/NewsContainer'
import UsersContainer from './component/Users/UsersContainer'
import ProfileContainer from './component/Profile/ProfileContainer'
import HeaderContainer from './component/Header/HeaderContainer'
import Login from './component/Login/Login'

const App = (props) => {
  return (
      <div className="appWrapper">
        <HeaderContainer/>
        <NavBar />
        <div className="appWrapperContent">
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
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
          <Route path='/users' render={()=> <UsersContainer/>}/>
          <Route path='/login' render={()=> <Login/>}/>

        </div>
      </div>
  )
}

export default App
