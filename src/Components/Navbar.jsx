import React,{useState} from 'react'
import { items } from '../assets/items'
import { ThemeToggleBtn } from './ThemeToggleBtn';
import { motion } from "motion/react"

export const Navbar = ({ theme, setTheme }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <motion.div
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: 'easeOut'}}
        
        className='flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

            <img src={theme === 'dark' ? items.dark_logo : items.logo} alt='' className='w-32 sm:w-40' />

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 right-0 bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:text-white max-sm:bg-primary max-sm:pt-20 flex sm:items-center transition-all gap-5 `}>
                <img src={items.close_icon} alt='' className='w-5 absolute top-4 right-4 sm:hidden' onClick={() => setSidebarOpen(false)} />
                <a href='#' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Home</a>
                <a href='#services' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Services</a>
                <a href='#contact-us' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Contact Us</a>
                <a href='#our-work' className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Our Work</a>


            </div>

             <div className='flex items-center gap-2 sm:gap-4'>
                  <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
                    <img src={theme === 'dark' ? items.menu_dark_icon : items.menu_icon} alt='' className='w-8 sm:hidden'  onClick={() => setSidebarOpen(true)}/>
                    <a href='#contact-us' className='text-sm max-sm:hidden flex items-center gap-2 bg-primary px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Connect <img src={items.arrow_icon} width={14} alt=''/></a>
                    

                </div>

        </motion.div>
    )
}
