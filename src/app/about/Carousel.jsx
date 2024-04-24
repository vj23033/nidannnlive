"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Carousel = () => {
    return (
        <div className='bg-[#EBF4FF] px-[16px] py-[28px]'>

            <div className='flex justify-between sm:px-[120px]'>
                <div className='flex flex-col gap-[8px] '>
                    <h1 className='font-bold text-[24px] sm:text-[40px] sm:leading-[48px] leading-[30px]'>Highlights from Nidaan HMS</h1>
                    <p className='text-[#667085] text-[13px] sm:text-[16px] font-semibold'>For more company news, please visit our </p>
                    <span className='font-semibold  underline'>Medium Profile</span>
                </div>
                <div className='self-end sm:flex gap-[10px] hidden'>
                <button className='prev border-2 border-[#008080] rounded-full p-2 '>
                    <ArrowLeft color="#008080" />
                    </button>
                    <button className='next border-2 border-[#008080] rounded-full p-2 '>
                    <ArrowRight color="#008080" />
                    </button>
                </div>
            </div>
            <div className='sm:pl-[120px]'>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ nextEl: ".next", prevEl: ".prev" }}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                        600 : {
                            slidesPerView : 3.5
                        }
                    }}
                    className=''
                >
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl  overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block  overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                        <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>

                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

            <div className='pt-[28px] flex justify-center gap-[10px] sm:hidden'>
                    <button className='prev border-2 border-[#008080] rounded-full p-2 '>
                    <ArrowLeft color="#008080" />
                    </button>
                    <button className='next border-2 border-[#008080] rounded-full p-2 '>
                    <ArrowRight color="#008080" />
                    </button>
                </div>


            {/* <div className='border sm:w-[370px] border-solid box_shadow rounded-xl  overflow-hidden mt-[28px]'>
                            <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>
                            
                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div> 
                    </div>
                    <div className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                            <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>
                            
                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div> 
                    </div>
                    <div className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block  overflow-hidden mt-[28px]'>
                            <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>
                            
                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div> 
                    </div>       
                    <div className='border sm:w-[370px] border-solid box_shadow rounded-xl hidden sm:block overflow-hidden mt-[28px]'>
                            <img src='/carousel_img1.png' alt='img' className='w-full' />

                        <div className='px-[30px] py-[28px] bg-white'>
                            <h1 className='font-semibold text-[16px] sm:text-[22px] sm:leading-[30px] leading-[24px]' >50+ Best creative website themes & templates</h1>
                            <p className='mt-[8px] text-[13px] sm:text-[16px] sm:leading-[24px] leading-[21px] mb-[16px]'>Lorem ipsum dolor sit amet consectetur. Leo dui consectetur gravida nulla nibh eu sit tristique. Orci accumsan pretium tempus.</p>
                            
                            <a href='/' className='text-[#5147DD] text-[15px] '>Read Now </a>
                        </div> 
                    </div> */}


        </div>
    )
}

export default Carousel