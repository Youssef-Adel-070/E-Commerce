import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react' 
import * as yup from '../../../node_modules/yup'  
import { Link, useNavigate } from 'react-router-dom' 
import axios from '../../../node_modules/axios'
import { Authcontext } from '../Context/Authcontext'

export default function Login() {  

let[isloading,setisloading]=useState(false)   
 let[Msg,setMsg]= useState(null) 
 let[sucessMsg,setSucessMsg]= useState(null) 
 let navigate=useNavigate(); 
 let{token,setToken}=useContext(Authcontext)

  const validationSchema  =yup.object().shape({ 
      email: yup.string().required("email is reuired"),
      password: yup.string().required().min(3,"min nuber is 3 digits")
    })

async function login(values) { 
 setMsg(null)
 setSucessMsg(null)
  setisloading(true) 

 try {
  const res=  await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)  
  setSucessMsg(res.data.message) 
  console.log(res); 
  setToken(res.data.token) 
  localStorage.setItem('token',res.data.token)
  navigate('/')
 
 } catch (error) {
 setMsg(error.response.data.message)
  
 }finally{ 
  setisloading(false)
 }
 
} 



  const Formik=useFormik({ 

    initialValues:{
    email:'',
    password:'' 
    },  
    onSubmit:login,
    validationSchema

  })



  return <> 
  <form className="max-w-md mx-auto my-3"onSubmit={Formik.handleSubmit} >


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
  </div>  
  {Formik.errors.email&&Formik.touched.email?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{Formik.errors.email}
  </div>:null}
 
  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={Formik.handleBlur} onChange={Formik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Password</label>
  </div>  
  {Formik.errors.password&&Formik.touched.password?<div className='p-4 mb-4 text-red-400 text-sm'><span className='font-medium'>danger alert</span>{Formik.errors.password}
  </div>:null}
 
  <Link to={'/forgotPassword'}> 
  <div className='p-1 my-2'> 
    <span className='text-lg underline text-sky-500'>Forget Password</span>
    </div> 
  </Link> 

  <button  type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isloading?"isloading....":"submit"}</button>
  {Msg?<div>{Msg}</div>:null}
  {sucessMsg?<div>{sucessMsg}</div>:null}

</form>

  </>
    
}
