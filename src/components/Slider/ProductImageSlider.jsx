'use client';
import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ProductImageSlider({ slides, onSelect }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemHeight = 200;
    const visibleItems = 3;

    const nextSlide = () => {
        if (currentIndex >= slides.length - visibleItems) return;
        setCurrentIndex(currentIndex + 1);
    }

    const prevSlide = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className='relative px-1 w-full h-[600px] overflow-y-hidden box-border'>
            <div className='flex flex-col transition ease-out duration-300'
                style={{ transform: `translateY(-${currentIndex * itemHeight}px)` }}>
                {slides.map((s, i) => (
                    <img onClick={() => onSelect(s)} key={i} className='w-full h-[200px] object-cover cursor-pointer' src={s} alt={`slide-${i}`} />
                ))}
            </div>
            <div className='absolute w-full h-full inset-0 flex flex-col justify-between items-center pointer-events-none'>
                <ChevronUpIcon onClick={prevSlide} className='w-5 h-5 text-black cursor-pointer pointer-events-auto' />
                <ChevronDownIcon onClick={nextSlide} className='w-5 h-5 text-black cursor-pointer pointer-events-auto' />
            </div>
        </div>
    )
}
