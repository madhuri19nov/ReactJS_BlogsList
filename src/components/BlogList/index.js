// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blogslist-container">
      {blogsData.map(eachItem => (
        <BlogItem key={eachItem.id} blog={eachItem} />
      ))}
    </div>
  )
}

export default BlogList
