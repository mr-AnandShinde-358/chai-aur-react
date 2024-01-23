import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai </h1>
        </div>
    )
}

/* const ReactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'click me to visit google'
} */

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser="chai aur react"

const ReactElement = React.createElement('a',{
    href:'https://google.com',target:'_blank'
},
'Click Me To Visit Google',
anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <App />
    // MyApp() // do this ! but not do this becuse optimaziton or conversion  
    // <MyApp/>
    // <ReactElement/>
    // ReactElement
    // <a href='https://google.com' target='_blank'>Visit Google</a>
    // anotherElement
    ReactElement
  
)
