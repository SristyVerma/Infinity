import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Flex alignItems="center" justifyContent="center" w={'50%'} margin={'auto'}  mt={2} >
      <Box flex="1">
        <InputGroup >
          <Input
            type="text"
            placeholder="Search..."
            borderRadius="md"
            py={2}
            px={4}
            borderColor={'primary.200'}
            color={'primary.50'}
            variant='outline'
           
          />
          <InputRightElement  >
            <IconButton
            backgroundColor={'primary.200'}
           
              icon={<SearchIcon  />}
              variant="ghost"
              aria-label="Search"
              size="md"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default SearchBar;
