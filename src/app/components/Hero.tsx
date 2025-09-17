"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { fadeInUp, scaleIn } from '../utilis/animations'


const Hero = () => {
  return (
    <section className='py-28  container max-w-7xl mx-auto px-4'>
<div className='max-w-3xl mx-auto text-center'>
    <motion.div
    {...scaleIn}
    transition={{delay:0.2}}
     className='flex flex-col items-center mb-4'>
        <Image src="/profile.avif" alt="profile image"  width ={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
    </motion.div>
    <motion.h1 
    {...fadeInUp}
    transition={{delay:0.3}}
    className='text-4xl md:text-6xl font-bold mb-6'>Hi, I'm  <span className='text-primary'>John Doe</span></motion.h1>
<motion.p 
{...fadeInUp}
transition={{delay:0.5}}
 className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Full Stack Developer |backend logic expert |Open Source Contributer</motion.p>

<div className='flex justify-center space-x-4 mb-8'>
<Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>

<FaGithub />

</Link>
<Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>

<FaLinkedin/>

</Link>
<Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>

<FaTwitter />

</Link>
</div >
<div className='flex flex-col md:flex-row justify-center gap-4'>
    <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>View Projects</Link>
    <Link href="/projects" className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors'>Contact me</Link>
</div>
</div>


    </section>
  )
}

export default Hero
