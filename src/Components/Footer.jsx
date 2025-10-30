import React from 'react'
import { items } from '../assets/items';
import { motion } from "motion/react"

export const Footer = ({ theme }) => {
    return (
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once: true}}        
        className='bg-slate-50 dark:bg-gray-800 pt-10 sm:pt-10 mt-20 sm:40 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex justify-between sm:items-center max-lg:flex-col gap-10'>
                <motion.div
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.2}}
                viewport={{once: true}}
                
                className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <img src={theme === 'dark' ? items.dark_logo : items.logo} alt='' className='w-32 sm:w-44' />
                    <p className='max-w-md'>From strategy to excution, we craft digital solutions that move your business forward.</p>

                    <ul className='flex gap-8'>
                        <li><a href='#hero' className='text-bg-primary'>Home</a></li>
                        <li><a href='#hero' className='text-bg-primary'>Services</a></li>
                        <li><a href='#hero' className='text-bg-primary'>Contact Us</a></li>
                        <li><a href='#hero' className='text-bg-primary'>Our Work</a></li>
                    </ul>
                </motion.div>
                <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.3}}
                viewport={{once: true}}
                
                className='text-gray-700 dark:text-gray-400'>
                    <h3 className='font-semibold'>Subscribe to our newslatter</h3>
                    <p>The latest news, articles and resources sent to your box weekly.</p>
                    <div className='flex gap-2 text-sm'>
                        <input type='' placeholder='Enter your email' className='w-full text-sm border border-gray-300 dark:border-gray-500 dark:text-gray-200 bg-transparent rounded outline-none p-3' />
                        <button className='bg-primary text-white px-6 rounded'>Subscribe</button>
                    </div>
                </motion.div>
            </div>
            <hr className='border-gray-300 dark:border-gray-600 my-6' />

            <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}
            viewport={{once: true}}
            
            className='flex text-sm text-gray-500 justify-center sm:justify-between gap-4 flex-wrap pb-6'>
                <p>Copyright 2025 @ agent.id - Greatstack</p>
                <div className='flex items-center justify-between gap-4'>
                    <img src={items.facebook} alt='' />
                    <img src={items.instagram} alt='' />
                    <img src={items.linkedin} alt='' />
                    <img src={items.twitter} alt='' />
                </div>

            </motion.div>

        </motion.div>
    )
}
