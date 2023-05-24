import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import BlogCard from './BlogCard';
import img1 from '../../Images/blog-1.jpg'
// import img2 from '../../Images/blog-2.jpg'
// import img3 from '../../Images/blog-3.webp'
// import img4 from '../../Images/blog-4.webp'

const Blog = () => {
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing={4} w='80%' margin='auto'>
      <BlogCard
        imageUrl={img1}
        date="May 20, 2023"
        heading="Blog Heading 1"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"
      />
      <BlogCard
        imageUrl={img1}
        date="May 21, 2023"
        heading="Blog Heading 2"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"
      />
      <BlogCard
        imageUrl={img1}
        date="May 22, 2023"
        heading="Blog Heading 3"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"
      />
      <BlogCard
        imageUrl={img1}
        date="May 23, 2023"
        heading="Blog Heading 4"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices sagittis odio at ultricies."
        buttonLabel="Read More"
      />
      {/* Add more BlogCard components as needed */}
    </SimpleGrid>
  );
};

export default Blog;
