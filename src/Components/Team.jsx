import React from 'react'
import { Title } from './Title'
import { teamData } from '../assets/items';
import { motion } from "motion/react"

export const Team = () => {
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{once: true}}
    
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:24 xl:40 text-gray-800 dark:text-white pt-28'>
        <Title title='Meat our team' description='A passinate team of degital exports dedicated to your brand success'/>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
          {teamData.map((team, index) => (
            <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.1}}
            viewport={{once: true}}
            
            className='flex max-sm:flex-col items-center gap-5 p-4 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
              <img src={team.image} alt='' className='w-12 h-12 rounded-full'/>
              <div className='flex-1'>
              <h3 className='text-sm font-bold'>{team.name}</h3>
              <p className='text-xs opacity-60'>{team.title}</p>
              </div>

            </motion.div>

          ))}

        </div>

    </motion.div>
  )
}
