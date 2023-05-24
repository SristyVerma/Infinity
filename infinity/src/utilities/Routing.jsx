import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Store from '../Pages/Store';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import CompareProduct from '../Pages/CompareProduct'
import Cart from '../Pages/Cart';
import WishList from '../Pages/WishList';
import Login from '../Pages/Login';
import About from '../Pages/About';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import SingleProduct from '../Pages/SingleProduct';
import SingleBlog from '../Pages/SingleBlog';
import Checkout from '../Pages/Checkout';

const Routing = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/store" element={<Store/>} />
     <Route path="/blog" element={<Blog/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/compare" element={<CompareProduct/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="/wishlist" element={<WishList/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/forgotpassword" element={<ForgotPassword/>} />
     <Route path="/resetpassword" element={<ResetPassword/>} />
     <Route path="/singleproduct/:id" element={<SingleProduct/>} />
     <Route path="/singleblog/:id" element={<SingleBlog/>} />
     <Route path="/checkout" element={<Checkout/>} />
     

     <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default Routing