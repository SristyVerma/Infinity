import React from 'react'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Button,
} from '@chakra-ui/react';
const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 9.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Product 1',
      price: 9.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    // Add more cart items as needed
  ];

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
   <>
   <Meta title='cart'/>
      <BreadCrumbComp title="Cart" />
     
      <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Box display="flex" alignItems="center">
                  <Image src={item.image} alt={item.name} boxSize="50px" mr={2} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>Description</p>
                  </div>
                </Box>
              </Td>
              <Td>${item.price.toFixed(2)}</Td>
              <Td>{item.quantity}</Td>
              <Td>${(item.price * item.quantity).toFixed(2)}</Td>
              <Td>
                <Button colorScheme="red" size="sm">
                  Remove
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box display="flex" justifyContent="flex-end" mt={4}>
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
      </Box>
      <Link to='/checkout'>

      <Button colorScheme="blue" mt={4}>
        Proceed to Checkout
      </Button>
      </Link>
     
    </Box>


   </>
  )
}

export default Cart