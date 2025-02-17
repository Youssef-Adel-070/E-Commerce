import { useFormik } from 'formik'
import React, { useState } from 'react' 
import * as yup from '../../../node_modules/yup'  
import { useNavigate } from "react-router" 

import axios from '../../../node_modules/axios'


export default function Register() { 
  let[Msg,setMsg]= useState(true) 
  let[sucessMsg,setSuccessMsg]=useState(null) 
  let[isloading,setisloading]=useState(false)  
  let navigate = useNavigate();
  


  
  const  validationSchema =yup.object().shape({ 
    name: yup.string().required("name is required").min(3,"min 3char"),
    email: yup.string().required("email is required").min(3,"min 3char").email("invalid email"),
    password: yup.string().required("password is required").matches(/^[a-z0-9]{3,20}$/),
    rePassword: yup.string().required("repassword is required").oneOf([yup.ref('password')],"repassword not matche with password"),
    phone: yup.string().required("password is required"),
    
  }) 
   async function register(values) {
    setMsg(null)
    setSuccessMsg(null)
    setisloading(true)
    try {
      const res=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values) 
      
      setSuccessMsg(res.data.message) 
      navigate('/login')
      
   
    
     
      
    } catch (error) {
      
      setMsg(error.response.data.message)
      
    }finally{ 
      setisloading(false)
    }
    
    
  }

  const formik= useFormik( { 
      initialValues:{
        name:'', 
        email:'', 
        password:'', 
        rePassword:'', 
        phone:'', 

      }, 
      onSubmit:register,
      validationSchema
    }) 
  

  return <> 
     
    

<form className="max-w-md mx-auto my-3" onSubmit={formik.handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur}  onChange={formik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div> 
  { formik.errors.name&&formik.touched.name?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{formik.errors.name}
  </div> :null}
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div> 
  { formik.errors.email&&formik.touched.email?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{formik.errors.email}
  </div> :null}
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Password</label>
  </div> 
  { formik.errors.password&&formik.touched.password?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{formik.errors.password}
  </div> :null}
 
  <div className="relative z-0 w-full mb-5 group">
      <input  onBlur={formik.handleBlur}  onChange={formik.handleChange} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> REPassword</label>
  </div> 
  { formik.errors.rePassword&&formik.touched.rePassword?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{formik.errors.rePassword}
  </div> :null}


  <div className="relative z-0 w-full mb-5 group">
      <input onChange={formik.handleChange} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Phone</label>
  </div> 
  { formik.errors.phone&&formik.touched.phone?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{formik.errors.phone}
  </div> :null}


  <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isloading?"isloading....":"submit"}</button>
    {Msg?<div>{Msg}</div>:null}
    {sucessMsg?<div>{sucessMsg}</div>:null}

</form>

  
  
  
  </>
}
