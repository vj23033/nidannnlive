import React from 'react'

const FeatureCard = ({ title, description, image , classNames }) => {
    return (
        <div className={"bg-[color:var(--blue-violet)] p-[30px] rounded-[8px] flex flex-col gap-[8px] " + classNames}>
            <h4 className='sm:text-[length:var(--heading-h4)] text-[20px] leading-[24px] font-bold'>{title}</h4>
            <p className='sm:text-[length:var(--md-text)] text-[11px] sm:leading-[26px] leading-[13px] text-[color:var(--grey)]'>{description}</p>
            <img src={image} alt={title} className='sm:mt-[40px] mt-[10px] h-full' />
        </div>
    )
}

export default FeatureCard