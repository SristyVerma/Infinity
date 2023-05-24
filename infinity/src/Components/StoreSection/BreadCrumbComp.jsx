import {Breadcrumb,BreadcrumbItem,BreadcrumbLink} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import React from 'react'

const BreadCrumbComp = ({title}) => {
  return (
    <div marginTop='10px'><Breadcrumb margin='10px'spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
    <BreadcrumbItem>
      <BreadcrumbLink href='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>{title}</BreadcrumbLink>
    </BreadcrumbItem>
  
   
  </Breadcrumb></div>
  )
}

export default BreadCrumbComp
