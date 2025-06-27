import React, { useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ProductImageSlider from './Slider/ProductImageSlider.jsx'
import useClickOutside from '@/hooks/useClickOutside.js';

export default function ProductCard({ slides, proName, addPrice, mainPrice, isSale, isSoldOut, isNew, desc }) {
    const [isProviewOpen, setIsProviewOpen] = useState(false);
    const proviewRef = useRef(null);
    useClickOutside(proviewRef, () => setIsProviewOpen(false));
    return (
        <div className='px-[15px] mb-[30px] h-[400px] box-border'>
            <div className={`top-0 right-0 fixed z-80 ${isProviewOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className='relative'>
                    <div className='bg-stone-900 w-screen h-screen opacity-40'></div>
                    <div ref={proviewRef} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(min-width:840px)]:w-[840px] [@media(min-width:840px)]:h-[510px] 
                bg-white opacity-100 box-border p-[10px] w-screen h-screen'>
                        <div className='relative flex [@media(min-width:840px)]:flex-row  flex-col w-full h-full justify-center items-center'>
                            <IoMdClose onClick={() => setIsProviewOpen(false)} className='absolute w-5 h-5 top-1 right-1 text-black cursor-pointer' />
                            <div className='w-[55%] px-[10px] h-full flex justify-center items-center'>
                                <div className='w-[350px] h-full'>
                                    <ProductImageSlider slides={slides} />
                                </div>
                            </div>
                            <div className='[@media(min-width:840px)]:w-[45%] w-[100%] [@media(min-width:840px)]:px-[10px] px-10 h-full text-black font-heebo flex flex-col justify-center'>
                                <h1 className='text-[36px] mb-[5px]'>{proName}</h1>
                                <div className='flex gap-4 items-center mb-5'>
                                    <span className={`text-[12px] line-through text-stone-500 ${addPrice === null ? 'opacity-0' : 'opacity-100'}`}>{addPrice}</span>
                                    <span className='text-[18px] text-amber-700'>{mainPrice}</span>
                                    <span className={`text-[12px] text-white px-[15px] py-[5px] rounded-2xl bg-black font-bold ${isSale ? 'block' : 'hidden'}`}>Sale</span>
                                </div>
                                <span>{desc}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="relative w-full h-[300px] flex flex-col group">
                <div className="w-full h-[100%] overflow-hidden border border-stone-300 relative flex justify-center items-center">
                    <img className="object-contain object-center transition-opacity duration-300" src={slides[0]} alt="" />
                    <img className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 
                    group-hover:opacity-100 scale-100 origin-center group-hover:scale-105" src={slides[1]} alt="" />
                    {/* product tool */}
                    <div onClick={() => setIsProviewOpen(!isProviewOpen)} className="absolute cursor-pointer left-1/2 top-1/2 -translate-x-0 -translate-y-1/2 flex flex-row gap-1 opacity-0 transition-all
              duration-300 group-hover:-translate-x-1/2 group-hover:opacity-100 ">
                        <span className="group/tooltip relative py-[9px] px-[11px] w-fit bg-black flex flex-col justify-center items-center 
              hover:bg-amber-700 hover:translate-y-[-10px] transition-all ease-out duration-300 overflow-visible">
                            <MagnifyingGlassIcon className=" text-white w-[18px] h-[22px]" />
                            <span className="flex flex-col justify-center items-center text-center absolute opacity-0 bottom-[100%] translate-x-1/2 translate-y-[10px] 
                    group-hover/tooltip:translate-x-0 group-hover/tooltip:translate-y-[2px] group-hover/tooltip:opacity-100 transition-all duration-300 ease-out">
                                <span className="rounded-sm w-full text-nowrap h-[22.5px] font-heebo bg-amber-700 text-[10px]/[12.5px] px-[10px] py-[4px]">Quick View</span>
                                <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-700"></div>
                            </span>
                        </span>
                    </div>
                </div>
                <span className={`absolute top-0 left-0 w-fit px-2 h-[22px] bg-amber-500 font-heebo text-[14px] text-center ${isNew ? 'block' : 'hidden'}`}>New Arrival</span>
                <span className={`absolute top-0 left-0 w-[43px] h-[22px] bg-amber-500 font-heebo text-[14px] text-center ${isSale ? 'block' : 'hidden'}`}>Sale</span>
                <span className={`absolute top-0 right-0 w-[74px] h-[24px] text-red-600 font-heebo border border-stone-300 text-center font-[700] text-[14px]
                    ${isSoldOut ? 'block' : 'hidden'}`}>Sold out</span>
            </a>
            <span className="block text-[16px] text-black mt-[25px] mb-[10px] font-heebo hover:text-amber-700 cursor-pointer transition-colors duration-200">{proName}</span>
            <span className="font-heebo text-[16px]/[10px] text-stone-800 tracking-wide">{mainPrice}</span>
        </div>
    )
}
