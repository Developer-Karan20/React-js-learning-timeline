import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)  
  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    if(counter == 20) {
      alert("Max limit reached");
      return;
    }
    setCounter(counter + 1);
  }


  const removeValue = () => {
    if(counter == 0) {
      alert("Min limit reached");
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue} disabled={counter === 20 }
      >Add Value {counter}</button>

      <br />

      <button
      onClick={removeValue} disabled={counter === 0}
      >Decrease Value {counter}</button>
    </>
    
  )
}

export default App
