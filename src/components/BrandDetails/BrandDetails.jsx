import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'   


export default function BrandDetails() { 
    const x=useParams()  
    const BrandId=x.id; 
    console.log(BrandId); 

    async function getBrandItem() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${BrandId}`)
    } 
    const{data}=useQuery({ 
        queryKey:["branditems",BrandId],
        queryFn:getBrandItem
    }) 
    let brand=data?.data.data
    
    
   
    
  return<> 
    <div key={brand?._id} className="grid grid-cols-6  my-3 container mx-auto w-[95%] shadow-xl   bg-white border border-gray-200 rounded-lg  ">
  <div className='col-span-2'>
    <img className="rounded-t-lg w-full" src={ brand?.image} alt="brandimg" />
  </div>
  <div className="p-5  col-span-4">
    <div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{brand?.name}</h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptate iusto quis 
        ut. Earum nihil, reiciendis doloribus commodi facere praesentium eius, dolore ea vero voluptates dolorem,
         aperiam odit dignissimos? Eius consequatur ullam voluptatum optio nulla iure. Qui minima ab quia? Magni qui iusto nemo est distinctio rem architecto quidem itaque?
          Excepturi commodi animi ipsam amet aperiam in
        , ea voluptas deserunt!</p>
    
  </div>
</div>  
   </>
}
