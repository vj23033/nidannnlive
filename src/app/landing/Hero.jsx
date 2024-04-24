import React from 'react'
import HeroImage from '../components/UI/HeroImage'
import Button from '../components/UI/Button'
import Brands from '../components/UI/Brands'

const Hero = () => {
  return (
    <div className='sm:pt-[100px] sm:pb-[71px] sm:px-[120px] px-[16px] py-[40px] flex flex-col sm:gap-[120px] gap-[56px] justify-between relative overflow-hidden'>
    <HeroImage />
    <div className='sm:max-w-[60%] flex flex-col gap-[20px]'>
      <h1 className='sm:text-[length:var(--heading-h1)] text-[28px] font-bold sm:leading-[72px] leading-[32px]'>Streamline Your Hospital Operations with Us</h1>
      <p className='sm:text-[18px] text-[13px] leading-[26px] text-[#71717A] sm:max-w-[70%]'>Experience Unparalleled Efficiency with Our Cutting-Edge Hospital Management Software</p>
      <span className='sm:mt-[40px] flex items-center'>
        <Button bg={"purpleGradient"} text={"white"} >Get Started With us</Button>
        <Button bg={"transparent"} text={"black"}>
          <div className='flex items-center gap-2'>
            <img src="/play.png" alt="play" />
            <h3 className='font-semibold leading-[24px]'>How it works</h3>

          </div>
        </Button>
      </span>
    </div>

    <div className='flex flex-col gap-[48px] sm:max-w-[50%]'>
      <div className='flex gap-[12px]'>
        <img src="/users.png" alt="users" />
        <span className='flex flex-col'>
          <p className='text-[length:var(--md-text)] font-bold'>Our Happy Users</p>
          <p className='flex font-semibold'>
            <img src="star.svg" alt="star" />
            <span className='text-[#344054] text-[14px] font-semibold leading-[20px]'>4.9</span>  <span className='text-[#98A2B3] leading-[20px] text-[14px] font-normal'>(1.4k reviews)</span>
          </p>
        </span>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <p className='text-[length:var(--lg-text)] font-bold'>Trusted by these hospitals</p>
        {/* <img src="/brands.png" alt="brands" className='max-w-[80%]' /> */}
        <Brands height={20} width={110} justify={"start"} overlay={true} gap={"25"} />
      </div>
    </div>
  </div>
  )
}

export default Hero


