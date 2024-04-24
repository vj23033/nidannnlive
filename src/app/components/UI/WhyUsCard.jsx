import React from 'react'

const WhyUsCard = ({title, description, image, className}) => {
  return (
    <div className={'relative flex sm:flex-col flex-row gap-[30px]  rounded-[16px]  overflow-hidden '+className} >
      <img src="/grid-bg.png" alt="bg" className='absolute w-full h-full top-0 left-0 z-10' />
      <img src="/blue-bg.png" alt="bg" className='absolute w-full h-full top-0 left-0 z-10 ' />
  
    <div className='flex sm:max-w-[80%] sm:flex-col items-start gap-[30px] sm:gap-[60px] px-[40px] py-[40px] z-20 bg-transparent'>
      <img  src={image} alt={title} width={45} height={45}  />
     <span className='flex flex-col gap-[8px]'>
      <h1 className='sm:text-[28px] text-[20px] font-bold text-white'>{title}</h1>
      <p className='sm:leading-[24px] leading-[13px] sm:text-[16px] text-[11px] text-[white] text-opacity-50'>{description}</p>
     </span>
    </div>
  </div>
  )
}

export default WhyUsCard