'use client'

import React, {useState, useEffect} from 'react'
import { Splide, SplideSlide, Options } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import Image from 'next/image'
import { HeroData } from '@/data/HeroData'
import { API_BASE } from '@/data/StrapiData'

const MEDIUM_DEVICE_WIDTH = 768;    // 768px or below -> medium device
const MINI_DEVICE_WIDTH = 480;      // 480px or below -> mini device



const calcCarouselHeight = (width: number): string => {
    if (width < MINI_DEVICE_WIDTH) 
            return '10rem'
        else if (width < MEDIUM_DEVICE_WIDTH)
            return '6rem'
        else
            return '4rem'
}



const Hero = () => {
    const [carouselHeight, setCarouselHeight] = useState('6rem')
    const [data, setData]: [any, any] = useState() 

    const fetchHeroData = (uri: string) => {
        fetch(uri)
        .then( (res) => res.json() )
        .then( (data) => { setData(data) })
    }

    useEffect(() => {
        setCarouselHeight( calcCarouselHeight(window.innerWidth) )
        window.addEventListener('resize', () => {
           setCarouselHeight(calcCarouselHeight(window.innerWidth))
        })
    })

    // Retrieve Data
    fetchHeroData('http://127.0.0.1:1337/api/hero?populate=*')
    if(!data) return <section>Loading</section>
    const heroData = data.data.attributes

    return (
        <section id='hero' className='flex justify-center pt-36'>
                {/* Content */}
                <div className='flex flex-col items-center z-[3] md:pb-20 sm:pb-10 pb-5 max-w-7xl md:px-24 sm:px-12'>
                    {/* Title */}
                    <h1 className='text-6xl font-extrabold text-center'>{heroData.title}</h1>
                    
                    {/* Pun Carousel */}
                    <Splide
                        className='mt-3 mb-3 mx-5 text-center' 
                        role='group' 
                        options={{
                            direction: 'ttb',
                            height: carouselHeight,
                            type: 'loop',
                            autoplay: true,
                            arrows: false,
                            classes: {
                                page: '',
                            }
                        }} 
                        aria-label='Pun Carousel'
                        >{heroData.carouselText.map( (pun: {id: number, content: string}) => (
                            <SplideSlide key={pun.id}>
                                <p className='text-xl'>{pun.content}</p>    
                            </SplideSlide>
                        ))}
                    </Splide>
                    
                    {/* Call to action */}
                    <div className='flex flex-wrap justify-center my-2'>
                        <button 
                            className='px-10 py-3 mx-2 my-2 bg-orange-500 text-white border border-orange-500 hover:bg-neutral-100 hover:text-gray-950'
                            >Join us now</button>
                        <button 
                            className='px-10 py-3 mx-2 my-2 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                            >Request Demo</button>
                    </div>
                    
                        
                    <Image 
                        className='max-w-[7xl] w-[100%] my-8'
                        src={`http://127.0.0.1:1337${heroData.image.data.attributes.url}`} 
                        alt='Orange Nike Air Max Shoes' 
                        width={1470} 
                        height={900}/>
                </div>
        </section>
    )
}

export default Hero