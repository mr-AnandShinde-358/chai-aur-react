import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { About, Contact, Home,User,GitHub,githubInfoLoader } from './componets/index.js'

// You can also do this all functionality on App.js file

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>
//       },
//       {
//         loader:githubInfoLoader,
//         path:"github",
//         element:<GitHub/>
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Layout/>}>
//     <Route path="" element={<Home/>}/>
//     <Route path="About" element={<About/>}/>
//     <Route path="contact" element={<Contact/>}/>
//     <Route path="user:userid" element={<User/>}/>
//     {/* <Route path="github" element={<GitHub/>}/> */}
//     <Route 
//     loader={githubInfoLoader}
//     path="github" 
//     element={<GitHub/>}/>
//   </Route>
// ))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
)
