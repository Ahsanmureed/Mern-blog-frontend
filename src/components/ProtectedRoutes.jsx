

import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import LoaderLoader from "./LoaderLoader";
export default function PrivateRoute({children}) {
 const {user}= useContext(UserContext)
console.log(user);
 
    
  return user !== null? children : <div className=' h-[70vh] flex justify-center items-center'><LoaderLoader/></div>
   
}

