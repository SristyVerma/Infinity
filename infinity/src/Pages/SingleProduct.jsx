import React, { useState } from 'react'
import Meta from '../Components/Meta'
import CustomerReview from '../Components/CustomerReview'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp'
import './Styles/SingleProduct.css'
import Rating from 'react-rating';
import {Link} from 'react-router-dom'
import { Box, Heading, Flex,  Textarea, Button } from '@chakra-ui/react';
import SingleProductDetail from '../Components/SingleProductDetail'

const SingleProduct = () => {
  const [ordered,setOrdered]=useState(true)
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = () => {
    // Handle the submit logic here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Clear the form fields
    setRating(0);
    setComment('');
    alert("Review Submitted successfully")
    setShowReviewForm(false)
  };
  return (
    <>
    <Meta title="Single Product Name"/>
      <BreadCrumbComp title='Single Product Name'/>
      <SingleProductDetail/>
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
      <Box p={4} >
      <Heading as="h3" size="md" mb={4}>
        Customer Reviews
      </Heading>
      <Flex justify="space-between" align="center">
        <Rating
          initialRating={4.5}
          emptySymbol={<span className="icon">&#9734;</span>}
          fullSymbol={<span className="icon">&#9733;</span>}
          readonly
        />

        {ordered &&<Link href="#" fontWeight="bold" onClick={() => setShowReviewForm(true)} >
          Write a Review
        </Link>}
        
      </Flex>
      {showReviewForm && (
          <Box mt={4}>
            <Rating
              initialRating={rating}
              emptySymbol={<span className="icon">&#9734;</span>}
              fullSymbol={<span className="icon">&#9733;</span>}
              onChange={handleRatingChange}
            />

            <Textarea
              placeholder="Leave a comment..."
              value={comment}
              onChange={handleCommentChange}
              mt={2}
            />

            <Button colorScheme="blue" mt={2} onClick={handleSubmitReview}>
              Submit Review
            </Button>
          </Box>
        )}

    </Box>
    <CustomerReview name="John Doe" rating={4.5} review="Great product!" date="May 20, 2023" />
    <CustomerReview name="John Doe" rating={4.5} review="Great product!" date="May 20, 2023" />



      </Box>
    </>
  )
}

export default SingleProduct