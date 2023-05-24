import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,Input,InputGroup,InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  HamburgerIcon,
  SearchIcon,
  CloseIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("primary.200", "primary.200")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w="100%">
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight={900}>Infinity</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to='/'>Home</Link>
              <Link to='/store'>Our Store</Link>
              <Link to='/blog'>Blogs</Link>
              <Link to='/contact'>Contact</Link>
            </HStack>
            <Flex alignItems="center" justifyContent="center"  margin={'auto'}  mt={2} >
      <Box flex="1">
        <InputGroup >
          <Input
            type="text"
            placeholder="Search..."
            borderRadius="md"
            py={2}
            px={4}
            borderColor={'primary.100'}
            background={'primary.100'}
            color={'black'}
            variant='outline'
           focusBorderColor="primary.300"
          />
          <InputRightElement  >
            <IconButton
            backgroundColor={'primary.300'}
           
              icon={<SearchIcon  />}
              variant="ghost"
              aria-label="Search"
              size="md"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
          </HStack>
          <Flex alignItem={"center"}>
            <Flex>
              <Box cursor={"pointer"}>
                <Link to='/wishlist'> <FaHeart size={24} /></Link>
              </Box>
              <Box cursor={"pointer"} ml={2}>
                <Link to='/cart'> <FaShoppingCart size={24} margin-right={5}/></Link>
              </Box>
              <Box cursor={"pointer"} ml={2}>
               <Link to='/compare'><RepeatIcon boxSize={6} mr={2} /></Link> 
              </Box>
            </Flex>
            
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                mr={2}
              >
         
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
              <Link to='/login'>
                <MenuItem>LogIn</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
            <Link to='/'>Home</Link>
              <Link to='/store'>Our Store</Link>
              <Link to='/blogs'>Blogs</Link>
              <Link to='/contact'>Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
