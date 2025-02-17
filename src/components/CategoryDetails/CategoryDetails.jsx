import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'   


export default function CategoryDetails() { 

    const pass=useParams() 
    console.log(pass.id);   
 

   async function getCategoryDetails() { 
      return await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${pass.id}`) 

    } 
   const{data}=useQuery({ 
    queryKey:["categoryitem",pass.id],
    queryFn:getCategoryDetails,
    cacheTime:0,
   }) 
   let categoryItem=data?.data.data 
   console.log(categoryItem);
   
   
    
  return <>
   
    <div className="grid grid-cols-6" key={categoryItem?._id}> 
    <div className="col-span-2" > 
         <img src={categoryItem?.image} alt="" />
    </div> 
    
    <div className="col-span-4 p-5 text-xl " >  
    <h2>{categoryItem?.name}</h2>
    </div>
  </div> 
  
  
  </>
}
