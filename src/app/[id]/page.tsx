'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'


export default function SingleBlog() {
    const route = usePathname()
    const {loading, error, data}: {loading: any, error: any, data: any} = useFetch(`http://localhost:1337/api/blog-posts${route}`)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Errorrr {':('}</div>
    
    const post = data.data.attributes
    console.log(post)

    return (
        <div className='text-black'>
            <h2 className=' mt-24 text-5xl font-extrabold mx-auto mb-10'>{post.title}</h2>
            <p className='mb-10'>{post.body}</p>
            <Image src={post.imageLink} alt={post.imageDescription} width={1000} height={700}/>
        </div>
    )
}
