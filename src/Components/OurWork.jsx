import React from 'react'
import { Title } from './Title'
import { items } from '../assets/items'
import { motion } from "motion/react"


export const OurWork = () => {

    const workData = [
        {
            title: 'Portfolio app marketing',
            description: 'We turn bold ideas into power digital solutions that connect engage....',
            image: items.work_img1
        },
         {
            title: 'Feature management',
            description: 'We help you excute your plan and deliver results',
            image: items.work_img2
        },
         {
            title: 'Spotify management',
            description: 'We help you to listen your favourite music ',
            image: items.work_img3
        },
        {
            title: 'Education app',
            description: 'We help you to Develope your carrier that drives results ',
            image: items.work_img4
        },
    ]
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'>
        <Title title='Our Latest Work' description='From startegy to excution we craft digital solutions that move your business forward.'/>
        <div className='grid sm:grid-cols-2 lg:grid-col-3 w-full gap-6 max-w-5xl'>
            {workData.map((work, index) => (
              <motion.div
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              viewport={{once: true}}
              >
                  <img src={work.image} alt='' className='w-full rounded-xl'/>
                  <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                  <p>{work.description}</p>
              </motion.div>
                
            ))}

        </div>

    </motion.div>
  )
}
