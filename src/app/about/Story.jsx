import React from 'react'

const Story = () => {
  return (
    <div className='flex flex-col sm:flex-row sm:justify-between sm:px-[120px] sm:py-[40px] px-[16px]'>
        <div className='flex flex-row  mt-0 '>
        <h3 className='font-bold sm:text-[24px] sm:text-[40px] sm:leading-[30px] leading-[28px]'>Our Story </h3>
        <span><img src='/arrow-down-right.png' alt='arrow' className='' /></span>
        </div>
        <div className='flex flex-col sm:w-[687px] sm:text-[20px] sm:leading-[30px] leading-[24px] text-[16px] gap-[20px]'>
          <p className='font-semibold  leading-[24px]'>MR. Shivam Kumar, the visionary mind behind NidaanHMS. Fueled by a passion for revolutionizing healthcare, Shivam embarked on a mission to transform hospital management.</p>
          <p className='text-[#344054]  leading-[24px]'>With a team of like-minded experts, we set out to revolutionize healthcare operations. Our dedication to excellence and relentless pursuit of progress became the driving force behind every line of code and design choice.</p>
          <p className='text-[#344054]  leading-[24px]'>Today, NidaanHMS stands as a beacon of innovation in healthcare management. Together, we're rewriting the narrative of hospital administration, empowering professionals, and transforming patient care.</p>
          <p className='text-[#344054] leading-[24px]'>Join us as we continue to pioneer the future of healthcare—one breakthrough at a time.</p>
    
        </div>
    </div>
  )
}

export default Story