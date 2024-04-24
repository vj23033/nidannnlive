import React from 'react'

const AdditionalFeatureCard = ({ title, description, image, smallImage }) => {
  return ( 

    
<div className="max-w-sm rounded-lg border border-black flex sm:flex-col flex-row items-center sm:px-[30px] px-[16px] py-[22px] gap-[20px]">
    <img className="sm:w-full sm:h-[119px] sm:aspect-video h-[50px] aspect-square hidden sm:block " src={image} alt={title} />
    <img className="sm:w-full sm:h-[119px] sm:aspect-video h-[50px] aspect-square sm:hidden" src={smallImage} alt={title} />
    <div className="sm:text-center text-left">
        <h3 className="font-bold sm:text-[length:var(--lg-text)] text-[18px] leading-[22px] mb-2 text-[#3C359E] sm:text-[#344054]">{title}</h3>
        <p className="text-gray-700 sm:text-[length:var(--sm-text)] text-[11px] sm:leading-[20px] leading-[13px]">
            {description}
        </p>
    </div>
</div>
    
  )
}

export default AdditionalFeatureCard