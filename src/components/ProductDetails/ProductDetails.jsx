import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import useSpecificProduct from '../Hooks/useSpecificProduct'; 
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'   
import { CartContext } from '../Context/CartContext';


export default function ProductDetails() { 

  const x= useParams(); 

  const {addToCard}=useContext(CartContext)
  
  async function getProductDetails() {
   return await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`); 
  }  
  const{data}=useQuery({ 
    queryKey:['details',x.id],
    queryFn:getProductDetails
  })

 let detailsProduct=data?.data.data; 
console.log(detailsProduct);

let imageNum=detailsProduct?.images;



 
  

  return <>
  { <div className="grid grid-cols-6" key={detailsProduct?.id}> 
    <div className="col-span-2 border border-green-300 border-[5px] p-3  my-4" > 
    <Swiper loop={true}>  
      
       <SwiperSlide><img src={detailsProduct?.imageCover} className='shadow-2xl w-full ' alt="" /></SwiperSlide> 
       { 
        imageNum?.map((img)=>{  
         return <>
         <SwiperSlide><img src={img} alt=""  /></SwiperSlide>
         
         </>
          

        })
       }

       
      
      </Swiper>      
    </div> 
    
    <div className="col-span-4 p-8 text-3xl m-3" >  
      <h2 className='p-2  text-green-500'>{detailsProduct?.title}</h2> 
      <p className='py-3 text-xl'>{detailsProduct?.description}</p> 
      <span className='text-2xl'>{detailsProduct?.price} $</span> 
      <button  onClick={()=>{ 
        addToCard(detailsProduct?.id)
      }} className='bg-green-500 rounded-lg hover:text-white shadow-xl hover:shadow-green-400 text-lg p-3 my-3 block'>ADD TO CARD</button>
    </div>
  </div> }
  
  
  </>
}
