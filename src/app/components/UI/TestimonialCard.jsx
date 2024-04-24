import React from 'react'

const TestimonialCard = ({ avatar, name, role, remarks }) => {
  return (
    <div className='flex flex-col gap-[20px] sm:max-w-[320px] px-[20px] py-[30px] rounded-[15px] box_shadow '>
        <span className='flex gap-[10px]'>
            <img src={avatar} alt="profile" width={40} height={40} className='rounded-full' />
            <span className='flex flex-col justify-between'>
                <p className='font-bold text-[15px] leading-[17px] sm:text-[16px] sm:leading-[24px]'>{name}</p>
                <p className='sm:text-[length:var(--sm-text)] text-[13px] leading-[15px] sm:leading-[20px] text-[color:var(--grey)]'>{role}</p>
            </span>
        </span>
        <p className='text-[color:var(--dark-grey)] sm:text-[15px] text-[16px] leading-[22px] sm:leading-[17px]'>"{remarks}"</p>
    </div>
  )
}

export default TestimonialCard