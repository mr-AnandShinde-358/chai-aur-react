import React from 'react'


import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Home,User,GitHub,githubInfoLoader } from './componets/index.js'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user:userid" element={<User/>}/>
    {/* <Route path="github" element={<GitHub/>}/> */}
    <Route 
    loader={githubInfoLoader}
    path="github" 
    element={<GitHub/>}/>
  </Route>
))

function App() {
  

  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App
