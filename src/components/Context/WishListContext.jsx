import axios, { all } from 'axios'
import React, { createContext, useState } from 'react' 
import toast, { ToastBar } from 'react-hot-toast'

 

 export const WishListContext =createContext() 

export default function WishListContextProvider({children}) {  
  
    const[AllWishItems,setAllWishItems]=useState([])
    const[NumWishItems,setNumWishItems]=useState()  


   async function addWishList(id) { 
    try {
        
        const res= await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:id},{
            headers:{ 
                token:localStorage.getItem('token')
            }
        }) 
        console.log(res);  
       if (res.data.status=="success") { 
        toast.success('Added to your wishlist' )
        setNumWishItems(res.data.data.length) 
       }
       
    } catch (error) {
        console.log(error,"errror"); 
        toast.error('Invalid added to your wishlist' )
        
    }
        
    }

   async function getAllWishList() { 
    try {
        
        const res= await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{
            headers:{ 
                token:localStorage.getItem('token')
            }
        })  
        console.log(res); 
        if (res.data.status=="success") {
            setAllWishItems(res.data.data)  
            console.log(res.data.count);
            
            
            
        }  
        
    } catch (error) {
        console.log(error,"errror");
    }
        
        
    } 
   async function removeWish(id) { 
    try {
        
        const res= await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
            headers:{ 
                token:localStorage.getItem('token')
            }
        })  
        console.log(res); 
        if (res?.data.status=="success") {
        setNumWishItems(res?.data.data.length) 
        setAllWishItems(res?.data.data)  
           
            
            
            
        }  
        
    } catch (error) {
        console.log(error,"errror");
    }
        
        
    } 



  return <> 

<WishListContext.Provider value={{addWishList,getAllWishList,AllWishItems,NumWishItems ,removeWish}}> 
    {children}
</WishListContext.Provider>
</>
}
