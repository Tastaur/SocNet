import React from 'react'
import NewsItem from './NewsItem/NewsItem'

const News = (props) => {
  let hotNews = props.state
      .map(news=> <NewsItem text={news.text} key={news.id} id={news.id}/>)
  return <div>
  {hotNews}
<br/>
<br/>
<br/>
<br/>
<br/>
 <span>!!!! this page in progress !!!</span>
  </div>
}

export default News
