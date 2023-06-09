import React from 'react'
import Image from 'next/image'
import { BlogPost } from '@/data/StrapiType'

type SlugParam = {
    slug: string,
}

type StrapiComponent = {
    data: {
        attributes: BlogPost,
        id: number,
    }
}

export default async function SingleBlog({params}: {params:SlugParam}) {

    const res = await fetch(`http://127.0.0.1:1337/api/blog-posts/${params.slug}`)
    const data: StrapiComponent = await res.json()

    const post: BlogPost = data.data.attributes

    return (
        <div className='text-black mt-32 mb-16 max-w-4xl mx-auto px-24'>
            <div className='border-2 rounded-lg border-neutral-400'>
                <Image
                    className='w-[100%]' 
                    src={post.imageLink} 
                    alt={post.imageDescription} 
                    width={1000} 
                    height={700}/>
                <h2 className= 'text-5xl font-extrabold my-10 px-10'>{post.title}</h2>
                <p className='px-10 mb-10'>{post.body}</p>
                <div className='flex items-center justify-between mb-2'>
                    <p className='px-10'>
                        {new Date(post.date).toDateString()}
                        {' '}
                        {new Date(post.date).toLocaleTimeString()}
                    </p>
                    <div className='border border-black mr-10 rounded-lg px-3 text-sm'><p>Duration</p></div>
                </div>
                
            </div>
            
        </div>
    )
}
