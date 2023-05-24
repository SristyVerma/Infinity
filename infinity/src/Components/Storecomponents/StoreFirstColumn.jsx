import React from 'react'
import './SoreFirstColumn.css'
import ReactStars from "react-rating-stars-component";
import Color from '../Color';

const StoreFirstColumn = () => {
  return (
   <>

   <div className='filter'>
    <h1 className='title'>Shop by Categories</h1>
    <div>
        <ul>Watch</ul>
        <ul>TV</ul>
        <ul>Camera</ul>
        <ul>Laptop</ul>
    </div>
   </div>
   <div className='filter'>
    <h1 className='title'>Filter By</h1>
    <h5 className="subtitle">Availabilty</h5>
    <div className="form-check">
        <input type="checkbox" value='' id='' />
        <label htmlFor="">In Stock[1]</label>
    </div>
    
    <div className="form-check">
        <input type="checkbox" value='' id='' />
        <label htmlFor="">Out of Stock[0]</label>
    </div>
    <h5 className="subtitle">Price</h5>
    <div className='formpricecont'>
    <div className='form-check'>
    <label for="fromprice">From:</label>
<input type="text" id="fromprice" name="fromprice"/>

    </div>
    <div className='form-check'>
    <label for="toprice">To:</label>
<input type="text" id="toprice" name="toprice"/>

    </div></div>
    <h5 className="subtitle">Colors</h5>
   
    <Color/>
    <h5 className="subtitle">Size</h5>
    <div className="form-check">
        <input type="checkbox" value='' id='sizes' />
        <label htmlFor="sizes">s[1]</label>
    </div>
    <div className="form-check">
        <input type="checkbox" value='' id='sizem' />
        <label htmlFor="sizem">m[1]</label>
    </div>
   
    
   </div>
   <div className='filter'>
    <h1 className='title'>Product Tags</h1>
    <div className='product-tag'>
        <span>Samsung</span>
        <span>Nokia</span>
        <span>Pixel</span>
        <span>Blackberry</span>
    </div>
   </div>
   <div className='filter'>
    <h1 className='title'>Random Products</h1>
    <div class="containerrandom">
  <div class="column1random">
    <img src="https://images.unsplash.com/photo-1684029621162-1705b37b51b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60" alt="Imagefirst"/>
  </div>
  <div class="column2random">
    <h2>Product Heading</h2>
    <div class="ratingrandom">
    <ReactStars
    count={5}
  value='3'
    size={24}
    edit='false'
    activeColor="#ffd700"
  />
    </div>
    <p>$99.99</p>
  </div>
</div>
    <div class="containerrandom">
  <div class="column1random">
    <img src="https://images.unsplash.com/photo-1684029621162-1705b37b51b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60" alt="Imagefirst"/>
  </div>
  <div class="column2random">
    <h2>Product Heading</h2>
    <div class="ratingrandom">
    <ReactStars
    count={5}
  value='3'
    size={10}
    edit='false'
    activeColor="#ffd700"
  />
    </div>
    <p>$99.99</p>
  </div>
</div>

   </div>

   </>
  )
}

export default StoreFirstColumn