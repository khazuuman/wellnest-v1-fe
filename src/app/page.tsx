"use client";
import FeedbackSlider from '../components/Slider/FeedbackSlider.jsx'
import { ArrowLongRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { SlArrowUp, SlEnvolopeLetter } from "react-icons/sl";
import { IoHomeOutline, IoEarthOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Map from '@/components/Map';

export default function Home() {

  const slides = [
    {
      content: "“ The scent is refreshing and sweet, but not too overwhelming, and it reminds me of strolling on the beaches of Hawaii, i.e. heaven. I also love the cute, millennial-pink color...”",
      name: "Rebeca Villalobos"
    },
    {
      content: "“ The scent is refreshing and sweet, but not too overwhelming, and it reminds me of strolling on the beaches of Hawaii, i.e. heaven. I also love the cute, millennial-pink color...”",
      name: "Rebeca Villalobos"
    },
    {
      content: "“ The scent is refreshing and sweet, but not too overwhelming, and it reminds me of strolling on the beaches of Hawaii, i.e. heaven. I also love the cute, millennial-pink color...”",
      name: "Rebeca Villalobos"
    }
  ]

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative bg-white z-10 select-none">
      <div
        onClick={scrollToTop}
        className={`
        w-[50px] h-[50px] flex justify-center items-center cursor-pointer rounded-full 
        fixed bottom-10 right-3 z-50 transition-all duration-300 bg-amber-700
        ${showButton ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      >
        <SlArrowUp className='w-[20px] h-[20px]' />
      </div>
      {/* banner */}
      <div className="relative">
        <img draggable="false" className='w-screen h-screen object-cover' src="/images/slide.webp" alt="" />
        <img draggable="false" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/images/center_slide.webp" alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center mt-[70px]">
          <h4 className="font-beautiella text-amber-700 md:text-[60px] text-[40px] h-fit leading-0 mb-4">Handcrafted</h4>
          <h2 className="font-heebo text-stone-950 md:text-[65px] lg-[72px] text-[40px] mb-3">New Arrivals</h2>
          <p className="font-heebo md:text-[16px]  text-[13px] text-neutral-500 mb-8">Ignite the energy, share the vitality!</p>
          <a className="md:px-[30px] md:py-[16px] px-[20px] py-[12px] bg-amber-700 flex items-center group hover:bg-stone-950 transition-colors duration-200" href="">
            <span className="font-heebo md:text-[16px] text-[13px] text-white mr-[10px]">Discovery Now</span>
            <ArrowLongRightIcon className="w-[20px] h-[22px] group-hover:animate-wiggle" />
          </a>
        </div>
      </div>
      {/* introduction part 1*/}
      <div className="w-screen h-fit py-[90px]">
        <div className="w-[1320px] h-fit mx-auto flex flex-col [@media(min-width:1300px)]:flex-row">
          <div className="w-screen [@media(min-width:1300px)]:w-[50%] px-[15px] flex-col justify-center mb-10">
            <img draggable="false" className="[@media(min-width:1300px)]:w-[630px] [@media(min-width:630px)]:h-[630px] 
            w-screen [@media(min-width:900px)]:h-[700px] h-[600px] object-[center_20%] object-cover
            " src="/images/ads1_img/ads_img1.jpg" alt="" />
            <div className="mt-[30px] flex flex-col w-screen [@media(min-width:1300px)]:w-[100%] items-center
            [@media(min-width:1300px)]:items-start ">
              <div className="relative w-fit mb-[10px]">
                <img draggable="false" className="z-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112px] h-[101px] grayscale brightness-85 contrast-100" src="\images\bg_text\bg-h1.webp" alt="" />
                <span className="z-20 relative font-beautiella text-[60px] text-amber-700">About us</span>
              </div>
              <h2 className="font-heebo [@media(min-width:1300px)]:text-[40px]/10 text-[30px]/8 mb-[20px] text-stone-950">The Olars Candle Story</h2>
              <p className="text-[20px] font-heebo text-stone-950 mb-[10px] text-center">We like to think of our wares as full sensory experiences!</p>
              <p className="font-heebo pr-15 text-[16px]/[28px] text-neutral-500 mb-[10px] text-center [@media(min-width:1300px)]:text-start">Porttitor massa id neque aliquam, diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Consectetur a erat nam dui id cuso ornare arcu odio ut sem.</p>
              <a className="px-[30px] py-[16px] mt-[20px] bg-amber-700 flex items-center group hover:bg-stone-950 transition-colors duration-200 w-fit" href="">
                <span className="font-heebo text-[16px] text-white mr-[10px]">Discovery Now</span>
                <ArrowLongRightIcon className="w-[20px] h-[22px] group-hover:animate-wiggle" />
              </a>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="w-screen px-5 [@media(min-width:1300px)]:w-[521px] [@media(min-width:1300px)]:ml-auto [@media(min-width:1300px)]:px-0">
              <img draggable="false" className="w-full h-[521px] object-center object-cover" src="\images\ads1_img\ads_img2.jpg" alt="" />
              <h2 className="text-[30px]/[36px] font-heebo my-[30px] text-black text-center [@media(min-width:1300px)]:text-start">Handcrafted by <br /> a team of artisans.</h2>
            </div>
            <div className="w-screen px-5 [@media(min-width:1300px)]:w-[521px] [@media(min-width:1300px)]:ml-auto [@media(min-width:1300px)]:px-0">
              <img draggable="false" className="w-full h-[521px] object-center object-cover" src="\images\ads1_img\ads_img3.jpg" alt="" />
              <h2 className="text-[30px]/[36px] font-heebo my-[30px] text-black text-center [@media(min-width:1300px)]:text-start">We use 100% soy <br /> wax derived.</h2>
            </div>
          </div>
        </div>
      </div>
      {/* product list title */}
      <div className="py-[90px] px-[15px] bg-stone-100">
        <div className="h-fit">
          <div className="relative w-screen flex justify-center">
            <img className="z-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit grayscale brightness-100 contrast-100" src="\images\bg_text\bg-h2.webp" alt="" />
            <span className="z-20 relative font-beautiella text-[60px] text-amber-700">Best for you</span>
          </div>
          <h2 className="font-heebo [@media(min-width:1300px)]:text-[40px]/10 text-[30px]/8 mt-[10px] mb-[50px] text-black w-screen flex justify-center">New Collection Best Seller</h2>
        </div>
        {/* product list */}
        <div className="grid w-[80%] mx-auto px-[15px] justify-center items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))" }}>
          <div className='px-[15px] mb-[30px]'>
            <a className="relative w-full h-fit flex flex-col group" href="">
              <div className="w-full h-[100%] overflow-hidden border border-stone-300 relative">
                <img className="object-cover object-center transition-opacity duration-300" src="\images\product_demo_img\product_1.webp" alt="" />
                <img className="object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-100 origin-center group-hover:scale-105" src="\images\product_demo_img\product_2.webp" alt="" />
                {/* product tool */}
                <div className="absolute left-1/2 top-1/2 -translate-x-0 -translate-y-1/2 flex flex-row gap-1 opacity-0 transition-all
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
              <span className="absolute top-0 left-0 w-[43px] h-[22px] bg-amber-500 font-heebo text-[14px] text-center">Sale</span>
              <span className="absolute top-0 right-0 w-[74px] h-[24px] text-red-600 font-heebo border border-stone-300 text-center font-[700] text-[14px]">Sold out</span>
            </a>
            <span className="block text-[16px] text-black mt-[25px] mb-[10px] font-heebo hover:text-amber-700 cursor-pointer transition-colors duration-200">Eucalyptus Mint 3-Wick Candle</span>
            <span className="font-heebo text-[16px] text-stone-800 tracking-wide">$50.00</span>
          </div>

          <div className='px-[15px] mb-[30px]'>
            <a className="relative w-full h-fit flex flex-col group" href="">
              <div className="w-full h-[100%] overflow-hidden border border-stone-300 relative">
                <img className="object-cover object-center transition-opacity duration-300" src="\images\product_demo_img\product_1.webp" alt="" />
                <img className="object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-100 origin-center group-hover:scale-105" src="\images\product_demo_img\product_2.webp" alt="" />
                {/* product tool */}
                <div className="absolute left-1/2 top-1/2 -translate-x-0 -translate-y-1/2 flex flex-row gap-1 opacity-0 transition-all
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
              <span className="absolute top-0 left-0 w-[43px] h-[22px] bg-amber-500 font-heebo text-[14px] text-center">Sale</span>
              <span className="absolute top-0 right-0 w-[74px] h-[24px] text-red-600 font-heebo border border-stone-300 text-center font-[700] text-[14px]">Sold out</span>
            </a>
            <span className="block text-[16px] text-black mt-[25px] mb-[10px] font-heebo hover:text-amber-700 cursor-pointer transition-colors duration-200">Eucalyptus Mint 3-Wick Candle</span>
            <span className="font-heebo text-[16px] text-stone-800 tracking-wide">$50.00</span>
          </div>
          <div className='px-[15px] mb-[30px]'>
            <a className="relative w-full h-fit flex flex-col group" href="">
              <div className="w-full h-[100%] overflow-hidden border border-stone-300 relative">
                <img className="object-cover object-center transition-opacity duration-300" src="\images\product_demo_img\product_1.webp" alt="" />
                <img className="object-cover absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 scale-100 origin-center group-hover:scale-105" src="\images\product_demo_img\product_2.webp" alt="" />
                {/* product tool */}
                <div className="absolute left-1/2 top-1/2 -translate-x-0 -translate-y-1/2 flex flex-row gap-1 opacity-0 transition-all
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
              <span className="absolute top-0 left-0 w-[43px] h-[22px] bg-amber-500 font-heebo text-[14px] text-center">Sale</span>
              <span className="absolute top-0 right-0 w-[74px] h-[24px] text-red-600 font-heebo border border-stone-300 text-center font-[700] text-[14px]">Sold out</span>
            </a>
            <span className="block text-[16px] text-black mt-[25px] mb-[10px] font-heebo hover:text-amber-700 cursor-pointer transition-colors duration-200">Eucalyptus Mint 3-Wick Candle</span>
            <span className="font-heebo text-[16px] text-stone-800 tracking-wide">$50.00</span>
          </div>
        </div>
      </div>
      {/* introduction part 2 */}
      <div className="relative bg-[image:var(--bg-layout1)] bg-cover bg-center py-20">
        <div className="z-20 flex flex-col [@media(min-width:1300px)]:flex-row [@media(min-width:1300px)]:w-[1320px] h-fit mx-auto px-[15px] items-center w-screen">
          <div className="px-[15px]">
            <h2 className="font-heebo text-[40px]/[48px] mt-[10px] mb-[50px] text-black text-center">Holistic Wellness & <br /> Thoughtfully Curated Gifts</h2>
            <div className="flex h-fit mb-[35px]">
              <img draggable="false" className="w-[65px] h-max mr-[21px] object-contain" src="\images\ads2_img\ads2_img2(2).jpg" alt="" />
              <div className="flex flex-col justify-center">
                <div className="text-[20px]/[40px] font-heebo text-black">Naturally Sourced</div>
                <p className="text-neutral-500 text-[16px]/[26px] font-heebo">Each product is made from plant-based, organic ingredients.</p>
              </div>
            </div>
            <div className="flex h-fit mb-[35px]">
              <img draggable="false" className="w-[65px] h-max mr-[21px] object-contain" src="\images\ads2_img\ads2_img3.jpg" alt="" />
              <div className="flex flex-col justify-center">
                <div className="text-[20px]/[40px] font-heebo text-black">Eco-Conscious Packaging</div>
                <p className="text-neutral-500 text-[16px]/[26px] font-heebo">We use recyclable, biodegradable materials for a greener planet.</p>
              </div>
            </div>
            <div className="flex h-fit mb-[35px]">
              <img draggable="false" className="w-[65px] h-max mr-[21px] object-contain" src="\images\ads2_img\ads2_img4.jpg" alt="" />
              <div className="flex flex-col justify-center">
                <div className="text-[20px]/[40px] font-heebo text-black">Boosts Immunity & Energy</div>
                <p className="text-neutral-500 text-[16px]/[26px] font-heebo">Packed with antioxidants, vitamins, and herbal blends for daily vitality.</p>
              </div>
            </div>
            <div className="flex h-fit mb-[35px]">
              <img draggable="false" className="w-[65px] h-max mr-[21px] object-contain" src="\images\ads2_img\ads2_img1.jpg" alt="" />
              <div className="flex flex-col justify-center">
                <div className="text-[20px]/[40px] font-heebo text-black">Perfect for Gifting</div>
                <p className="text-neutral-500 text-[16px]/[26px] font-heebo">Elegantly packaged — ideal for birthdays, celebrations, or self-care moments.</p>
              </div>
            </div>
          </div>
          <div className="px-[15px]">
            <img draggable="false" className="object-contain w-full h-full" src="\images\ads2_img\ads2_img5.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* feedback overview */}
      <div className="w-screen h-max bg-[image:var(--bg-layout3)] py-[120px]">
        <div className="w-full h-fit flex flex-col justify-center items-center">
          <div className="relative inline-block">
            <img src="/images/bg_text/bg_h3.webp" alt="Customer Said" className="block" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[10px] font-beautiella text-[60px] whitespace-nowrap leading-none text-amber-700">
              Customer said
            </div>
          </div>
          <h2 className="font-heebo text-[40px]/[48px] mt-[10px] mb-[50px] text-black">All That Kind Words</h2>
        </div>
        <div className="mx-auto w-screen flex items-center justify-center">
          <FeedbackSlider slides={slides} />
        </div>
      </div>
      {/* introduction part 3 */}
      <div className="py-[90px]">
        <div className="flex flex-col justify-center items-center [@media(min-width:1300px)]:items-start [@media(min-width:1300px)]:w-[1320px] [@media(min-width:1300px)]:flex-row mx-auto">
          <div className="px-[15px] [@media(min-width:1300px)]:w-[50%]">
            <img draggable="false" className="w-[100%] h-[80%] object-contain" src="\images\ads3_img\ads3_img1.jpg" alt="" />
          </div>
          <div className="relative px-[15px] [@media(min-width:1300px)]:w-[50%] flex flex-col justify-start">
            <div className="pt-[50px] pl-[65px] pb-[15px] w-full h-full flex flex-col justify-center items-center [@media(min-width:1300px)]:block">
              <div className="w-fit">
                <div className="relative mt-[10px] font-beautiella text-[60px] whitespace-nowrap leading-none text-amber-700">
                  <img draggable="false" className="absolute z-10 left-1/2 top-0.5 -translate-x-1/2 -translate-y-1/2" src="\images\bg_text\bg-h4.webp" alt="Customer Said" />
                  <span className="relative z-20">Just for you</span>
                </div>
              </div>
              <h2 className="font-heebo text-[40px]/[48px] text-black mt-[10px] mb-[20px] text-center [@media(min-width:1300px)]:text-start">The Seasonal Wellness Box</h2>
              <ul className="text-[20px]/[36px] font-heebo text-black text-center [@media(min-width:1300px)]:text-start">
                <li>Thoughtfully Curated for Every Mood.</li>
                <li>Beautifully Designed Seasonal Packaging.</li>
                <li>Crafted to Restore Balance & Joy.</li>
              </ul>
              <a className="px-[30px] py-[16px] mt-[40px] bg-amber-700 flex items-center group hover:bg-stone-950 transition-colors duration-200 w-fit" href="">
                <span className="font-heebo text-[16px] text-white mr-[10px]">Discovery Now</span>
                <ArrowLongRightIcon className="w-[20px] h-[22px] group-hover:animate-wiggle" />
              </a>
            </div>
            <img draggable="false" className="[@media(min-width:1300px)]:w-[55%] pt-5 [@media(min-width:1300px)]:absolute 
              [@media(min-width:1300px)]:top-100 [@media(min-width:1300px)]:right-0" src="\images\ads3_img\ads3_img2.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* contact */}
      <div id='contact' className='[@media(min-width:1300px)]:w-[1320px] w-screen mx-auto pb-30 font-heebo select-text'>
        <div className='flex flex-col [@media(min-width:1300px)]:flex-row gap-5 items-center justify-center'>
          <div className='[@media(min-width:1300px)]:w-[40%] w-[100%] px-5 [@media(min-width:1300px)]:px-0'>
            <h2 className='text-[30px] mb-[15px] text-black'>Visit one of our agency locations or contact us today.</h2>
            <div className='text-[14px] mb-[10px] text-black'>Apollo themes features beautifully sectioned layout that allows you to showcase featured items for each category on the homepage. It comes with many different homepage layouts, so you can choose any suitable homepage for you store.</div>
            <h5 className='text-[14px] mb-[2.5px] text-black'>Head Office</h5>
            <ul>
              <li className='py-[2px] text-[14px]/[33px] text-black flex gap-2 items-center '><IoHomeOutline className='w-5 h-5' /> <span>123 Sky Tower, West 21th Street, Suite 721, NY</span></li>
              <li className='py-[2px] text-[14px]/[33px] text-black flex gap-2 items-center'><BsTelephone className='w-5 h-5' /> <span>+844 123 456 789</span></li>
              <li className='py-[2px] text-[14px]/[33px] text-black flex gap-2 items-center'><SlEnvolopeLetter className='w-5 h-5' /> <span>demo@demo.com</span></li>
              <li className='py-[2px] text-[14px]/[33px] text-black flex gap-2 items-center'><IoEarthOutline className='w-5 h-5' /> <span>www.example.com</span></li>
            </ul>
          </div>
          <div className='[@media(min-width:1300px)]:w-[60%] w-screen'>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <span className="group/tooltip relative py-[9px] px-[11px] w-fit bg-black flex flex-col justify-center items-center 
              hover:bg-amber-700 hover:translate-y-[-10px] transition-all ease-out duration-300 overflow-visible">
                    <HeartIcon className=" text-white w-[18px] h-[22px]" />
                    <span className="flex flex-col justify-center items-center text-center absolute opacity-0 bottom-[100%] translate-x-1/2 translate-y-[10px]
                    group-hover/tooltip:translate-x-0 group-hover/tooltip:translate-y-[2px] group-hover/tooltip:opacity-100 transition-all duration-300 ease-out">
                      <span className="rounded-sm text-nowrap w-full h-[22.5px] font-heebo bg-amber-700 text-[10px] leading-[12.5px] px-[10px] py-[4px]">Add To Wishlist</span>
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-700"></div>
                    </span>
                  </span>
                  <span className="group/tooltip relative py-[9px] px-[11px] w-fit bg-black flex flex-col justify-center items-center 
              hover:bg-amber-700 hover:translate-y-[-10px] transition-all ease-out duration-300 overflow-visible">
                    <ShoppingCartIcon className=" text-white w-[18px] h-[22px]" />
                    <span className="flex flex-col justify-center items-center text-center absolute opacity-0 bottom-[100%] translate-x-1/2 translate-y-[10px] 
                    group-hover/tooltip:translate-x-0 group-hover/tooltip:translate-y-[2px] group-hover/tooltip:opacity-100 transition-all duration-300 ease-out">
                      <span className="rounded-sm w-full text-nowrap h-[22.5px] font-heebo bg-amber-700 text-[10px]/[12.5px] px-[10px] py-[4px]">Add To Cart</span>
                      <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-700"></div>
                    </span>
                  </span> */}