import { useState } from 'react';
import './App.css'

function App() {
let [counter,setCounter]= useState(15)
// let [counter,hiteshCounter]= useState(15)
 


 const addValue=()=>{
  console.log("Value added ",Math.random());
  // counter = counter+1;
  // console.log(counter)
  // setCounter(counter)
  if(counter<=19){
    setCounter(counter+1)
  }

  // hiteshCounter(counter+1)

 }

 const removeValue =()=>{
  if(counter>=1){
    setCounter(counter-1)
  }
 }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue} id='add'>Add value{counter}</button>
    <br />
    <button onClick={removeValue} id='remove'>Remove value {counter}</button>
    <footer>{counter}</footer>
    </>
  )
}

export default App
