import React, { useState } from 'react'
import "../App.css"
function Input() {
const [input , setInput] =useState("")
const [value,setValue] = useState([])
const handleText = () => {
     setValue([input, ...value])
     setInput('')
}








const handleSubmit = (e) => {
  e.preventDefault();
    // alert("The form has been submited");
}
  return (
      <>
        <div className='max-w-full k bg-blue-950'>
            <div className='bg-gray-700 p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2'>
            <form className="w-auto bg-gray-600 p-8 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Todo List</h2>
        <div className="mb-4">
          <label htmlFor="input" className="block text-sm font-medium ">
         Enter:
          </label>
      <div className='mb-4 flex items-center'>
          <input
            type="text"
            id="input"
            className="mt-1 p-2 border w-full rounded bg-slate-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleText}>
          ✔
</button>
          </div>
         {value.map((x,index) => {
          return(   <input
          key = {index}
            type="text"
            id="input"
            className="mt-1 p-2 border w-full rounded bg-slate-500"
            value={x}
            // onChange={(e) => setInput(e.target.value)}
            readOnly
            required
          />)

         })}
        </div>

        
                </form>
     
            </div>
        </div>
      </>
  )
}

export default Input