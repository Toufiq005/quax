"use client"

import './homePageTwo.css';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

export default function(){
    return(
        <>
        <Navbar textColor="text-white hover:text-blue-500" bgColor="bg-transparent" pageIndex={3}/>
        <Header/>
        </>
    )
}

function Header(){
    return(
        <header className='w-full min-h-screen flex items-center justify-center'>
            <div className='wrapper w-full flex items-center justify-between'>
                <div className="header-left-content">
                    <h1>Your business find SEO Solutions</h1>
                    <h2>Me old mucker knackered a load of old tosh wellies amongst lost the plot.!</h2>
                    <a href="/">PURCHASE NOW</a>
                    <p>Join over 100+ real people who have worked with us</p>
                    <div>
                    <Image width={170} height={50} src="/assets/home-two/widget.webp" alt="wedget" />
                    <h3>ENQUIRE US</h3>
                    </div>
                </div>
                <div className="header-right-content">
                    <img src="/assets/home-two/hero-img.webp" alt="hero-img" />
                    <img src="/assets/home-two/hero-card.svg" alt="hero-card" />
                </div>
            </div>
        </header>
    )
}