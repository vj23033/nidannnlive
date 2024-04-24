import React from 'react'
import Link from 'next/link';


const HospitalCard = ({title, description, image,linkText}) => {
  return (
    <div className='border sm:w-1/3 flex sm:flex-col flex-row   border-solid border-[#A6AFC3] rounded-lg sm:max-w-content max-w-[343px] overflow-hidden'>
    <img  src={image} alt={title} className="sm:w-full sm:max-w-none max-w-[155px]" />
    <div className='sm:py-[18px] py-[1px] sm:px-[35px] px-[8px] bg-[white] '>
        <h3 className='flex flex-col gap-[4px] font-bold text-[#111928] text-[13px] sm:text-[24px]'>{title}</h3>
        <p className='text-[length:var(--sm-text)] font-medium text-[#637381] sm:w-[273px] '>{description}</p>
        <Link href='/' className='text-[13px] sm:text-[16px]'>{linkText}</Link>

    </div>
</div>
  )
}

export default HospitalCard