import { Box, IconButton, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { useState } from 'react';

const SpecialProductList = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const totalProducts = 20;
  // const totalPages = Math.ceil(totalProducts / cardsPerPage);

  const handleNext = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex + cardsPerPage < totalProducts
        ? prevStartIndex + cardsPerPage
        : prevStartIndex
    );
  };

  const handlePrevious = () => {
    setStartIndex((prevStartIndex) =>
      prevStartIndex - cardsPerPage >= 0
        ? prevStartIndex - cardsPerPage
        : prevStartIndex
    );
  };

  const renderProductCards = () => {
    return (
      <>
        {Array.from({ length: cardsPerPage }).map((_, index) => (
          <div
            key={startIndex + index}
            style={{
              width: '300px',
              height: '300px',
              backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random background color
              margin: '10px',
            }}
          ></div>
        ))}
      </>
    );
  };
  
  
  return (
    <Box>
      <Flex justify="center" mb="4">
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={handlePrevious}
          disabled={startIndex === 0}
          mr="2"
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= totalProducts}
          ml="2"
        />
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
        {renderProductCards()}
      </Flex>
    </Box>
  );
};

export default SpecialProductList;
