import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'
import Home from './components/Home'
import PostDetail from './components/PostDetail'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'
import UserBlog from './components/UserBlog'
import Profile from './components/Profile'
import { useContext } from 'react'

import { UserContext } from './context/UserContext'
import Footer from './components/Footer'

const App = () => {
  const {user}= useContext(UserContext)
  
  return (
<>

<NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={user?<Profile/>:<Login/>}/>
      <Route path='/profile/:id' element={!user?<Login/>:<Profile/>}/>
      <Route path='/register' element={!user?<Register/>:<Profile/>}/>
      <Route path='/post/:id' element={<PostDetail/>}/>
      <Route path='/create' element={!user?<Login/>:<CreatePost/>}/>
      <Route path='/edit/:id' element={!user?<Login/>:<EditPost/>}/>
      <Route path='/my-blog/:id' element={!user?<Login/>:<UserBlog/>}/>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
