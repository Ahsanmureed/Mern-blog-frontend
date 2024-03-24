import React, { useContext, useState } from "react";
import axios from "axios"
import { MdDelete } from "react-icons/md";
import {UserContext} from "../context/UserContext"
const Comment = ({ c }) => {
  const handleDelete= async()=>{
    await axios.delete("https://mern-blog-2gmm.vercel.app/api/v1/comment/"+c._id,{withCredentials:true})
    window.location.reload(true);
  }
  const {user}= useContext(UserContext)
  return (
    <div >
      <div className="mt-6 mb-2 ">
        <div className="bg-gray-300 rounded-md px-3 py-2 ">
          <div className="  flex items-center justify-between">
            <h3>@{c.author}</h3>
            <h5>TimeStamp</h5>
          </div>
          <div className="flex items-center justify-between">
          <h2 className="mt-3">{c.comment}</h2>
         {user?._id === c.userId?  <MdDelete onClick={handleDelete} className=" text-[21px] cursor-pointer" />:""}
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Comment;
