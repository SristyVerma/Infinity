import { Box, Image, Flex, Text, Badge, IconButton } from '@chakra-ui/react';
import {  AddIcon, RepeatIcon } from '@chakra-ui/icons';
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import {Link} from 'react-router-dom'
const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const getImageSource = () => {
    if (isHovered) {
      return 'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'; // Replace with the URL or path of the hover image
    }
    return 'https://images.unsplash.com/photo-1684230415060-c59210cd5666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="ProductImage'; // Replace with the URL or path of the default image
  };
  return (
 
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxWidth={['100%', '100%', '100%']}
      
      mx="auto"
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <Box position="relative" w='100%'>
      <Link to='/singleproduct/:id'><Image src={getImageSource()} alt="Product Image" w="100%" 
      h='200px'
    //   'transition="transform 0.3s" 
    //   _hover={{ transform: 'scale(1.2)' }}
       /></Link>
        {isHovered && (
          <Flex
            position="absolute"
            top="7"
            right="2.5"
            _hover={{ transform: 'scale(1.2)' }}
            m="0"
            mb='0'
            direction="column"
            align="flex-end"
          >
            <IconButton
              icon={<RepeatIcon />}
              aria-label="Repeat"
              variant="ghost"
              mb='2.5'
              mt='2.5'
              
              size='s'
           
            />
            <IconButton
            size='s'
              icon={<RepeatIcon />}
              aria-label="Repeat"
              variant="ghost"
              mb='2.5'
          
            />
            <IconButton
            size='s'
              icon={<AddIcon />}
              aria-label="Add to cart"
              variant="ghost"
              mb="0.5"
            />
            {/* Add more icons as needed */}
          </Flex>
        )}
        <Badge
          position="absolute"
          top="0"
          left="0"
          m={['2', '2', '4']}
          fontSize="0.8rem"
          colorScheme="red"
        >
          Discount
        </Badge>
        <IconButton
          position="absolute"
          top="2.5"
          right="2.5"
          
          mb='2.5'
          size='s'
          icon={<AddIcon />}
          aria-label="Add to wishlist"
          variant="ghost"
        />
      </Box>
     
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold">
          Brand Name
        </Text>
        <Text fontSize="sm" mt="1" mb="2">
          Description Heading
        </Text>
        <Flex align="center" mb="2">
        <ReactStars
    count={5}
  value='3'
    size={24}
    edit='false'
    activeColor="#ffd700"
  />
        </Flex>
        <Text fontSize="lg" fontWeight="bold">
          $99.99
        </Text>
      </Box>
    </Box> 
  );
};

export default ProductCard;

