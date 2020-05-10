import React from 'react'
import classes from './Paginator.module.css'

let Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)


  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return  <div className={classes.pageContainer}>
      {pages.map(p => {
        return <span key={p.id} onClick={(e) => {
          props.onPageChanged(p)
        }} className={props.currentPage === p && classes.selectedPage}
        >{p}</span>
      })}
    </div>
}


export default Paginator
