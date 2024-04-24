import React from 'react'
import Button from '../components/UI/Button'

const QuestionBanner = () => {
  return (
    <div className='sm:bg-[#030334] flex sm:flex-row sm:items-center sm:gap-[240px] text-white sm:px-[120px] px-[16px] py-[40px] sm:bg-none bg-[url("/contactUsBG.png")] '> 
        <div className='w-[585px]'>
            <h1 className='text-[28px] sm:text-[60px] font-semibold'>Have Questions?</h1>
            <h3 className='text-[22px] sm:text-[48px] opacity-80 font-semibold mt-[8px]'>Our team will happy to assist you</h3>
            <p className='text-[16px] sm:text-[20px] mt-[24px]'>Ask about NIdaanHMS, Pricing, Implementation, or anything else. Our Highly trained team standing by, ready to help</p>


            <div className='mt-[52px] flex flex-row gap-[20px]  items-center'>
                <Button>Contact Us</Button>
                <p className='text-[13px] sm:text-[16px]'>Or Call +91 76672 44137</p>
            </div>
            
        </div>
       
       <div>
          <img src='questionBanner.png' alt='banner' className='sm:block hidden'/>
       </div>


    </div>
  )
}

export default QuestionBanner