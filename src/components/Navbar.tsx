'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <nav className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-neutral-100 border-b-2'>
            <div className='max-w-7xl m-auto flex justify-between items-center py-2 px-1'>
                <Link href='/#hero'>
                    <Image 
                        src='/logo/Shh-Logo-Orange.png'
                        alt='Shh Logo' 
                        width={100} 
                        height={100} 
                        className='w-auto h-auto'
                    ></Image>
                </Link>
                
                <ul className='hidden lg:flex lg:items-center'>
                    <li 
                        className={
                            'p-3 hover:text-orange-500 dropdown '
                            +`${usePathname()==='/features'?'text-orange-500 font-bold text-lg':''}`}>
                        
                        <Link 
                            href='/features'
                            >Features
                            <AiOutlineDown className='inline ml-2' size={20}/>
                        </Link>
                        
                        {/* Dropdown */}
                        <div className='hidden absolute bg-[#f9f9f9] text-gray-950 min-w-[200px] shadow py-4 px-4 mt-2 z-[1] dropdown-content text-base font-normal'>
                            <Link 
                                className='block py-1 hover:text-orange-500' 
                                href='/features/#runner-collection'
                                >Runner Collection</Link>
                            <Link 
                                className='block py-1 hover:text-orange-500' 
                                href='/features/#casual-collection'
                                >Casual Collection</Link>
                            <Link 
                                className='block py-1 hover:text-orange-500' 
                                href='/features/#colors-collection'
                                >Colors Collection</Link>
                            <Link 
                                className='block py-1 hover:text-orange-500' 
                                href='/features/#string-less-collection'
                                >String-less Collection</Link>
                        </div>
                    </li>
                    <li 
                        className={
                            'p-3 hover:text-orange-500 '
                            +`${usePathname()==='/#pricing'?'text-orange-500 font-bold text-lg':''}`}>
                        <Link href='/#pricing'>Pricing</Link></li>
                    <li 
                        className={
                            'p-3 hover:text-orange-500 '
                            +`${usePathname()==='/about'?'text-orange-500 font-bold text-lg':''}`}>
                        <Link href='/about'>About us</Link></li>
                    <li 
                        className={
                            'p-3 hover:text-orange-500 '
                            +`${usePathname()==='/contact'?'text-orange-500 font-bold text-lg':''}`}>
                        <Link href='/contact'>Contact</Link></li>
                    <li 
                        className={
                            'p-3 hover:text-orange-500 '
                            +`${usePathname()==='/blog'?'text-orange-500 font-bold text-lg':''}`}>
                        <Link href='/blog'>Blog</Link></li>
                </ul>

                <div className='flex'>
                    <button className='block sm:px-3 px-1 py-2 hover:bg-neutral-300 sm:text-base text-xs mr-1'>Sign In</button>
                    <button 
                        className='block sm:px-3 px-1 py-2 hover:opacity-70 bg-orange-500 text-white sm:text-base text-xs'
                    >Sign Up</button>
                </div>

                {/** Mobile Button */}
                <div onClick={handleNav} className='block lg:hidden ml-5 z-10'>
                    {   nav 
                        ? <AiOutlineClose className='text-white' size={20}/> 
                        : <AiOutlineMenu className='text-orange-500' size={20}/>}
                </div>
                {/** Mobile Menu */}
                <div className={
                    nav 
                    ? 'lg:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-gray-950 text-center ease-in duration-300'
                    : 'lg:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-gray-950 text-center ease-in duration-300'
                }>
                    <ul>
                        <li 
                            className='p-4 text-4xl hover:text-gray-500 text-white'>
                            <Link onClick={() => {setNav(false)}} href='/features'
                                >Features</Link></li>
                        <li 
                            className='p-4 text-4xl hover:text-gray-500 text-white'>
                            <Link onClick={() => {setNav(false)}} href='/#pricing'
                                >Pricing</Link></li>
                        <li 
                            className='p-4 text-4xl hover:text-gray-500 text-white'>
                            <Link onClick={() => {setNav(false)}} href='/about'
                                >About us</Link></li>
                        <li 
                            className='p-4 text-4xl hover:text-gray-500 text-white'>
                            <Link onClick={() => {setNav(false)}} href='/contact'
                                >Copntact</Link></li>
                        <li 
                            className='p-4 text-4xl hover:text-gray-500 text-white'>
                            <Link onClick={() => {setNav(false)}} href='/blog'
                                >Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar