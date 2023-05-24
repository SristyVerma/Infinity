import React from 'react'
import './CompareCard.css'
import { FaTimes } from 'react-icons/fa';
import Color from '../Components/Color'
const CompareCard = () => {
  return (
  <>
  <div class="product-container">
  <div class="image-container">
    <img src="https://plus.unsplash.com/premium_photo-1683817397956-b46614758fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="ProductImage" />
    <div class="close-icon">
      {/* <!-- Close icon here --> */}
      <FaTimes size={24} />

    </div>
  </div>
  <div class="details-container">
    <h2>Product Heading</h2>
    <p class="price-tag">$99.99</p>
    <div class="brand-container">
      <p class="brand">Brand:</p>
      <p class="brand-name">Brand Name</p>
    </div>
    <div class="availability-container">
      <p class="brand">Availability:</p>
      <p class="availability-info">In Stock</p>
    </div>
    <div class="availability-container">
    <p class="color">Color:</p>
    <p class="color-info"><Color/></p>
    </div>
    <div class="availability-container">
    <p class="size">Size:</p>
      <p class="size-info">M</p>
    </div>
    
      
      
      
    
  </div>
</div>

  </>
  )
}

export default CompareCard