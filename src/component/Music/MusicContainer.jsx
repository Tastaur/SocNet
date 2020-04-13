import React from 'react'
import Music from './Music'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return {
    state: state.music,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const  MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)
export default MusicContainer


// let profileMusic = props.music
//         .map(music => <MusicItem artist={music.artist} song={music.song}/>)
{/*{profileMusic}*/}
