import React from 'react'
import Music from './Music'
import {connect} from 'react-redux'
import {compose} from 'redux'

let mapStateToProps = (state) => {
  return {
    state: state.music,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Music)



