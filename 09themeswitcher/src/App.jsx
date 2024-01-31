import './App.css'
import Card from './componets/Card'
import ThemeBtn from './componets/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import {useEffect,useState} from 'react'

function App() {
  const [themMode,setThemeMode]=useState("light")

  const lightMode = ()=>{
    setThemeMode("light")
  }

  const darkMode = ()=>{
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themMode);
  },[themMode])
  return ( 
    <ThemeProvider value={{themMode,lightMode,darkMode}}>
              <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn/>
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                        <Card/>
                      </div>
                  </div>
              </div>
              </ThemeProvider>

  )
}

export default App
