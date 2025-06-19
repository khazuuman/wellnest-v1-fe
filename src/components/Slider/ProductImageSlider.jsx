'use client';
import React, { useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function ProductImageSlider({ slides }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemWidth = 400;

    const nextSlide = () => {
        if (currentIndex >= slides.length - 1) return;
        setCurrentIndex(currentIndex + 1);
    }

    const prevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className='relative w-[400px] h-[450px] overflow-x-hidden box-border'>
            <div className='flex transition ease-out duration-300 h-full'
                style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
                {slides.map((s, i) => (
                    <img
                        key={i}
                        src={s}
                        alt={`slide-${i}`}
                        className='object-cover w-full h-full'
                    />
                ))}
            </div>
            <div className='absolute w-full h-full inset-0 flex justify-between items-center pointer-events-none'>
                <ChevronLeftIcon onClick={prevSlide} className='w-5 h-5 text-black cursor-pointer pointer-events-auto' />
                <ChevronRightIcon onClick={nextSlide} className='w-5 h-5 text-black cursor-pointer pointer-events-auto' />
            </div>
        </div>
    )
}
