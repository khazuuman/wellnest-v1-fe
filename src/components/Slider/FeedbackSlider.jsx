'use client';
import React, { useState, useEffect } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

function FeedbackSlider({ slides }) {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => clearInterval(interval); 
    }, [current]);

    return (
        <div className="relative w-full h-80 [@media(min-width:750px)]:h-50 [@media(min-width:880px)]:h-[150px] mx-auto overflow-x-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((s, index) => (
                    <div key={index} className="min-w-full px-[100px] [@media(min-width:750px)]:px-[160px] text-center flex flex-col gap-5">
                        <p className="text-[20px]/[30px] italic font-heebo text-black">{s.content}</p>
                        <p className="text-[16px]/[24px] font-heebo text-black">{s.name}</p>
                    </div>
                ))}
            </div>

            <ChevronRightIcon className='cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 text-black w-[42px] h-[42px]' onClick={nextSlide} />
            <ChevronLeftIcon className='cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 text-black w-[42px] h-[42px]' onClick={prevSlide} />

            <div className='flex absolute justify-center gap-2 bottom-0 left-1/2 -translate-x-1/2'>
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {setCurrent(i);}}
                            key={"circle" + i}
                            className={`cursor-pointer rounded-full w-2 h-2 ${i == current ? 'bg-black' : 'bg-white border border-stone-950'}`}>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FeedbackSlider