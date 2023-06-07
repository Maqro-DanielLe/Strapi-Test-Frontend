'use client'

import Blog from '@/components/Blog'
import useFetch from '@/hooks/useFetch'
import Image from 'next/image'

const API_BASE = 'http://localhost:1337/api'

export default function Home() {
    const {loading, error, data}: {loading: any, error: any, data: any} = useFetch(`${API_BASE}/blog-posts/1`)

    if(loading) return <p>Loading</p>
    if(error) return <p>Errorrr {':('}</p>

    const post = data.data.attributes
    console.log(post)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Blog/>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </main>
    )
}
