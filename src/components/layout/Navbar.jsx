'use client';
import React, {useState, useEffect, useRef} from 'react'
import { ChevronDownIcon, UserIcon, ShoppingBagIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {

     const [isUserOpen, setIsUserOpen] = useState(false);


    return (
        <div className='grid grid-cols-12 px-[60px] w-screen h-[88px] bg-white font-heebo'>
            <div className='col-span-3 text-black select-none cursor-pointer flex flex-col justify-center w-fit'>
                <h1 className='font-macondo text-3xl font-normal w-full flex justify-center mb-1'>WELLNEST</h1>
                <p className='font-cinzel text-[13px] font-bold text-stone-500 w-full'>Thoughtful. Natural. Wellnest.</p>
            </div>
            <div className='h-full col-span-6 flex items-center justify-center'>
                <ul className='flex items-center h-full'>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a className="pr-[30px] flex justify-center gap-1" href="">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Home
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </a>
                        <div>
                            {/* dropdown menu */}
                        </div>
                    </li>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a className="px-[30px] flex justify-center gap-1" href="">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Shop
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                            <ChevronDownIcon className="w-4 text-black group-hover:text-amber-600" />
                        </a>
                    </li>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a className="px-[30px] flex justify-center gap-1" href="">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Blogs
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </a>
                    </li>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a className="px-[30px] flex justify-center gap-1" href="">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Pages
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </a>
                    </li>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a className="pl-[30px] flex justify-center gap-1" href="">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Contact
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='col-span-3 flex justify-end items-center gap-5'>
                <div className='relative w-[45px] h-[45px] px-[10px] py-[10px]'>
                    <a href='#' 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsUserOpen(!isUserOpen)
                    }}
                    className='w-max h-max'>
                        <UserIcon className='w-max h-max text-black' />
                    </a>
                    <div className={`absolute z-30 bg-white flex flex-col gap-2 w-fit h-fit py-3 px-5 border-1 border-stone-300 font-heebo text-[14px] text-stone-500
                    top-full mt-2 right-0 transition-all duration-300 ${isUserOpen ? 'opacity-100 translate-y ' : 'opacity-0 translate-y'}`}>
                        <p><a href="">Sign in</a></p>
                        <p><a href="">Register</a></p>
                        <p><a href="">Checkout</a></p>
                    </div>
                </div>
                <div className='w-[45px] h-[45px] px-[10px] py-[10px]'>
                    <a href='' className='group w-max h-max'>
                        <ShoppingBagIcon className='w-max h-max text-black group-hover:text-stone-700' />
                    </a>
                    <div>

                    </div>
                </div>
                <div className='w-[45px] h-[45px] px-[10px] py-[10px]'>
                    <a href='' className='group w-max h-max'>
                        <HeartIcon className='w-max h-max text-black group-hover:text-red-400' />
                    </a>
                </div>
                <div className='w-[45px] h-[45px] px-[10px] py-[10px]'>
                    <a href='' className='w-max h-max'>
                        <MagnifyingGlassIcon className='w-max h-max text-black' />
                    </a>
                </div>
            </div>
        </div>
    )
}
