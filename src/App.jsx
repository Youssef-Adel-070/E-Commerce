import React from 'react'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Categories from './components/Categories/Categories'
import Error from './components/Error/Error'
import AuthcontextProvider from './components/Context/Authcontext'
import Gurad from './components/Gurad/Gurad'
import AuthGurad from './components/AuthGurad/AuthGurad'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import{QueryClient, QueryClientProvider} from '../node_modules/@tanstack/react-query/src' 
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContextProvider from './components/Context/CartContext' 
import { Toaster } from 'react-hot-toast'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import BrandDetails from './components/BrandDetails/BrandDetails'
import WishList from './components/WishList/WishList'
import WishListContextProvider from './components/Context/WishListContext'
import Orders from './components/Orders/Orders'
import AllOrders from './components/AllOrders/AllOrders'

const routes=createBrowserRouter([ 

  {path:'',element:<Layout/>,children:[ 
    {index:true,element:<Gurad><Home/></Gurad>},
    {path:'home',element:<Gurad><Home/></Gurad>},
    {path:'cart',element:<Gurad><Cart/></Gurad>},
    {path:'allorders',element:<Gurad><AllOrders/></Gurad>},
    {path:'wishList',element:<Gurad><WishList/></Gurad>},
    {path:'orders',element:<Gurad><Orders/></Gurad>},
    {path:'details/:id',element:<Gurad><ProductDetails/></Gurad>},
    {path:'categoryDetails/:id',element:<Gurad><CategoryDetails/></Gurad>},
    {path:'brands',element:<Gurad><Brands/></Gurad>},
    {path:'brandDetails/:id',element:<Gurad><BrandDetails/></Gurad>},
    {path:'categories',element:<Gurad><Categories/></Gurad>},
    {path:'product',element:<Gurad><Products/></Gurad>},
    {path:'Login',element:<AuthGurad><Login/></AuthGurad> },
    {path:'forgotPassword',element:<AuthGurad><ForgotPassword/></AuthGurad> },
    {path:'Register',element:<AuthGurad><Register/></AuthGurad>},
    {path:'*',element:<Error/>},
    
  ]}
]) 

const query= new QueryClient()
export default function App() {
    return <>  
  <AuthcontextProvider> 

 <CartContextProvider>   

  <WishListContextProvider>
 <QueryClientProvider client={query}>

<RouterProvider router={routes}/> 
<Toaster position="bottom-right" />
 </QueryClientProvider> 
 </WishListContextProvider>


 </CartContextProvider>

  </AuthcontextProvider> 

  
  
  </>
}
