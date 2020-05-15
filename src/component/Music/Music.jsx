import React from 'react'
import MusicItem from './MusiItem/MusicItem'

const Music = (props) => {
  let profileMusic = props.state
        .map(music => <MusicItem artist={music.artist} key={music.id} song={music.song}/>)
  return <div>
    {profileMusic}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <span>!!!! this page in progress !!!</span>
  </div>
}

export default Music



