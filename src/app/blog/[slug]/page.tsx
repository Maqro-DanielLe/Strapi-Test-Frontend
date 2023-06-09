import React from 'react'
import Image from 'next/image'


export default async function SingleBlog({params}:any) {
    const res = await fetch(`http://127.0.0.1:1337/api/blog-posts/${params.slug}`)
    const data: any = await res.json()

    const post: any = data.data.attributes

    return (
        <div className='text-black'>
            <h2 className=' mt-24 text-5xl font-extrabold mx-auto mb-10'>{post.title}</h2>
            <p className='mb-10'>{post.body}</p>
            <Image src={post.imageLink} alt={post.imageDescription} width={1000} height={700}/>
        </div>
    )
}
