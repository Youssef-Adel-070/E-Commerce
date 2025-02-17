import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import axios from 'axios'  
import { FadeLoader } from '../../../node_modules/react-spinners' 
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'   
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
import blogimg1 from '../../assets/images/blog-img-1.jpeg'
import blogimg2 from '../../assets/images/blog-img-2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import useCategories from '../Hooks/useCategories'



export default function Home() {  


 async function getProducts() { 

   return await axios.get('https://ecommerce.routemisr.com/api/v1/products') 
  
   
   
  } 
   let{data,isLoading,isFetching}=useQuery({ 
    queryKey:'allProducts',
    queryFn:getProducts ,
  
    
    
   })  
   const allProductData=data?.data.data 

let{categories}=useCategories()
 
   
  

  return <>     

 <div className="grid grid-cols-6 w-[98%]  container mx-auto my-5"> 
  <div className='col-span-4  bg-red-500 '> 
    <Swiper style={{height:'100%'}} loop={true} >
      <SwiperSlide> 
        <img src={slider1}  className='h-full w-full' alt="Slider img" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src={slider2}  className='h-full w-full' alt="Slider img" />
      </SwiperSlide>
      <SwiperSlide> 
        <img src={slider3} className='h-full w-full' alt="Slider img" />
      </SwiperSlide>
      
      
       </Swiper> 
       
    
    </div> 
  <div className='col-span-2'> 
    <img src={blogimg1}  className='h-1/2' alt="Blog img" />
    <img src={blogimg2} className='h-1/2'  alt="Blog img" />
  </div>
 </div> 
<div className='my-4'>
 <Swiper loop={true} slidesPerView={5} > 
   {categories?.map((category)=>{ 
   return <SwiperSlide className='w-1/2 h-1/2' key={category._id}>
      <img src={category.image} className='w-full h-[200px]' alt=""  /> 
      <div className='text-md font-normal'>{category.name}</div>
 </SwiperSlide>
   })}
</Swiper> 
</div>


{isLoading?<div className='flex justify-center  items-center bg-green-400 h-screen w-full'> <FadeLoader  /></div> :<div className="container mx-auto ">

<div className="grid gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

{allProductData.map((prod)=><ProductCard key={prod._id} product={prod}/>)}
</div>
</div>}
  
  
  
  </>
}
