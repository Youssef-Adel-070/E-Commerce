import React, { useContext } from 'react' 
import Logo from '../../assets/images/freshcart-logo.svg' 
import { Link, useNavigate } from 'react-router-dom' 
import { Authcontext } from '../Context/Authcontext'
import { CartContext } from '../Context/CartContext'
import { WishListContext } from '../Context/WishListContext'




export default function Navbar() {
  let{Token,setToken}=useContext(Authcontext)
  let{NumOfCartItems}=useContext(CartContext) 
   const {NumWishItems}=useContext(WishListContext) 
   
   const navigate=useNavigate()
  function logOut() { 
    localStorage.removeItem("token")
    setToken(null);  
navigate("/login")
    
  }
  
  
  return <> 
  <nav className='bg-green-500 flex justify-around p-5'> 
  <div className='mr-2'> 
    <img src={Logo} alt="" />
  </div> 
  <div className="links mx-auto">  
    {Token? <ul className='flex  space-x-4 '> 
      <li><Link to='home'>Home</Link></li>
      <li><Link to='cart'>Cart </Link></li>
      <li><Link to='categories'>Categories</Link></li>
      <li><Link to='brands'>Brands</Link></li>
     
    
    </ul>:null}
   
  </div> 
  <div className="icon  space-x-4 ms-[40%]"> 
   <Link to={'/cart'}>  <i className="fa-solid fa-cart-shopping px-1"> :<span className='text-[15px] px-1 '>{NumOfCartItems}</span></i></Link> 
 <Link to={'/wishList'}> <i className="fa-solid fa-heart px-1 ">: <span>{NumWishItems}</span></i></Link> 
 
  </div>  

  <div className='space-x-4 ms-auto'>  

    {Token?<button onClick={logOut}><i className="fa-solid fa-power-off px-1"></i>LogOut</button>:<> <Link to='login'>Login</Link>
      <Link to='register'>Register</Link> </>}
   
    
  </div>



  </nav>
  
  
  
  
  </>
}
