'use client'

import React, {useState} from 'react'
import { BlogData } from '@/data/BlogData'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
    const [showAll, setShowAll] = useState(false)

    const renderAllArticles = (data:{title:string, image:string, date:number}[], all: boolean) => {
        if (!all) {
            let smallData = data.filter( (value, index) => index <= 2 )
            return (
                <div className='flex flex-wrap justify-center'>
                    {smallData.map( (blog, index) => renderArticle(blog, index) )}
                </div>
            )
        }
        
        return (
            <div className='flex flex-wrap justify-center'>
                {data.map( (blog, index) => renderArticle(blog, index) )}
            </div>
        )
    }

    const renderArticle = (blog: {title:string, image:string, date:number}, index: number) => {
        return (
            <article key={index} className='flex justify-center w-1/3 min-w-[280px] mb-10 px-3'>
                <div className='flex flex-col justify-between border border-1 border-neutral-300'>
                    <Image className='object-cover w-[100%] h-[200px] mb-3' src={blog.image} width={1000} height={500} alt='Image of shoe'/>
                    <p className='text-lgfont-medium opacity-75 mb-1 mx-4'>Do consectetur</p>
                    <h4 className='text-xl font-bold mb-5 mx-4'>{blog.title}</h4>
                    <div className='flex justify-between mb-3 mx-4'>
                        <p>{new Date(blog.date).toDateString()}</p>
                        <div>
                            <div className='text-sm font-medium border border-1 border-neutral-600 text-neutral-600 rounded-2xl px-3'>Duration</div>
                        </div>
                    </div>
                </div>
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
                
                { renderAllArticles(BlogData, showAll) }
                
                <div className='flex justify-center'>
                    <Link 
                        // onClick={() => {setShowAll(!showAll)}} 
                        href='/blog'
                        className='text-white bg-orange-500 px-6 py-2 hover:opacity-70'
                        >
                            {showAll?'See less articles':'See more articles'}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blog