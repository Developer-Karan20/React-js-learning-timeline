import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// will not work cuz this is not the right syntax
// const ReactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children: "Click me to visit google"
// }

//this is how react likes things to happen. 
const anotherElement = (
    <a href="https:google.com" target="_blank">Visit google</a>
)


const anotherUser = "chai aur react"; //variable

//react mein element ko create ya declare karne ka tareeqa. 
const ReactElement = React.createElement(
    "a",
    {href: "https://google.com", target: "_blank"},
    "Click me to visit google",
    anotherUser //this is called evaluated expression. basically variable inject ho rha hai aur kuch nahi. 
)

//earlier in the customReact file we created our own custom renderer which worked according to us. But here we have to work according to react. cuz we are using .render in react. 

createRoot(document.getElementById('root')).render(
  
   ReactElement
  
)
 