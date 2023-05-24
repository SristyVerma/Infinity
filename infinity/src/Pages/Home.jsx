import React from 'react'
import Categories from '../Components/categories/Categories'
import ImageSlider from '../Components/Homecarousel'
import ReactMarq from '../Components/ReactMarquee/ReactMarq'
import Blog from '../Components/Blog/Blog'
import ProductCardList from '../Components/ProductCardList'
import SpecialProductList from '../Components/SpecialProductList'
import FeatureSection from '../Components/FeatureSection'
const Home = () => {
  return (
   <>

   <ImageSlider/>
   <Categories/>
   <ReactMarq/>
<FeatureSection/>
 <SpecialProductList/>
 <ProductCardList/>
 <Blog/>
   </>
  )
}

export default Home