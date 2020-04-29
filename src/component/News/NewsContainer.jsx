import React from 'react'
import News from './News'
import {connect} from 'react-redux'
import {compose} from 'redux'


let mapStateToProps = (state) => {
  return {
    state: state.news,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {}
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(News)
