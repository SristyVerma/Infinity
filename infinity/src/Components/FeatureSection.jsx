import { Box, SimpleGrid } from '@chakra-ui/react';
import SpecialProduct from './SpecialProduct';

const  FeatureSection = ({ products }) => {
  return (
    <Box p="4">
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
       <SpecialProduct/>
       <SpecialProduct/>
       <SpecialProduct/>
      </SimpleGrid>
    </Box>
  );
};

export default FeatureSection
