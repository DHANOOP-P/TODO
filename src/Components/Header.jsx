import React from 'react'
import {motion} from  "framer-motion"
const Header = () => {
  return (
   <header className='absolute w-full  z-50 transition-all duration-300'>
      <div className='md:20 container mx-auto px-8 flex item-center justify-between '>
           {/*logo */}
         <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{opacity: 1, x: 0}}
            transition={{
                type:"spring",
                stiffness:100,
                damping:25,
                delay:0.3,
                duration:1.5,
            }}
         className=' flex items-center '>
             <div className='my-4 h-10 w-15 rounded-xl bg-gradient-to-r from-gray-500 to to-gray-800 flex items-center justify-center text-purple-200 font-bold text-xl mr-3'>
                  ToDo
             </div>
             <span className='text-xl font-bold bg-gradient-to-r from-gray-500 to-gray-100 bg-clip-text text-transparent'  >
                TO-DO List
             </span>
          </motion.div>


        {/* menu navigation */}
           <div className=' lg:flex hidden space-x-30  my-6  '>
               {["Home","About","Contact"].map((item,index) => (
                 <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{opacity: 1, y: 0}}
                  transition={{
                    type:"spring",
                    stiffness:100,
                    damping:25,
                    delay:0.7+index *0.2,
                   
            }}
                 key={item}
                 className='my-3 flex justify-center relative text-gray-500 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group'
                 href="#">
                    {item}
                 </motion.a>
               ))}
               <div className='w-105'></div>
           </div>

          
      </div>
   </header>
  )
}

export default Header
