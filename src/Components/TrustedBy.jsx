import React from 'react'
import { companiesLogo } from '../assets/items';
import { motion } from "motion/react"

export const TrustedBy = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6}}
    viewport={{once: true}}
    
    className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80'>
      <motion.h3
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      viewport={{once: true}}
      
      className='font-medium'>Trusted by leading companies</motion.h3>

      <motion.div
      initial='hidden'
      whileInView='visible'
      transition={{staggerChildren: 0.1}}
      viewport={{once: true}}
      
      className='flex items-center justify-center flex-wrap gap-10 m-4'>
        {companiesLogo.map((logo, index) => (
          <img key={index} src={logo} alt='' className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
        ))}

      </motion.div>

    </motion.div>
  )
}
