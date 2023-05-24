import React from 'react'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp';
import Meta from '../Components/Meta';
import {
    Box,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Button,Divider 
  } from '@chakra-ui/react';
  
  
  
const Checkout = () => {
  
        // const handleSubmit = (e) => {
        //   e.preventDefault();
        //   // Handle form submission logic here
        // }
  return (
    <>
     <Meta title='Checout'/>
      <BreadCrumbComp title="Checkout" />
      <Box maxW="600px" mx="auto" p={4}>
      <Heading as="h1" mb={4}>Checkout</Heading>

      <Box boxShadow="md" p={4} mb={4}>
        <Heading as="h2" size="lg" mb={2}>Billing Information</Heading>
        <FormControl mb={4}>
          <FormLabel>Full Name</FormLabel>
          <Input type="text" placeholder="Enter your full name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Address</FormLabel>
          <Input type="text" placeholder="Enter your address" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>City</FormLabel>
          <Input type="text" placeholder="Enter your city" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Postal Code</FormLabel>
          <Input type="text" placeholder="Enter your postal code" />
        </FormControl>
      </Box>

      <Box boxShadow="md" p={4} mb={4}>
        <Heading as="h2" size="lg" mb={2}>Payment Information</Heading>
        <FormControl mb={4}>
          <FormLabel>Card Number</FormLabel>
          <Input type="text" placeholder="Enter your card number" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Expiration Date</FormLabel>
          <Input type="text" placeholder="MM/YY" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CVC</FormLabel>
          <Input type="text" placeholder="Enter the CVC code" />
        </FormControl>
      </Box>

      <Divider my={4} />

      <Box textAlign="right">
        <Text fontSize="lg" fontWeight="bold" mb={2}>Total: $99.99</Text>
        <Button colorScheme="blue">Place Order</Button>
      </Box>
    </Box>
    </>
  )
}

export default Checkout