"use client";
import FeedbackSlider from '../components/Slider/FeedbackSlider.jsx'
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { SlArrowUp, SlEnvolopeLetter } from "react-icons/sl";
import { IoHomeOutline, IoEarthOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import Map from '@/components/Map';
import { useInView } from '@/hooks/useInView';
import Chatbot from '../components/Chatbot'
import ProductCard from '@/components/ProductCard';

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

  const summerbox = [
    '/images/product_demo_img/summerbox2.jpg',
    '/images/product_demo_img/summerbox1.jpg',
    '/images/product_demo_img/summerbox3.jpg',
    '/images/product_demo_img/summerbox4.jpg',
  ]

  const springbox = [
    '/images/product_demo_img/springbox1.jpg',
    '/images/product_demo_img/springbox2.jpg',
    '/images/product_demo_img/springbox3.jpg',
    '/images/product_demo_img/springbox4.jpg',
  ]

  const winterbox = [
    '/images/product_demo_img/winterbox1.jpg',
    '/images/product_demo_img/winterbox2.jpg',
    '/images/product_demo_img/winterbox3.jpg',
    '/images/product_demo_img/winterbox4.jpg',
  ]

  const fallbox = [
    '/images/product_demo_img/fallbox1.jpg',
    '/images/product_demo_img/fallbox2.jpg',
    '/images/product_demo_img/fallbox3.png',
    '/images/product_demo_img/fallbox4.png',
  ]

  const rechargeSet = [
    '/images/product_demo_img/recharge.jpg',
  ]

  const deepLoveSet = [
    '/images/product_demo_img/deeplove.jpg',
  ]

  const focusSet = [
    '/images/product_demo_img/focus.jpg',
  ]

  const candleLimeBasil = [
    '/images/product_demo_img/candleLimeBasilAndCitrus.webp',
  ]

  const candleLove = [
    '/images/product_demo_img/candleLoveOfTheCity.webp',
  ]

  const candleTea = [
    '/images/product_demo_img/candleMakeTea.jpg',
  ]

  const candleMini = [
    '/images/product_demo_img/candleSetMini.jpg',
  ]

  const cashew = [
    '/images/product_demo_img/cashew.webp',
  ]

  const EOGreenTea = [
    '/images/product_demo_img/essentialOilGreenTea.webp',
  ]

  const EOSea = [
    '/images/product_demo_img/essentialOilHymnsOfSeaBreeze.webp',
  ]

  const EOLavender = [
    '/images/product_demo_img/essentialOilLavender.webp',
  ]

  const fruitNut = [
    '/images/product_demo_img/fruitNuts.jpg',
  ]

  const greenTea = [
    '/images/product_demo_img/greenTea.webp',
  ]

  const macca = [
    '/images/product_demo_img/maccaNuts.webp',
  ]

  const messCard = [
    '/images/product_demo_img/messCard.webp',
  ]

  const scentedBag = [
    '/images/product_demo_img/scentedBag.webp',
  ]

  const toteBag = [
    '/images/product_demo_img/toteBag.webp',
  ]

  const { ref: refIntro1ImgLeft, isVisible: isIntro1ImgLeftVisible } = useInView({ threshold: 0.2 });
  const { ref: refIntro1RightRow1, isVisible: isIntro1RightVisibleRow1 } = useInView({ threshold: 0.2 })
  const { ref: refIntro1DivLeft, isVisible: isIntro1DivLeftVisible } = useInView({ threshold: 0.2 });
  const { ref: refIntro1RightRow2, isVisible: isIntro1RightVisibleRow2 } = useInView({ threshold: 0.2 })

  const { ref: refProductList, isVisible: isProductListVisible } = useInView({ threshold: 0.2 })

  const { ref: refIntro2Left, isVisible: isIntro2LeftVisible } = useInView({ threshold: 0.2 })
  const { ref: refIntro2Right, isVisible: isIntro2RightVisible } = useInView({ threshold: 0.2, delay: 300 })

  const { ref: refIntro3Left, isVisible: isIntro3LeftVisible } = useInView({ threshold: 0.3 })
  const { ref: refIntro3Right, isVisible: isIntro3RightVisible } = useInView({ threshold: 0.3, delay: 300 })



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
    <div className="relative bg-white select-none">
      <Chatbot />
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
          <h4 className="fade-in-up fade-in-up-delay-1 font-beautiella text-amber-700 md:text-[60px] text-[40px] h-fit leading-0 mb-4">Handcrafted</h4>
          <h2 className="fade-in-up fade-in-up-delay-2 font-heebo text-stone-950 md:text-[65px] lg-[72px] text-[40px] mb-3">New Arrivals</h2>
          <p className="fade-in-up fade-in-up-delay-3 font-heebo md:text-[16px]  text-[13px] text-neutral-500 mb-8">Ignite the energy, share the vitality!</p>
          <a className="md:px-[30px] md:py-[16px] px-[20px] py-[12px] bg-amber-700 flex items-center group hover:bg-stone-950 transition-colors duration-200" href="">
            <span className="font-heebo md:text-[16px] text-[13px] text-white mr-[10px]">Discovery Now</span>
            <ArrowLongRightIcon className="w-[20px] h-[22px] group-hover:animate-wiggle" />
          </a>
        </div>
      </div>
      {/* introduction part 1*/}
      <div className={`ease-out delay-300 w-screen h-fit py-[90px]`}>
        <div className="w-[1320px] h-fit mx-auto flex flex-col [@media(min-width:1300px)]:flex-row">
          <div className={`w-screen [@media(min-width:1300px)]:w-[50%] px-[15px] flex-col justify-center mb-10`}>
            <img ref={refIntro1ImgLeft} draggable="false" className={`[@media(min-width:1300px)]:w-[630px] [@media(min-width:630px)]:h-[630px] 
            w-screen [@media(min-width:900px)]:h-[700px] h-[600px] object-[center_20%] object-cover transition-all duration-1000 
            ${isIntro1ImgLeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} src="/images/ads1_img/ads_img1.jpg" alt="" />
            <div ref={refIntro1DivLeft} className={`mt-[30px] flex flex-col w-screen [@media(min-width:1300px)]:w-[100%] items-center
            [@media(min-width:1300px)]:items-start ${isIntro1DivLeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 `}>
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
          <div className={`w-[50%]`}>
            <div ref={refIntro1RightRow1} className={`w-screen px-5 [@media(min-width:1300px)]:w-[521px] [@media(min-width:1300px)]:ml-auto [@media(min-width:1300px)]:px-0
            ${isIntro1RightVisibleRow1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
              <img draggable="false" className="w-full h-[521px] object-center object-cover" src="\images\ads1_img\ads_img2.jpg" alt="" />
              <h2 className="text-[30px]/[36px] font-heebo my-[30px] text-black text-center [@media(min-width:1300px)]:text-start">Handcrafted by <br /> a team of artisans.</h2>
            </div>
            <div ref={refIntro1RightRow2} className={`w-screen px-5 [@media(min-width:1300px)]:w-[521px] [@media(min-width:1300px)]:ml-auto [@media(min-width:1300px)]:px-0
              ${isIntro1RightVisibleRow2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
              <img draggable="false" className="w-full h-[521px] object-center object-cover" src="\images\ads1_img\ads_img3.jpg" alt="" />
              <h2 className="text-[30px]/[36px] font-heebo my-[30px] text-black text-center [@media(min-width:1300px)]:text-start">We use 100% soy <br /> wax derived.</h2>
            </div>
          </div>
        </div>
      </div>
      {/* box design title */}
      <div className={`py-[90px] px-[15px] bg-stone-100 transition-all duration-1000 ease-out delay-300`}>
        <div className="h-fit">
          <div className="relative w-screen flex justify-center">
            <img className="z-10 absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit grayscale brightness-100 contrast-100" src="\images\bg_text\bg-h2.webp" alt="" />
            <span className="z-20 relative font-beautiella text-[60px] text-amber-700">Best for you</span>
          </div>
          <h2 className="font-heebo [@media(min-width:1300px)]:text-[40px]/10 text-[30px]/8 mt-[10px] mb-[50px] text-black w-screen flex justify-center">New Design Collection</h2>
        </div>
        {/* box design list */}
        <div ref={refProductList} className={`grid w-[80%] mx-auto px-[15px] justify-center items-center
        ${isProductListVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))" }}>
          {/* box design */}
          <ProductCard slides={summerbox}
            proName='SUMMER BOX'
            desc='A health gift box with a soft yellow design inspired by summer sunlight brings positive energy and a sense of relaxation to the recipient. Each product inside is a 
            delicate combination of nature and wellness care, making it the perfect gift for colleagues, partners, or loved ones, accompanied by a message of sincere care.'
            mainPrice='Enjoy a healthy summer'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={springbox}
            proName='SPRING BOX'
            desc='As fresh as spring, this wellness gift box brings new energy and hope for you and your loved ones.'
            mainPrice='A fresh start with the spring wellness gift box'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={winterbox}
            proName='WINTER BOX'
            desc='Bringing warmth in winter, this wellness gift box is a meaningful present to share love and protect the health of those you cherish.'
            mainPrice='Winter warmth, gifting good health'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={fallbox}
            proName='FALL BOX'
            desc='The autumn wellness gift box, wrapped in gentle golden hues, sends wishes of peace and care during the cool season.'
            mainPrice='Cozy autumn, healthy gifts inside'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
        </div>
        <div className="h-fit mt-15">
          <h2 className="font-heebo [@media(min-width:1300px)]:text-[40px]/10 text-[30px]/8 mt-[10px] mb-[50px] text-black w-screen flex justify-center">New Gift Set Collection</h2>
        </div>
        {/* product set list */}
        <div className={`grid w-[80%] mx-auto px-[15px] justify-center items-center`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))" }}>
          {/* product set */}
          <ProductCard slides={rechargeSet}
            proName='Recharge Collection'
            desc='Refresh your energy with a Lime Basil & Citrus scented candle, nutritious mixed nuts, Hymns of Sea Breeze essential oil, and soothing herbal tea – the perfect choice to recharge every day.'
            mainPrice='499,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={deepLoveSet}
            proName='Deep Love Collection'
            desc='Share your love with a Love the City scented candle, heart-healthy macadamia nuts, relaxing lavender essential oil, and a handy tote bag – a meaningful gift for special moments together.'
            mainPrice='499,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={focusSet}
            proName='Focus Collection'
            desc='Boost your focus with natural essential oil, wholesome cashew nuts, a gentle scented candle, and matcha green tea – your companion on the journey to conquer your goals.'
            mainPrice='499,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
        </div>
        <div className="h-fit mt-15">
          <h2 className="font-heebo [@media(min-width:1300px)]:text-[35px]/10 text-[30px]/8 mt-[10px] mb-[50px] text-black w-screen flex justify-center">Customize Your Collection With Product Options</h2>
        </div>
        {/* product set list */}
        <div className={`grid w-[80%] mx-auto px-[15px] justify-center items-center`}
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))" }}>
          {/* product set */}
          <ProductCard slides={candleLove}
            proName='Love Of The City Candle'
            desc='Chillme scented candles are made from soy wax and essential oils, burn cleanly, and come in premium heat-resistant glass jars. 
            They relax the mind, add elegance and fragrance to your space, make unique gifts, and help repel insects.'
            mainPrice='135,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={candleMini}
            proName='Strawberry Tealight Candle Set'
            desc='Creates a pleasant fragrance and eliminates odors and mustiness in your space. Relieves stress and fatigue, enhances focus, and promotes relaxation. 
            Helps purify the air with antibacterial properties. Doubles as a beautiful and eye-catching decorative piece.'
            mainPrice='40,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={candleTea}
            proName='Make Tea Candle'
            desc='Chillme scented candles are made from soy wax and essential oils, burn cleanly, and come in premium heat-resistant glass jars. 
            They relax the mind, add elegance and fragrance to your space, make unique gifts, and help repel insects.'
            mainPrice='135,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={candleLimeBasil}
            proName='Lime Basil & Citrus Candle'
            desc='Chillme scented candles are made from soy wax and essential oils, burn cleanly, and come in premium heat-resistant glass jars. 
            They relax the mind, add elegance and fragrance to your space, make unique gifts, and help repel insects.'
            mainPrice='135,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={cashew}
            proName='Tobita Cashew Jar 200g'
            desc='Premium quality: aromatic, rich, sweet, creamy, and irresistibly delicious.
                  Made from renowned Binh Phuoc cashew nuts with clear, safe origins.
                  Attractive yet economical packaging, perfect for daily use or as a gift.
                  Quality controlled, packed, and distributed by Langfarm.'
            mainPrice='85,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={EOGreenTea}
            proName='Eucalyptus Mint 3-Wick Candle'
            desc='The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in
                  your desk or in an open-space office. Painted wooden frame with passe-partout for more depth'
            mainPrice='$13.00'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={EOSea}
            proName='Eucalyptus Mint 3-Wick Candle'
            desc='The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in
                  your desk or in an open-space office. Painted wooden frame with passe-partout for more depth'
            mainPrice='$13.00'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={EOLavender}
            proName='Eucalyptus Mint 3-Wick Candle'
            desc='The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in
                  your desk or in an open-space office. Painted wooden frame with passe-partout for more depth'
            mainPrice='$13.00'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={fruitNut}
            proName='Tobita Fruit Seed Jar 200g'
            desc='Safe and hygienic with clear origins.
Ingredients: 77% mixed nuts (almonds, cashews, pumpkin seeds, walnuts, macadamias, pistachios), 13% raisins, 9% oats, 1% honey.
Beautiful packaging, perfect for daily use or as a gift.
Quality controlled, packed, and distributed by Langfarm.'
            mainPrice='85,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={greenTea}
            proName='Dalat Farm Pineapple Green Tea - 150Gr Bag'
            desc='100% Dalatfarm Pineapple Green Tea is hand-picked, selecting fresh tea buds of 1 bud and 3 leaves. The tea is roasted many times to help the tea leaves absorb all the pineapple ginseng aroma, when brewed, it creates a feeling of comfort and relaxation.'
            mainPrice='58,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={macca}
            proName='Tobita Macadamia Nut Jar 200g'
            desc='Nicknamed the "queen of nuts," macadamias are packed with nutrients that support heart, gut, and brain health, provide antioxidants, help prevent cancer, and promote longevity.
Made from fragrant, creamy Lam Dong macadamias, they’re delicious and never boring.
Safe, hygienic, and clearly sourced.
Attractive yet economical packaging, ideal for daily use or as a gift.
Quality controlled, packed, and distributed by Langfarm.'
            mainPrice='90,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={messCard}
            proName='Premium Kraft Paper Card'
            desc='It would be great to put a lot of thoughts and feelings in a card to give to relatives and friends... Therefore, each card product at chillme always emphasizes aesthetic creativity and luxurious classic vintage beauty.'
            mainPrice='8,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={toteBag}
            proName='Valu Canvas Tote Bag'
            desc='Valu canvas tote bag, net Viet collection, with zipper and expandable bottom compartment. Environmentally friendly material: Canvas tote bag (65% Cotton, 35% Poly). The fabric has been specially treated. The fabric is white and does not rust.'
            mainPrice='70,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
          <ProductCard slides={scentedBag}
            proName='Scented Bag'
            desc=' scented sachet is a small fabric or cotton bag filled with minerals, dried flowers, and natural essential oils. It helps eliminate odors, absorb moisture, repel insects, uplift your mood, and serves as a cute decorative item for your home or wardrobe. Safe and natural for everyday use.'
            mainPrice='20,000 VND'
            addPrice={null}
            isSale={false}
            isSoldOut={false}
            isNew={true} />
        </div>
      </div>
      {/* introduction part 2 */}
      <div className="relative bg-[image:var(--bg-layout1)] bg-cover bg-center py-20">
        <div className="z-20 flex flex-col [@media(min-width:1300px)]:flex-row [@media(min-width:1300px)]:w-[1320px] h-fit mx-auto px-[15px] items-center w-screen">
          <div ref={refIntro2Left} className={`px-[15px] ${isIntro2LeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
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
          <div ref={refIntro2Right} className={`px-[15px] ${isIntro2RightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
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
          <div ref={refIntro3Left} className={`px-[15px] [@media(min-width:1300px)]:w-[50%] ${isIntro3LeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
            <img draggable="false" className="w-[100%] h-[80%] object-contain" src="\images\ads3_img\ads3_img1.jpg" alt="" />
          </div>
          <div ref={refIntro3Right} className={`relative px-[15px] [@media(min-width:1300px)]:w-[50%] flex flex-col justify-start ${isIntro3RightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
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
    </div >
  );
}