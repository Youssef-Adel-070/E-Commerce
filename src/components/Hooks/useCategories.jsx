import React from 'react' 
import{ useQuery} from '../../../node_modules/@tanstack/react-query/src'  
import axios from 'axios'  


export default function useCategories() { 
 
    async function getCategory() {
        return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
       } 
       let{data:Allcat}=useQuery({ 
        queryKey:"AllCategories",
        queryFn:getCategory,
       })
       
       const  categories=Allcat?.data.data 
       



  return{categories}
}
