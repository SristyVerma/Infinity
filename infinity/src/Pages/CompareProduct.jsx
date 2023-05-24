import React from 'react'
import BreadCrumbComp from '../Components/StoreSection/BreadCrumbComp';
import Meta from '../Components/Meta';
import CompareCard from '../Components/CompareCard';
import './Styles/CompareProduct.css'

const CompareProduct = () => {
  return (
    <>
      <Meta title='Compare Product'/>
      <BreadCrumbComp title="Compare-Product" />
      <div className='compare-main-container'>
<CompareCard/>
<CompareCard/>
<CompareCard/>
<CompareCard/>

      </div>
    </>
  )
}

export default CompareProduct