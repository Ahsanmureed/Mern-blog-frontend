import axios from "axios";
import { createContext,useEffect,useState } from "react";
export const UserContext =createContext({});
export function UserContextProvider({children}){
const [user,setUser] = useState(null);
useEffect(()=>{
  getUser()
},user)
const getUser = async ()=>{
  try {
    const res = await axios.get("https://mern-blog-backend-chi-gray.vercel.app/api/v1/auth/refetch",{withCredentials:true})
    
    setUser(res.data)
  } catch (error) {
    
  }
}
return (<UserContext.Provider value={{user,setUser}}>
{children}</UserContext.Provider>)
}