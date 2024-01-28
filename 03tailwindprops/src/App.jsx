import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
let myObj ={
  name:"hitesh",
  age:21
}
let myArray=[3,4,5,6]

  return (
    
  <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1 >
    {/* <Card channel="chaiaurcode" myArray=[1,2,3]  /> //this not allowed */}
    {/* <Card channel="chaiaurcode" myObj={names:"chai"}// this not allowed /> */} 
    {/* <Card channel="chaiaurcode" someObj=myObj  /> // this not allowed */}
    {/* <Card channel="chaiaurcode" someObj={myObj} arr={myArray} /> */}
    <Card username="chaiaurcode" btnText="click me" />
    <Card username="hiteshchoudhary" btnText="visit me"/> 
    <Card username="hiteshchoudhary" /> 
   
  </>
  )
}

export default App
