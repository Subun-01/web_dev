import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [num, setNumAllowed] = useState(false)
  const [char, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const generatePass = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "1234567890"
    if (char) str += "!@#$%^&*()_+"
    for (let i = 1; i < length; i++) {
      const c = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(c)

    }
    setPassword(pass)
  }, [length, num, char])

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  useEffect(() => {
    generatePass()
  }, [length, num, char])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password
        Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden
      mb-4">
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex text-sm gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-point'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=''
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex text-sm gap-x-1">
          <input
            type="checkbox"
            defaultChecked={num}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="length">Numbers</label>
        </div>
        <div className="flex text-sm gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="length">Charecters</label>
        </div>
      </div>
    </div>
  )
}

export default App
