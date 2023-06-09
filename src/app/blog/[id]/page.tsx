'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'


export default async function SingleBlog({id}: {id: any}) {

    console.log(id)

    const res = await fetch(`http://localhost:1337/api/blog-posts${id}`)
    const data: any = res.json()

    console.log(data)

    const post: any = data.data.attributes

    return (
        <div className='text-black'>
            <h2 className=' mt-24 text-5xl font-extrabold mx-auto mb-10'>{post.title}</h2>
            <p className='mb-10'>{post.body}</p>
            <Image src={post.imageLink} alt={post.imageDescription} width={1000} height={700}/>
        </div>
    )
}
