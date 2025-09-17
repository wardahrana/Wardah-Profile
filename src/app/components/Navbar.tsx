"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'
import {motion} from 'framer-motion'

const Navbar = () => {
    const  {theme ,toggleTheme} =useTheme();
    const pathname=usePathname();
    const[ismobilemenuOpen ,setmobilemenuOpen]=useState<boolean>(false);
    const toggleMenu=( ) =>
    {
        setmobilemenuOpen(!ismobilemenuOpen);
    }
    const baritems=[
        {href : "/" , label :"Home"},
        {href :"/about" , label :"About"},
        {href:"/projects",label:"Projects"},
        {href :"/blogs" , label:"Blogs"},
        {href :"/contact" ,label:"Contact"},
    ]
  return (
    <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors'>
    <div className='container  max-w-7xl mx-auto px-4'>
    {/*Desktop Menu */}
    <div className='flex items-center justify-between h-16'>
     <Link href="/" className='text-xl font-bold text-primary'> Devfolio&trade;</Link> 
     {/*Desktop menus */}  
     <div className='hidden  md:flex items-center space-x-8'>
        {
        baritems.map((item)=>
        { const isActive = pathname === item.href;
            return(
                <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors font-medium ${isActive ?'text-primary' : ""}`}>{item.label}</Link>

            )
})
    }
    <motion.button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white  hover:text-primary tarnsition-colors cursor-pointer'>
        {
            theme === "dark" ? (<SunIcon className='w-5 h-5'/>) :(<MoonIcon className='w-5 h-5'/>)
        }
    </motion.button>
     </div>

     {/*Mobile menu button */}
     <motion.button  onClick={toggleMenu} type="button" className='md:hidden p-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer '>
        { ismobilemenuOpen ?(<XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6'/>)}
     </motion.button>
</div>
    {/*Mobile Menu */}
    {ismobilemenuOpen && (<motion.div className='md:hidden '>
 <div className=' py-4 space-y-4'> 
    {
    baritems.map ( (item , index)=> (
        <motion.div key={index} onClick={toggleMenu}>
            <Link   href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
        </motion.div>

    ))
    }
      
     <button  onClick={toggleTheme} className=' flex  items-center py-2 rounded-lg hover:text-primary  dark:text-white tarnsition-colors'>
        {
            theme === "dark" ? (<>
            <SunIcon className='w-5 h-5 mr-2'/> Light mode </>
        ) :( <><MoonIcon className='w-5 h-5 mr-2'/> Dark mode </>) 
        }
    </button>
   
    </div>
    </motion.div>)
    
    }
   
    </div>
    </nav>
  );
}

export default Navbar

