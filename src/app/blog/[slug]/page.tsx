import React from 'react'
import Image from 'next/image'


export default async function SingleBlog({params}:any) {
    const res = await fetch(`http://127.0.0.1:1337/api/blog-posts/${params.slug}`)
    const data: any = await res.json()

    const post: any = data.data.attributes

    return (
        <div className='text-black mt-32 mb-16 max-w-7xl mx-auto px-24'>
            <div className='border-2 rounded-lg border-neutral-400 p-10'>
                <h2 className= 'text-5xl font-extrabold mb-10'>{post.title}</h2>
                <p className='mb-10'>{post.body}</p>
                <Image
                    className='w-[100%]' 
                    src={post.imageLink} 
                    alt={post.imageDescription} 
                    width={1000} 
                    height={700}/>
            </div>
            
        </div>
    )
}
