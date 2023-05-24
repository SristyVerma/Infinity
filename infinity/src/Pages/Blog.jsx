import React from 'react'
import Meta from '../Components/Meta'
import BlogCard from '../Components/Blog/BlogCard'
import './Styles/Blog.css'
import img1 from '../Images/blog-1.jpg'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp'
const Blog = () => {
  return (
  <>
  <Meta title="Blog"/>
  <BreadCrumbComp title='Blog'/>
  <div className='blog-main-container'>
    <BlogCard  imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"/>
    <BlogCard  imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"/>
    <BlogCard  imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"/>
    <BlogCard  imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"/>
    <BlogCard  imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"/>
  </div>
  </>
  )
}

export default Blog