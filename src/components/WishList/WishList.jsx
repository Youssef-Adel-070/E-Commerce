import React, { useContext, useEffect } from 'react'
import { WishListContext } from '../Context/WishListContext'

export default function WishList() { 
    const {getAllWishList,AllWishItems,removeWish}=useContext(WishListContext) 
    
    
    useEffect(()=>{ 
        getAllWishList() 

    },[])
    
  return <>
  
{AllWishItems.map((item)=>{  
    console.log(AllWishItems);
    

return<> 

<div key={item.id} className=" my-3 relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-green-400 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Brand
        </th>
        <th scope="col" className="px-6 py-3">
         Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={item?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {item.brand?.name}
        </td>
      
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
         {item.category?.name}
        </td>
      
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          ${item?.price}
        </td>
        <td className="px-6 py-4">
          <button onClick={()=>{ removeWish(item?.id)}}  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
        </td>
      </tr>
   
    </tbody>
  </table>
</div>


</>
})}


  
  
  </>
}
