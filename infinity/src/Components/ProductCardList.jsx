import { Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';

const ProductCardList = () => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
      gap={4}
      px={[4, 8, 16]}
      py={8}
      maxW="1200px"
      mx="auto"
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Grid>
  );
};

export default ProductCardList;
