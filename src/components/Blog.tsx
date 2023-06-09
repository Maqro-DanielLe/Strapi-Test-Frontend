'use client'

import React from 'react'
import { BlogData } from '@/data/BlogData'
import Image from 'next/image'
import Link from 'next/link'

const Blog = async () => {

    const res = await fetch('http://127.0.0.1:1337/api/blog-posts')
    const strapiData = await res.json()

    const renderAllArticles = (data: any[]) => {        
        return (
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {data.map( (blog, index) => renderArticle(blog, index) )}
            </div>
        )
    }

    const renderArticle = (blog: any, index: number) => {
        return (
            <article key={index} className='mb-10 px-3'>
                <Link href={`/blog/${blog.id}`}>
                    <div className='flex flex-col justify-between border border-1 border-neutral-300'>
                        <Image className='object-cover w-[100%] h-[200px] mb-3' src={blog.attributes.imageLink} width={1000} height={500} alt='Image of shoe'/>
                        <p className='text-lgfont-medium opacity-75 mb-1 mx-4'>Do consectetur</p>
                        <h4 className='text-xl font-bold mb-5 mx-4'>{blog.attributes.title}</h4>
                        <div className='flex justify-between mb-3 mx-4'>
                            <p>{new Date(blog.attributes.date).toDateString()}</p>
                            <div>
                                <div className='text-sm font-medium border border-1 border-neutral-600 text-neutral-600 rounded-2xl px-3'>Duration</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </article>
        )
    }

    return (
        <section className='flex flex-col justify-center items-center md:py-20 sm:py-10 py-5'>
            <div className='flex flex-col max-w-7xl w-[100%] md:px-24 sm:px-12'>
                <h1 className='text-center sm:text-5xl sm:font-extrabold  text-4xl font-bold mb-6'> What{'\''}s New</h1>
                <p className='md:w-[65vw] sm:[75vw] w-[90vw] max-w-3xl mb-7 mx-auto text-center sm:text-lg sm:font-medium'>
                    Pellentesque ut venenatis orci. Etiam et sapien urna. Aenean luctus libero augue, ut ultrices nibh fringilla at.
                </p>
                
                { renderAllArticles(strapiData.data) }
            </div>
        </section>
    )
}

export default Blog