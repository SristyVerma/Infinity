import React from 'react';
import { Box, Heading, Text, Flex, Avatar } from '@chakra-ui/react';
import Rating from 'react-rating';

const CustomerReview = ({ name, rating, review, date }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" bg="white">
      <Flex align="center">
        <Avatar name={name} size="sm" mr={2} />
        <Heading as="h4" size="sm" fontWeight="medium">
          {name}
        </Heading>
      </Flex>
      <Rating
        initialRating={rating}
        emptySymbol={<span className="icon">&#9734;</span>}
        fullSymbol={<span className="icon">&#9733;</span>}
        readonly
      />
      <Text fontSize="sm" color="gray.500" mt={2}>
        {date}
      </Text>
      <Text fontSize="sm" mt={2}>
        {review}
      </Text>
    </Box>
  );
};

export default CustomerReview;
