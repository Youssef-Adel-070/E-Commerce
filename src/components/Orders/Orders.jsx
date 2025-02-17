import React, { useContext, useState } from 'react' 
import { Formik, useFormik } from 'formik' 
import * as yup from '../../../node_modules/yup'  
import { CartContext } from '../Context/CartContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



export default function Orders() { 
       
let[Payment,setPayment]=useState() 
const navigate=useNavigate()
 

    const {CartId}=useContext(CartContext)

    function handleSubmit(values) {
        console.log(values);
        
    }   
   
   async function cashFun(values) { 
    try {
        
        console.log("Cash");  
        console.log(values);
        
       const res= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${CartId}`,values,{ 
            headers:{ 
                token:localStorage.getItem("token")
            }
        }) 
        console.log(res); 
        if(res.data.status=="success"){ 
            toast.success("Payment Successfully") 
         navigate("/")
        }
    } catch (error) {
        console.log(error,"CashError"); 
        

        
    }
        
        
    } 

    
   async function visaFun(values) {
        try {
            const res=await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CartId}?url=${window.location.origin}`,values,{ 
                headers:{ 
                    token:localStorage.getItem("token")
                }
               }) 
               console.log(res); 
               window.open(res.data.session.url,"_blank")
               
        } catch (error) {
            console.log(error);
            
        }y
    
    } 

    if (Payment=="Cash") {
        cashFun()
    }else if(Payment=="Visa"){ 
        visaFun()
    }

   const Formik= useFormik( {
    initialValues:{ 
         shippingAddress:{
        details:'',
        phone: '',
        city:''
        }
        }, 
      
        onSubmit:handleSubmit
    } )



  return <> 
   
   <form className="max-w-md mx-auto my-3"onSubmit={Formik.handleSubmit} >


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={Formik.handleBlur} onChange={(e)=>{Formik.setFieldValue("shippingAddress.details",e.target.value) }} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
  </div>  

 
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={Formik.handleBlur} onChange={(e)=>{Formik.setFieldValue("shippingAddress.phone",e.target.value) }} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Phone</label>
  </div>  
 

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={Formik.handleBlur} onChange={(e)=>{Formik.setFieldValue("shippingAddress.city",e.target.value) }} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> City</label>
  </div>  
 


  <button onClick={()=>{setPayment("Cash")}} className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cash</button>
  <button onClick={()=>{setPayment("Visa")}}   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visa</button>


</form>
  
  
  </>
}
