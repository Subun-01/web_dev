import { useState } from 'react'
import './App.css'

function App() {

  const [counter , setCounter]= useState(0)
  // let counter = 15
  const addValue = () => {
    setCounter(counter + 1)
  }
  return (
    <>
      <h1>1ST PROJECT</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>ADD VALUE</button>{" "}
      <button onClick={()=>{setCounter(counter - 1)}}>REMOVE VALUE</button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App
