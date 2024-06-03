import React from 'react'

const Post = ({blogs}) => {
  

  return (
    <div className=' flex gap-4 mb-3 mt-7 px-[3px] md:px-7 border-2 p-4 rounded-md  '>
      <img className= ' w-[33%] md:w-[25%] md:h-[5%]   object-cover ' src={blogs.photo} alt="" />
      <div>
        <h1 className='text-2xl mb-2  font-bold'>{blogs.title} </h1>
        <div className='flex items-center  justify-between space-x-8 md:space-x-80'>
        <h1 className=' font-semibold mb-2'>@{blogs?.userId?.username}</h1>
        <div className='flex mb-2 gap-4'>
        <p>{new Date(blogs.createdAt).toString().slice(0,15)}</p>
       <p className='hidden md:block'>{new Date(blogs.createdAt).toString().slice(16,24)}</p>
        </div>
        </div>
        <p className=' w-[100%]'>{blogs.description.slice(0,200)+" ...Read more"} </p>
      </div>
    </div>
  )
}

export default Post
