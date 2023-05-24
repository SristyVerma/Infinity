import { Box, Flex, Image, Text,Button } from '@chakra-ui/react';
import ReactStars from "react-rating-stars-component";
const SpecialProduct = () => {
  return (
    <Box width="300px" height="250px" display="flex" flexDirection="row"  boxShadow="xl" >
      {/* First column */}
      <Flex flexBasis="50%" flexDirection="column">
        {/* First row */}
        <Box flexBasis="70%">
          <Image
            src="https://images.unsplash.com/photo-1684255786802-f8ef612b7e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="ProductImage"
            objectFit="cover"
            height="100%"
          />
        </Box>
        {/* Second row */}
        <Flex flexBasis="30%" flexDirection="row">
          <Box flexBasis="50%">
            <Image src="https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Image 1" height="100%" />
          </Box>
          <Box flexBasis="50%">
            <Image src="https://images.unsplash.com/photo-1684177790083-588f48f38c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Image 2" height="100%" />
          </Box>
        </Flex>
      </Flex>

      {/* Second column */}
      <Flex flexBasis="70%" flexDirection="column" gap={2} pl="2">
        <Text fontWeight="bold" fontSize={'15px'}>Sony</Text>
        <Text fontSize={'12px'} fontWeight={"bold"} w='100%'>Samsung pro max redmi lg washing machine jsjn jjk</Text>
        <Flex align="center" mb={0}>
        <ReactStars
    count={5}
  value='3'
    size={24}
    edit='false'
    activeColor="#ffd700"
  />
        </Flex>
        <Text fontSize={'12px'} mt={0}>Price</Text>
        <Box mt='0'>
          <label htmlFor="purchase-slider" fontSize='10px'>Purchase Slider:</label>
          <input type="range" id="purchase-slider" min="1" max="100" />
        </Box>
        <Button colorScheme="blue" mt="2">
      Option
    </Button>
      </Flex>
    </Box>
  );
};

export default SpecialProduct;
