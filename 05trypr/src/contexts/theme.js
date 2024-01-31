import {createContext,useContext} from 'react'

export const ThemeContex = createContext({
    themMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider =  ThemeContex.Provider

export  const useTheme=()=>{
        return useContext(ThemeContex)
}