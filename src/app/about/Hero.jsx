import React from 'react'

const Hero = () => {
  return (
    <div className='px-[16px] sm:px-[120px] py-[34px]'>

        <div className='sm:flex sm:flex-row  justify-center gap-[20px]'>

            <div className='sm:w-[160%]'> 
                <p className='text-[14px] sm:text-[24px] text-[#5147DD] sm:leading-[30px] sm:font-semibold leading-[21px]'>We are NidaanHMS</p>
                <h1 className='text-[22px] mt-[8px] sm:text-[55px] sm:leading-[67px] font-bold leading-[33px]'>Building A Better Healthcare Management <span className='text-[#B2B3C9]'>For Hospitals</span></h1>
            </div>
            <p className='mt-[16px] sm:mt-auto sm:font-medium sm:text-[16px] text-[12px] font-medium leading-[18px]'>Our product empowers healthcare professionals with intuitive tools to optimize patient care and enhance operational efficiency.</p>
        
        </div>


        <div className='flex sm:flex-row flex-col gap-[8px] sm:gap-[20px] mt-[40px]'>
            <img src='/hero_about1.png' alt='hero' className='sm:w-2/3' />
            <img src='/hero_about2.png' alt='hero' className='sm:w-1/3' />
        </div>
    </div>
  )
}

export default Hero