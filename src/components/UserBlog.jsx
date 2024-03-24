import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from "axios"
import Post from './Post';
import { Link, useLocation } from "react-router-dom"
import Loader from './Loader';
const UserBlog = () => {
    const {search}=useLocation()
    const [post,setPost]= useState([])
    const [noResults,setNoResults]=useState(false)
    const [loader,setLoader]=useState(false)
    const {user}= useContext(UserContext)
    const fetchPosts = async()=>{
        setLoader(true)
        try {
            const res = await axios.get("https://mern-blog-2gmm.vercel.app/api/v1/blog/user/"+user._id)
            setPost(res.data.userBlogs)
            if(res.data.userBlogs.length===0){
                setNoResults(true)
              }
              else{
                setNoResults(false)
              }
            setLoader(false)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
fetchPosts();
    },[search])
    
  return (
    <div>
        {loader?<div className="h-[80vh] flex justify-center items-center w-full"><Loader/></div>:!noResults?<div className=' mt-24'>
        {post?.map((blog)=>(
            <Link to={`/post/${blog._id}`}><Post key={blog._id} blogs={blog}/></Link>
        ))}
    </div>:<h1>No Posts Avaliable</h1>}
    </div>
  )
}

export default UserBlog