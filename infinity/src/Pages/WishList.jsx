import React from 'react'
import './Styles/WishList.css'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp';
import Meta from '../Components/Meta';
import WishListCard from '../Components/WishListCard/WishListCard'
const WishList = () => {
  return (
    <>
      <Meta title='WishList'/>
      <BreadCrumbComp title="WishList" />
      <div className='card-container'>
        <div className='card'><WishListCard/></div>
        <div className='card'><WishListCard/></div>
        <div className='card'><WishListCard/></div>
      </div>


      
    </>
  )
}

export default WishList