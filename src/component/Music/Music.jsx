import React from 'react'
import classes from './Music.module.css'
import MusicItem from'./MusiItem/MusicItem'

const Music = (props) => {
  let profileMusic = props.state
        .map(music => <MusicItem artist={music.artist} key={music.id} song={music.song}/>)
  return <div>
    {profileMusic}
  </div>
}

export default Music



