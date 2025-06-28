'use client';
import React, { useRef, useState } from 'react'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { RiMenu3Fill, RiMenuFold2Line } from "react-icons/ri";
import useClickOutside from '@/hooks/useClickOutside';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useClickOutside(menuRef, () => setIsMenuOpen(false));

    return (
        <div className='relative px-[100px] w-screen h-[80px] bg-white font-heebo flex justify-between items-center select-none'>
            <div
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='absolute top-1/2 -translate-y-1/2 right-10 md:hidden block cursor-pointer'>
                <div className='flex justify-center items-center text-black'>
                    <RiMenu3Fill className='w-5 h-5' />
                </div>
            </div>

            <div ref={menuRef} className={`absolute h-screen w-50 top-0 bg-white z-50 border border-x-stone-300 py-10 px-5 transition-all duration-300 ${isMenuOpen ? 'right-0' : '-right-100'}`}>
                <div className='relative w-full h-full flex 
            justify-center items-center flex-col'>
                    <RiMenuFold2Line onClick={() => setIsMenuOpen(false)} className='w-5 h-5 absolute top-0 left-0 text-black cursor-pointer' />
                    <a
                        onClick={() => {
                            const target = document.getElementById('contact');
                            target?.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="flex justify-center gap-1 group mb-5 w-full items-center cursor-pointer">
                        <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                            Contact
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </a>
                    <div className='flex justify-center items-center gap-10'>
                        <a className='group' href="https://www.facebook.com/profile.php?id=61577228763442&mibextid=wwXIfr" target='_blank'><FaFacebookF className='w-5 h-5 text-stone-900 group-hover:text-blue-600 transition-all duration-200' /></a>
                        <a className='group' href="https://www.tiktok.com/@wellnest_giftbox?lang=vi-VN" target='_blank'><FaTiktok className='w-5 h-5 text-stone-900 group-hover:text-stone-600 transition-all duration-200' /></a>
                    </div>
                </div>
            </div>

            <div className='h-full flex items-center justify-start'>
                <ul className='flex items-center h-full md:opacity-100 md:pointer-events-auto opacity-0 pointer-events-none'>
                    <li className="h-full flex items-center group relative cursor-pointer">
                        <a
                            onClick={() => {
                                const target = document.getElementById('contact');
                                target?.scrollIntoView({ behavior: "smooth" })
                            }}
                            className="pl-[30px] flex justify-center gap-1" href="#">
                            <span className="flex justify-center items-center text-black text-[16px] relative group-hover:text-amber-600">
                                Contact
                                <span className="absolute left-0 -bottom-1 h-[1px] w-full scale-x-0 origin-right group-hover:origin-left bg-amber-600 transition-transform duration-300 group-hover:scale-x-100" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='z-20 w-[170px] h-[170px] sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden select-none flex
            justify-center items-center absolute top-1 -translate-x-1/2 left-1/2 bg-white'>
                <img draggable="false" className='w-full h-full object-contain bg-white' src="\images\Wellnest LOGO (1).png" alt="" />
            </div>
            <div className='flex justify-center items-center gap-10 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'>
                <a className='group' href="https://www.facebook.com/profile.php?id=61577228763442&mibextid=wwXIfr" target='_blank'><FaFacebookF className='w-5 h-5 text-stone-900 group-hover:text-blue-600 transition-all duration-200' /></a>
                <a className='group' href="https://www.tiktok.com/@wellnest_giftbox?lang=vi-VN" target='_blank'><FaTiktok className='w-5 h-5 text-stone-900 group-hover:text-stone-600 transition-all duration-200' /></a>
            </div>
        </div>
    )
}
