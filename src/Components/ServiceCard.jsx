import React, { useRef, useState } from 'react';
import { motion } from "motion/react"

export const ServiceCard = ({ service, index }) => {

  const [position, setPosition] = useState({ x: 0, y: 0, });
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }
  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{transition: 0.6, delay: index * 0.2}}
    viewport={{once: true}}
    
    className='relative overflow-hidden max-w-lg m-2 sm:m-4 border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 rounded-xl' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onMouseMove={handleMouseMove} >

      <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity transition-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{ top: position.y - 150, left: position.x - 150 }}></div>

      <div className='flex  items-center p-8 gap-10 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] dark:bg-gray-800 z-10 bg-white relative'>

        <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
          <img src={service.icon} alt='' className='max-w-24 bg-white dark:bg-gray-800 rounded-full m-2' />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm m-2'>{service.description}</p>
        </div>

      </div>

    </motion.div>
  )
}
