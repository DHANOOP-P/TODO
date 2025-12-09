import React, { useState } from 'react'
import {motion} from "framer-motion"
const HeroSection = () => {
  
   const [todo,setTodo] = useState([]);
   const [input,setInput] = useState("");

   const addTodo =() => {
    if(input.trim())
    {
      setTodo([...todo,{id:Date.now(),text:input, completed:false}])
      setInput("")
    }
   }
  return (
     <section className='h-screen bg-gradient-to-b from-black to to-violet-900 relative overflow-hidden flex justify-center items-center'>
             <motion.div 
               initial={{opacity:0, y :300}}
               animate={{opacity:1, y:0}}
               transition={{
                   type:"spring",
                   duration:1.5,
                   stiffness:100,
                   damping:25,
                   delay:1.5
               }}
             className=' p-5 w-120    bg-gradient-to-t from-black to-violet-900 border-2 border-gray-500 shadow-xl shadow-amber-200 rounded-4xl  '> 
                 <div className='w-full'>
             <h1 className='px-32 py-5  mx-auto text-3xl text-gray-200'>TO-DO LIST</h1>
                 </div>
                 <div className='mb-4 flex '>
                     <input 
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     type="text" placeholder="Add a new to-do" className='flex-grow border-2 py-2 rounded-2xl text-center'  />
                     <button onClick={addTodo} className='space-x-1 px-4 rounded border-2 hover:bg-gray-400'>Add  </button>
                 </div>
               <ul className="space-y-2">
  {todo.map((item) => (
    <li
      key={item.id}
      className="flex items-center p-3 rounded-lg bg-gradient-to-r from-black to-violet-600 border border-gray-100"
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() =>
          setTodo((prev) =>
            prev.map((t) =>
              t.id === item.id ? { ...t, completed: !t.completed } : t
            )
          )
        }
        className="mr-2 h-5 w-5"
      />

      {/* Todo Text */}
      <span
        className={`flex-grow ${
          item.completed ? "line-through text-gray" : "text-white"
        }`}
      >
        {item.text}
      </span>

      {/* Delete Button */}
      <button
        onClick={() =>
          setTodo((prev) => prev.filter((t) => t.id !== item.id))
        }
        className="ml-2 p-2 rounded-lg bg-gradient-to-r from-bg-gray-400 to-gray-900 text-white hover:bg-violet-300"
      >
        Delete
      </button>
    </li>
  ))}
</ul>


             </motion.div>
     </section>

  )
}

export default HeroSection
