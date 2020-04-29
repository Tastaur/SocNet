import React from 'react'
import SideBar from './SideBar'
import {connect} from 'react-redux'
import {compose} from 'redux'

let mapStateToProps = (state) => {
  return {
    state: state.sideBarPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {

  }
}




export default compose(connect(mapStateToProps, mapDispatchToProps))(SideBar)
