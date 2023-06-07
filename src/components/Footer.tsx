'use client'

import { Dropdown } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState, useMemo } from 'react'
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { ButtonStyle, ItemStyle, MenuStyle } from '@/data/DropdownStyling'
import { AiOutlineDown, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    const [languages, setLanguages] = useState(new Set(["English"]))

    const setSeletecLanguage = (key: any) => {
        setLanguages(key)
    }

    const selectedValue = useMemo(
        () => { return Array.from(languages).join(", ").replaceAll("_", " ") },
        [languages]
    )

    return (
        <footer className='bg-neutral-300 pt-16'>
            <div className='max-w-7xl mx-auto md:px-24 sm:px-12'>
                <div className='flex flex-wrap lg:justify-between justify-center mx-7 mb-7 text-gray-950'>
                    {/* Logo */}
                    <Image
                        src='/logo/Shh-Logo-Orange.png'
                        alt='Shh Logo'
                        width={100}
                        height={100}
                        className='w-auto h-[80px] mr-10' />

                    {/* Navigation */}
                    <div className='flex xl:flex-row flex-col'>
                        <div className='flex flex-col mr-12 mb-5'>
                            <h3 className='text-xl font-bold mb-4'>Product</h3>
                            <a href='/' className='mb-1 hover:text-orange-600'>Features</a>
                            <a href='/' className='mb-1 hover:text-orange-600'>Pricing</a>
                        </div>
                        <div className='flex flex-col mr-12 mb-5'>
                            <h3 className='text-xl font-bold mb-4'>Resources</h3>
                            <a href='/' className='mb-1 hover:text-orange-600'>Blog</a>
                            <a href='/' className='mb-1 hover:text-orange-600'>User guide</a>
                            <a href='/' className='mb-1 hover:text-orange-600'>Webinars</a>
                        </div>
                        <div className='flex flex-col mr-12 mb-5'>
                            <h3 className='text-xl font-bold mb-4'>Company</h3>
                            <a href='/' className='mb-1 hover:text-orange-600'>About</a>
                            <a href='/' className='mb-1 hover:text-orange-600'>Join us</a>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className='flex flex-col'>
                        <h3 className='text-xl font-bold'>Subscribe to our newsletter</h3>
                        <p className='text-sm mb-6'>For product announcements and exclusive insights</p>
                        <form className='flex flex-wrap justify-center'>
                            <div className="relative mb-2">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <AiOutlineMail size={20}/>
                                </div>
                                <input 
                                    type="text" 
                                    id="email-address-icon" 
                                    className="bg-gray-50 text-gray-900 block w-full pl-10 p-2"
                                    placeholder="Input your email"/>
                            </div>
                            {/* <input type='text' placeholder='Input your email' className='text-gray-950 py-2 px-2 mb-2'/> */}
                            <input
                                type='submit'
                                value='Subscribe'
                                className='bg-orange-500 text-white px-3 py-2 hover:opacity-70 mb-2' />
                        </form>
                    </div>
                </div>

                {/* Seperator */}
                <div className='border border-1 border-gray-950/20 my-5 mx-7' />

                {/* Bottom */}
                <div className='flex md:flex-row flex-col text justify-between items-center text-gray-950 mx-7 pb-5'>

                    <Dropdown>
                        <Dropdown.Button
                            css={ButtonStyle}
                            iconRight={<AiOutlineDown size={16} />}
                            flat
                        >{selectedValue}</Dropdown.Button>
                        <Dropdown.Menu
                            css={MenuStyle}
                            containerCss={MenuStyle}
                            aria-label='Language Options'
                            disallowEmptySelection
                            selectionMode='single'
                            selectedKeys={languages}
                            onSelectionChange={setSeletecLanguage} >
                            <Dropdown.Item css={ItemStyle} key='English'>English</Dropdown.Item>
                            <Dropdown.Item css={ItemStyle} key='Aussie'>Aussie</Dropdown.Item>
                            <Dropdown.Item css={ItemStyle} key='French'>French</Dropdown.Item>
                            <Dropdown.Item css={ItemStyle} key='German'>German</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>

                    <p className='text-center md:mb-0 md:mx-3 my-3'>
                        &copy; 2022 Brand, Inc, &middot;
                        <a href='/' className='hover:text-orange-600'> Privacy </a>
                        &middot;
                        <a href='/' className='hover:text-orange-600'> Terms </a>
                        &middot;
                        <a href='/' className='hover:text-orange-600'> Sitemap </a>
                    </p>

                    <div className='flex items-center'>
                        <BsFacebook className='mr-2 hover:text-orange-600 hover:cursor-pointer' href='/' size={24} />
                        <BsLinkedin className='mr-2 hover:text-orange-600 hover:cursor-pointer' href='/' size={24} />
                        <BsYoutube className='mr-2 hover:text-orange-600 hover:cursor-pointer' href='/' size={30} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer