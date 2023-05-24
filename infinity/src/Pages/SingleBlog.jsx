import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp'
import {
    Box,
    Heading,
    Image,
    Text,
    Flex,
    Spacer,
    Icon,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
  } from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa';
const SingleBlog = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic to handle form submission here
      };
  return (
<>
<Meta title="Single Blog Name"/>
  <BreadCrumbComp title='Single Blog Name'/>
  
  <Box maxW="800px" mx="auto" p={6} bg="white" boxShadow="md" borderRadius="md">
      <Heading as="h1" size="xl" mb={4}>
        Blog Title
      </Heading>
      <Image src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="Blog Image" mb={6} borderRadius="md" boxShadow="lg" />
      <Flex alignItems="center" mb={4}>
        <Text fontSize="sm" fontStyle="italic">
          Published: May 20, 2023
        </Text>
        <Spacer />
        <Text fontSize="sm">Written by: John Doe</Text>
      </Flex>
      <Text fontSize="lg" mb={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nunc erat. In vulputate finibus nulla
        eget fermentum. Nullam vestibulum malesuada purus. Nullam sed ex vitae purus eleifend interdum. Vivamus
        ut metus sit amet nunc aliquam ultrices nec at nulla. Nunc ut nisi orci. Nulla sed urna vitae turpis
        consectetur fringilla a at arcu. Donec tempor purus vitae risus hendrerit, vel fringilla tortor faucibus.
        Nam gravida libero nec efficitur semper. Curabitur interdum dui at mauris posuere eleifend.
      </Text>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <Flex align="center">
        <Icon as={FaArrowLeft} boxSize={4} mr={2} />
        <Text fontSize="md">Back To Blog</Text>
      </Flex>
      <Spacer/>
      <Spacer/>
      <Spacer/>

      <Box bg="primary.100" p={4} borderRadius="md" >
        <Heading as="h2" size="lg" mb={4}>
          Leave a Comment
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="comment" mb={4}>
            <FormLabel>Comment</FormLabel>
            <Textarea rows={4} resize="vertical" />
          </FormControl>
          <Button type="submit" colorScheme="brown" backgroundColor={'primary.300'}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
</>
  )
}

export default SingleBlog