import axios from 'axios';
import React, { useEffect, useState } from 'react' 
import { jwtDecode } from "jwt-decode"; 
import { FadeLoader } from '../../../node_modules/react-spinners' 


export default function AllOrders() {    
 
   const[Orders,setOrders] =useState()
   const[Items,setItems] =useState()
   const[Loading,setLoading] =useState()
const id=localStorage.getItem("token") 
console.log(id);  
const decoded = jwtDecode(id); 
console.log(decoded);



   
    async function getOrders() { 

        try { 
            setLoading(true)
            const res=await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`) 
               console.log(res);  
               setOrders(res.data)  
               setItems(res.data.cartItems) 
            console.log(Orders);
            
               
               
               
               
        } catch (error) {
            console.log(error);
            
        }finally{ 
            setLoading(false)
        } 

    
    }  

    useEffect(()=>{getOrders()},[]) 

  return <> 
  
  {Loading?<div className='flex justify-center  items-center bg-green-400 h-screen w-full'> <FadeLoader  /></div>:<div className="container mx-auto  " >

<div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
{Orders?.map((ord)=>{   
    return <>
   {  ord.cartItems?.map((it)=>{

return <>  
    <div className=" card mb-4 w-full h-full border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700"> 
<div className='cardImg overflow-hidden'>
    <img className="p-8 rounded-t-lg w-full h-[400px] hover:scale-[1.2]" src={it?.product.imageCover} alt="product image" />
</div> 

<div className="cardContent h-auto px-5 pb-5 "> 

    <div>
        <h5 className="text-2xl  font-semibold tracking-tight text-green-500 dark:text-white p-3">{it?.product.title}</h5> 
    </div> 

    <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{it?.price}$</span>
    </div>
</div> 


</div> 





</>
}) 
}
    
 </> 


})}
</div>
</div>}

  
  </>
}
