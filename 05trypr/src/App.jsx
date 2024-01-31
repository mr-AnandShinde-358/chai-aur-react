
import { useState } from 'react'
import './App.css'
import Card from './componets/Card'
import ThemeBtn from './componets/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'

function App() {
 const [themMode,setThemeMode]= useState("light")

 const darkTheme =()=>{
  setThemeMode("dark")
 }
 const lightTheme=()=>{
  setThemeMode("light")
 }

//  actual change in theme

useEffect(()=>{
document.querySelector('html').classList.remove("dark","light")
document.querySelector('html').classList.add(themMode)
},[themMode])


  return (
    <ThemeProvider value={{themMode,darkTheme,lightTheme}} >
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* them btn */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>

  )
}

export default App
