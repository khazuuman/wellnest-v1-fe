import React from 'react'

function Footer() {
  return (
    <div className='bg-[image:var(--bg-layout2)] bg-white bg-cover bg-bottom border-none'>
      {/* service */}
      <div>
        <div className="[@media(min-width:1300px)]:w-[1320px] w-screen mx-auto px-[15px] grid grid-cols-4 pb-[90px]">
          <div className="col-span-1 px-[15px] border-r border-r-stone-300 flex flex-col items-center">
            <img className="w-[45px] h-[45px] object-contain mb-[30px]" src="\images\service_icon\service_icon1.webp" alt="" />
            <h3 className="font-heebo text-[20px]/[24px] text-black mb-[10px] text-center">Free Easy Return</h3>
            <p className="font-heebo text-[16px]/[20px] text-neutral-500 text-center">Return to 7 days</p>
          </div>
          <div className="col-span-1 px-[15px] border-r border-r-stone-300 flex flex-col items-center">
            <img className="w-[45px] h-[45px] object-contain mb-[30px]" src="\images\service_icon\service_icon2.webp" alt="" />
            <h3 className="font-heebo text-[20px]/[24px] text-black mb-[10px] text-center">Free Delivery</h3>
            <p className="font-heebo text-[16px]/[20px] text-neutral-500 text-center">Orders over $499</p>
          </div>
          <div className="col-span-1 px-[15px] border-r border-r-stone-300 flex flex-col items-center">
            <img className="w-[45px] h-[45px] object-contain mb-[30px]" src="\images\service_icon\service_icon3.webp" alt="" />
            <h3 className="font-heebo text-[20px]/[24px] text-black mb-[10px] text-center">All Day Support</h3>
            <p className="font-heebo text-[16px]/[20px] text-neutral-500 text-center">24/7 Support care</p>
          </div>
          <div className="col-span-1 px-[15px] flex flex-col items-center">
            <img className="w-[45px] h-[45px] object-contain mb-[30px]" src="\images\service_icon\service_icon4.webp" alt="" />
            <h3 className="font-heebo text-[20px]/[24px] text-black mb-[10px] text-center">Secure Checkout</h3>
            <p className="font-heebo text-[16px]/[20px] text-neutral-500 text-center">100% protected by Paypal</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-screen h-fit'>
        <div className='w-[60%] border-t border-stone-400 justify-center'>
          <div className='pt-[40px] pb-[80px] flex justify-center'>
            <span className='font-heebo text-[14px] text-neutral-500'>Copyright © 2022 Olars. All Rights Reserved |
              <span className='text-black text-[16px] font-bold'> (+01) 123 567 99</span>
              <span> | </span>
              <a className='text-black' href="">demo@demo.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer