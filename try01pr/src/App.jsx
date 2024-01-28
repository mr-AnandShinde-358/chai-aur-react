import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]= useState("bg-black")
   const  changeColor=(color)=>{
      setColor(color)
   }

  return (
    <>

    <div className={`body h-screen w-screen ${color} flex items-end justify-center`}>

      <div className='mb-8 flex gap-2'>
      <button onClick={()=>changeColor("bg-orange-500")}>orange</button>
      <button  onClick={()=>setColor("bg-red-500")}>red</button>
      <button onClick={()=>setColor("bg-green-500")}>green</button>
      </div>
     
    
    </div>
  
    </>
  )
}

export default App
