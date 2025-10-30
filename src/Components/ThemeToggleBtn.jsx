import React, { useEffect } from 'react'
import { items } from '../assets/items'

export const ThemeToggleBtn = ({theme, setTheme}) => {

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  },[theme])
  return (
    <>
    <button>{theme === 'dark' ? (<img src={items.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt='' onClick={() => setTheme('light')}/>) : 
    (<img src={items.moon_icon} alt='' className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={() => setTheme('dark')}/>)}</button>
    
    </>
  )
}
