import React, {useState} from 'react'
import classes from './Paginator.module.css'
import cn from 'classnames'

let Paginator = (props, {portionSize = 10}) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)


  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={classes.pageContainer}>
    <button disabled={portionNumber === 1} onClick={() => {
        setPortionNumber(portionNumber - 1)
    }}> &larr;</button>
    {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return <span className={
            cn({
                  [classes.selectedPage]: props.currentPage === p,
                },
                classes.pageNumber)}
                       key={p}
                       onClick={(e) => {
                         props.onPageChanged(p)
                       }
                       }
          >{p}</span>
        })}
    <button disabled={portionCount <= portionNumber} onClick={()=>{
    setPortionNumber(portionNumber+1)}
    }>&rarr;</button>

  </div>
}


export default Paginator
