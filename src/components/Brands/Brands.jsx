import axios from 'axios'
import React, { useState } from 'react'
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'   
import { Link } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'


export default function Brands() { 
// let[brandItem,setBrandItem]=useState()
  async function getBrands() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  } 
 const {data,isLoading}= useQuery({ 
    queryKey:"Brands",
    queryFn:getBrands
  }) 
 let brandItem=data?.data.data 
 console.log(brandItem);
 
  
  
  
  return <>
  
  
 {isLoading?<div className='flex justify-center  items-center bg-green-400 h-screen w-full'> <FadeLoader  /></div>:  <div className= ' grid lg:grid-cols-3 md:grid-cols-2 '> 
{brandItem?.map((brand)=>{  
return<> 
<Link to={`/brandDetails/${brand._id}`}>
  <div key={brand._id} className="my-3 container mx-auto w-[95%] shadow-xl   hover:shadow-green-400 bg-white border border-gray-200 rounded-lg  ">
  <div>
    <img className="rounded-t-lg" src={ brand.image} alt="brandimg" />
  </div>
  <div className="p-5">
    <div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand.name}</h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, corrupti?</p>
    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
    </div>
  </div>
</div>  
</Link>

</>

})} 
</div>}

  
  </>
}
