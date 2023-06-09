import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import { LandingPageData } from '@/data/HeroData'

const fetchData = async () => {
    const res = await fetch('http://127.0.0.1:1337/api/blog-posts/3')
    
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Home() {
    let strapiData = await fetchData()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Hero/>
        </main>
    )
}
