import React from 'react'
import useCategories from '../Hooks/useCategories'
import { Link } from 'react-router-dom';

export default function Categories() { 

  let{categories}=useCategories() 
  console.log(categories);
  
  return <> 
  <div className="grid grid-cols-3 gap-4 my-4" >
    
    {  
      categories?.map((category)=>{  
          return <>
          <Link to={`/categoryDetails/${category._id}`}>
          <div key={category._id} className=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
  <div>
    <img className="rounded-t-lg w-full h-[300px] border-[1px] border-gray-300" src={category.image} alt="img" />
  </div>
  <div className="p-5">
    <div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{category.name}</h2>
    </div>
  
  </div>
</div>
          </Link>  
          </>
          
      })

    }
     </div>
  
  
  </>
}
