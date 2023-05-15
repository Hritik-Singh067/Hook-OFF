import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4000}>
        <div >
          <img className='relative' loading='lazy' src="/banner.png" alt='Banner image 1' width={50} height={50} />
          <a className='absolute bottom-10 right-10 text-white' href="/">VIEW MORE &GT;</a>
        </div>
        <div>
          <img loading='lazy' src="/banner.png" alt='Banner image 2' width={10} height={10} />
          <a className='absolute bottom-10 right-10 text-white'  href="/">VIEW MORE &GT;</a>
        </div>
        <div>
          <img loading='lazy' src="/banner.png" alt='Banner image 3' width={50} height={50} />
          <a className='absolute bottom-10 right-10 text-white' href="/">VIEW MORE &#62;</a>
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
