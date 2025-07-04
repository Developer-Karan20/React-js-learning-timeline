import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)

  const [numberAllowed, setNumberAllowed] = useState(false)

  const [charAllowed, setCharAllowed] = useState(false)

  const [password, setPassword] = useState("")


  //useRef hook reference lena hai to pass bhi karna padega jo ki kiya huwa hai input ke andar. 
  const passwordRef = useRef(null)


  //useCallback hook to memorize or caches the function definition between renders. 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~'"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])




  //code to copy password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])




  //useEffect hook to perform all the effects happening in the page like the changing of passwords each time we check or uncheck the box. 
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 my-4 rounded-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            Length: {length}
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
