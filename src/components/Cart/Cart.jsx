import React, { useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart() { 
  const {getCardItems,clearAll,AllCartItems,updateItemCount ,TotalPrice,deleteItem}=useContext(CartContext)   


  useEffect(()=>{ 
    getCardItems() 
    console.log(AllCartItems);
    
  },[])
  return <>
  
  
  

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
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
      {AllCartItems.map((item)=>{ 
         return <>
         <tr key={item.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="p-4">
            <img src={item.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {item.product.brand.name}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <button disabled={item.count==1} onClick={()=>{
                updateItemCount(item.product.id,item.count-1)
              }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                </svg>
              </button>
              <div> 
                <span>{item.count}</span>
              </div>
              <button onClick={()=>{
                updateItemCount(item.product.id,item.count+1)
              }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            ${item.price}
          </td>
          <td className="px-6 py-4">
            <a onClick={()=>{
              deleteItem(item.product.id)
            }} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
          </td> 
         

        </tr> 
        
         
         </>
      })}
     <tr> 
          <td className="px-6 py-4">  
          <h2 className='font-medium text-xl '>Total Price: <span className=''>{TotalPrice}</span></h2>
          </td>  
          <td > 
           <Link to={"/orders"}> <button className="text-white mx-2 bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> OrderPay </button></Link> 
            <button onClick={clearAll} className="text-white mx-2 bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[16px] w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> ClearAll </button>
           
          </td>
          </tr> 
    </tbody>
  </table>
</div>


  
  </>
}

