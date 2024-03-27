import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { UserContext } from '../context/UserContext'
const Profile = () => {
  const [username,setUsername]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const {user}= useContext(UserContext)
  const fetchUser = async ()=>{
   try {
    const res=await axios.get("https://mern-blog-backend-chi-gray.vercel.app/api/v1/user/"+user._id,{withCredentials:true})
    setUsername(res.data.user.username)
    setEmail(res.data.user.email)
    setPassword(res.data.user.password)
   } catch (error) {
    
   }
  }
  const handleSunmit = async(e)=>{
    e.preventDefault();
    const res = await axios.put("https://mern-blog-backend-chi-gray.vercel.app/api/v1/user/"+user._id,{username,email,password},{withCredentials:true})
  }
  useEffect(()=>{
fetchUser()
  },[user])
  return (
    <div className=' mt-48 flex  items-center justify-center '>
      <form className=' flex flex-col gap-1 w-[80vw] md:w-[28vw]'>
        <label htmlFor="username">Username:</label>
        <input onChange={(e)=>setUsername(e.target.value)} value={username} className=' border-2 rounded-md outline-none' type="text"  />
        <label htmlFor="email">Email:</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className=' border-2 rounded-md outline-none' type="text" />
        <label htmlFor="password">Password:</label>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} className=' border-2 rounded-md outline-none' type="password" name="" id="" />
        <button onClick={handleSunmit} type='submit' className=' mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Update</button>
      </form>
    </div>
  )
}

export default Profile