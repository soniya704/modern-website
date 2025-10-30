import React from 'react'
import { items } from '../assets/items'
import { Title } from './Title'
import { ServiceCard } from './ServiceCard';
import { motion } from "motion/react"

export const Services = ({service, index}) => {

  const serviceData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerfull digital solutions that connect  engage....',
      icon: items.ads_icon
    },
    {
      title: 'Connect Marketing',
      description: 'We help you  excute your plan and deliver results',
      icon: items.content_icon
    },
    {
      title: 'Content Writing',
      description: 'We help you create a marketing startegy that drives results',
      icon: items.marketing_icon
    },
    {
      title: 'Social media',
      description: 'We help you build a strong social media presence and engage with your audience',
      icon: items.social_icon
    },
  ]
  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    transition={{staggerChildren: 0.2}}
    viewport={{once: true}}
    
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white pt-28 ' id='services'>

      <img src={items.bgimage2} alt='' className='-top-110 -left-70 -z-1 absolute dark:hidden' />
      <Title title='How can we help' description='From strategy to execution, we craft digital solutions that move your business forward.' />
      <div className='flex flex-col md:grid grid-cols-2'>
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index}/>

        ))}
       
      </div>


    </motion.div>
  )
}
