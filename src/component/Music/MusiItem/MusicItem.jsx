import React from 'react'
import classes from './MusicItem.module.css'

const MusicItem = (props) => {
  return <div>
    {props.artist}--{props.song}
  </div>
}

export default MusicItem
