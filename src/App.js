import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import NavBar from './component/NavBar/NavBar'
import Profile from './component/Profile/Profile'
import {Route} from 'react-router-dom'
import Setting from './component/Setting/Setting'
import DialogsContainer from './component/Dialogs/DialogsContainer'
import MusicContainer from './component/Music/MusicContainer'
import NewsContainer from './component/News/NewsContainer'
import UsersContainer from './component/Users/UsersContainer'

const App = (props) => {
  return (
      <div className="appWrapper">
        <Header/>
        <NavBar />
        <div className="appWrapperContent">
          <Route path='/dialogs'
                 render={() => <DialogsContainer/>}/>
          <Route path='/profile'
                 render={() => <Profile
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
        </div>
      </div>
  )
}

export default App
