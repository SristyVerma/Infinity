import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
import { FaStar , FaShare} from 'react-icons/fa';
import ReactImageZoom from 'react-image-zoom';
import Color from '../Components/Color'
const SingleProductDetail = () => {
  const props = {width: 200, height: 200, marginLeft:0,paddingLeft:0, zIndex:1000, zoomWidth: 400, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"};
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  
  return (
   <>
      <Box width={['100%', '80%']} margin='auto' display='flex' alignItems='center' justifyContent='center' overflow={'hidden'}>
      <Flex  width={['100%', '80%']} margin='auto' display='flex' alignItems='center' justifyContent='center'>
        {/* First Column */}
        <Box flex="0 0 50%"  padding={['2px', '30px']} overflow={'hidden'}>
          <Flex direction="column" >
            {/* First Row */}
            <Flex  margin='auto' >
              {/* <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="100%" height="50vh" objectFit="cover" alt='singlep1'/> */}
              <Flex display={['none','block']} ><ReactImageZoom {...props}  /></Flex>
              
              <Image  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" flex="0 0 50%" objectFit="cover" alt="imagep3" w='170px' h='170px'display={['block','none']}/>
            
            </Flex>
            {/* Second Row */}
            <Flex display={['grid','flex']} alignItems='center' justifyContent='center' padding='20px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px'>
              <Image src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" flex="0 0 50%" objectFit="cover" alt="imagep3" w='170px' h='170px'/>
              <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" flex="0 0 50%" objectFit="cover" alt='singlep3'w='170px' h='170px'/>
            </Flex>
            {/* Third Row */}
            <Flex display={['grid','flex']} alignItems='center' justifyContent='center' padding='20px' boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 12px'>
              <Image src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" flex="0 0 50%" objectFit="cover" alt='singlep4' w='170px' h='170px'/>
              <Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" flex="0 0 50%" objectFit="cover" alt='singlep5' w='170px' h='170px'/>
            </Flex>
          </Flex>
        </Box>

        {/* Second Column */}
        <Box w={"0 0 45%"} p={[1, 4]} margin={[0.2,4]} zIndex={-1000}>
        <h2 >Product Title</h2>
          <Text fontSize={['xs','lg']} fontWeight="bold" mt={2}>
            $99.99
          </Text>
          <Flex align="center" mt={2}>
            <Box as={FaStar} color="yellow.500" />
            <Box as={FaStar} color="yellow.500" />
            <Box as={FaStar} color="yellow.500" />
            <Box as={FaStar} color="yellow.500" />
            <Box as={FaStar} color="gray.300" />
            <Text ml={2}>4.5</Text>
          </Flex>
          <Link href="#" fontWeight="bold" mt={2}>
            Write a Review
          </Link>
          <Text mt={4}>
            <strong>Type:</strong> Product Type
          </Text>
          <Text mt={2}>
            <strong>Brand:</strong> Product Brand
          </Text>
          <Text mt={2}>
            <strong>Categories:</strong> Category 1, Category 2
          </Text>
          <Text mt={2}>
            <strong>Tags:</strong> Tag 1, Tag 2, Tag 3
          </Text>
          <Text mt={2}>
            <strong>Size:</strong> Available Sizes
          </Text>
          <Text mt={2}>
            <strong>Color:</strong> <Color/>
          </Text>
          <Text mt={2} >
            <strong>Quantity:<input type='number' color='black' /></strong> 
          </Text>
          <Box mt={4}>
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
          </Box>
          <Text mt={4}>
            <strong>Shipping &amp; Returns:</strong> Shipping and return policies
          </Text>
          <Text mt={4} display='flex'>
          Share<FaShare/>
          </Text>
        
          <Text mt={2}>
            <strong>Material:</strong> Product Material
          </Text>
          <Text mt={2}>
            <strong>Dimensions:</strong> Product Dimensions
          </Text>
          <Text mt={2}>
            <strong>Care Instructions:</strong> Product Care Instructions
          </Text>
          <button onClick={() => { copyToClipboard("https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80") }}>
  Copy The Product Link
</button>

          {/* Payment Method Container */}
          {/* <Flex mt={4} justify="space-between" align="center">
            <Image src="payment-card-1.png" alt="Payment Card 1" w="40px" />
            <Image src="payment-card-2.png" alt="Payment Card 2" w="40px" />
            <Image src="payment-card-3.png" alt="Payment Card 3" w="40px" />
            <Image src="payment-card-4.png" alt="Payment Card 4" w="40px" />
            {/* Add more payment card images as needed */}
          {/* </Flex> */}
        </Box>
      </Flex>
    </Box>
   
   </>
  )
}

export default SingleProductDetail