import React from 'react'
import { items } from '../assets/items';
import { motion } from "motion/react"


export const Hero = () => {
  return (
    <div className='flex flex-col items-center px-4 py-20 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white' id='hero'>

      <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.7}}
      
      className='inline-flex items-center border border-gray-300 p-1.5 pr-4 
      rounded-full'>
        <img src={items.group_profile_icon} alt='' className='w-20'/>
        <p className='text-xs font-medium'>Trusted by 10k people</p>
        </motion.div>
        <motion.h1
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.8}}
        viewport={{once: true}}
        
        className='text-4xl sm:text-5xl lg:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent'> digital</span> impact.
        </motion.h1>

        <motion.p
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 1}}
        transition={{duration: 0.5, delay: 1}}
        viewport={{once: true}}
        
        className='text-sm sm:text-lg  dark:text-white/75 text-gray-500 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>

        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 2}}
        viewport={{once: true}}
        className='relative'>
          <img src={items.hero_img} alt='' className='w-full max-w-6xl rounded-xl'/>
          <img src={items.bgimage1} alt='' className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
        </motion.div>

        </div>

  )
}
