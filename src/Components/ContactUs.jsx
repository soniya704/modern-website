import React, { useState } from 'react'
import { Title } from './Title';
import { items } from '../assets/items';
import toast from 'react-hot-toast';
import { motion } from "motion/react"

export const ContactUs = () => {

    
    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "bb2d87b8-6b15-4ba5-b99a-56dea740724d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Thank you for your submission')
                event.target.reset();

            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)

        }
    };

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        transition={{staggerChildren: 0.2}}
        viewport={{once: true}}
        className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white pt-28'>
            <Title title='Reach out to us' description='from strategy to excution, we craft digital solutions that move your business forward.' />
            <motion.form
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            viewport={{once: true}}
            
            className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' onSubmit={onSubmit}>
                <div>
                    <p className='text-sm mb-2 font-medium'>Your name</p>
                    <div className='flex pl-3 border border-gray-400 dark:border-gray-800 rounded-lg'>
                        <img src={items.person_icon} alt='' />
                        <input type='text' placeholder='Enter your name' name='name' className='w-full text-sm p-3 outline-none' required />
                    </div>
                </div>

                <div>
                    <p className='text-sm mb-2 font-medium'>Email Id</p>
                    <div className='flex pl-3 border border-gray-400 dark:border-gray-800 rounded-lg'>
                        <img src={items.email_icon} alt='' />
                        <input type='email' placeholder='Enter your name' name='email' className='w-full text-sm p-3 outline-none' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='text-sm mb-2 font-medium'>Message</p>
                    <textarea rows={8} className='w-full text-sm rounded-lg outline-none border border-gray-300 dark:border-gray-700' name='message' required />
                    <button className='w-max flex gap-2 rounded-full bg-primary text-white px-10 py-3 text-sm hover:scale-103 transition-all cursor-pointer'>
                        Submit<img src={items.arrow_icon} alt='' className='w-4' /></button>

                </div>

            </motion.form>

        </motion.div>
    )
}
