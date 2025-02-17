import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function useSpecificProduct() { 

    let[details,setDetails]= useState()
  const x= useParams();
  
  async function getProductDetails() {
    const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`);  
   console.log(data.data);
   
    
setDetails(data?.data)     
console.log(details);

   
    
   
  }
  useEffect(()=>{ 
    getProductDetails()
  },[]) 
  return {details}
  
  
 
}
