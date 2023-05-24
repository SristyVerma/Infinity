import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import {Link} from 'react-router-dom'
const BlogCard = ({ imageUrl, date, heading, paragraph, buttonLabel }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxWidth="400px"
      margin="auto"
    >
      <Image src={imageUrl} alt="BlogImage" maxW={'400px'} />

      <Box p="4">
        <Text  color="gray.500" fontSize="sm">
          {date}
        </Text>

        <Heading as="h2" size="md" mt="2" >
          {heading}
        </Heading>

        <Text  mt="2" color="gray.600">
          {paragraph}
        </Text>
<Link to='/singleblog/id'>
        <Button
          mt="4"
          backgroundColor='primary.200'
          borderRadius="md"
          alignSelf="flex-end"
        >
          {buttonLabel}
        </Button></Link>
      </Box>
    </Box>
  );
};

export default BlogCard;
