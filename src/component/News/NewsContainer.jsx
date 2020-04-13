import React from 'react'
import News from './News'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
  return {
    state: state.news,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}



const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer
