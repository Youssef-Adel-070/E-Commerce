import axios from 'axios'
import React, { createContext, useState } from 'react'
import toast, { ToastBar } from 'react-hot-toast'
 




export const CartContext=createContext()  


export default function CartContextProvider({children}) {  

    const[NumOfCartItems,setNumOfCartItems]=useState()  
    const[AllCartItems,setAllCartItems]=useState([])  
    const[TotalPrice,setTotalPrice]=useState()  
    const[CartId,setCartId]=useState()  
    
    async function addToCard(id) { 

        try {
            
            const res= await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:id},{ 
               headers:{ 
                   token:localStorage.getItem('token')
               }
            }) 
           
             
            console.log(res);
            if (res.data.status=="success") {
                toast.success("Product added successfully")
                setNumOfCartItems(res.data.numOfCartItems) 
                
            }
        } catch (error) { 
            toast.error("Error Happen Invaild Added")
            console.log(error,"errorr");
            
        }
        
        
    }
    async function getCardItems() { 

        try {
            
            const res= await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{ 
               headers:{ 
                   token:localStorage.getItem('token')
               }
            }) 
           
            console.log(res);  
            if (res.data.status=="success") {
                setAllCartItems(res.data.data.products) 
                setTotalPrice(res?.data.data.totalCartPrice) 
 
                console.log(res.data.cartId,"carddddc"); 

                 
                setCartId(res.data.cartId) 
            }

        } catch (error) { 
            
            console.log(error,"errorr");
            
        }
     
        
    }
    async function updateItemCount(id,count) { 

        try {
            
            const res= await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},{ 
               headers:{ 
                   token:localStorage.getItem('token')
               }
            }) 
           
            console.log(res);  
            if (res.data.status=="success") {
                setAllCartItems(res.data.data.products) 
                setTotalPrice(res.data.data.totalCartPrice) 

            }

        } catch (error) { 
            
            console.log(error,"errorr");
            
        }
     
        
    }
    async function deleteItem(id) { 

        try {
            
            const res= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{ 
               headers:{ 
                   token:localStorage.getItem('token')
               }
            }) 
           
            console.log(res);  
            if (res.data.status=="success") {
                setAllCartItems(res.data.data.products) 
                setTotalPrice(res.data.data.totalCartPrice)  
                setNumOfCartItems(res.data.numOfCartItems) 

            }

        } catch (error) { 
            
            console.log(error,"errorr");
            
        }
     
        
    }
    async function clearAll() { 

        try {
            
            const res= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{ 
               headers:{ 
                   token:localStorage.getItem('token')
               }
            }) 
           
            console.log(res);  
            if (res.data.message=="success") {
                setAllCartItems(null) 
                setTotalPrice(0)  
                setNumOfCartItems(null) 

            }

        } catch (error) { 
            
            console.log(error,"errorr");
            
        }
     
        
    }

  return <> 
  
  <CartContext.Provider value={{addToCard,NumOfCartItems,getCardItems,AllCartItems,CartId,updateItemCount,TotalPrice,clearAll ,deleteItem}}> 

    {children}
  </CartContext.Provider>
  
  
  
  </>
}
