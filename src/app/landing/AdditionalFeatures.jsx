import React from 'react'
import AdditionalFeatureCard from '../components/UI/AdditionalFeatureCard'

const AdditionalFeatures = () => {
  return (
    <div className='sm:px-[120px] px-[16px] sm:py-[40px]'>
        <h1 className='text-center text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[64px] lg:leading-[72px]'>Additional Features!</h1> 

        <div className='sm:pt-[60px] pt-[20px] flex justify-center sm:flex-row flex-col sm:gap-[30px] gap-[20px]'>
            <AdditionalFeatureCard 
                title={"HR Management"} 
                description={"Empower customers: our platform offers granular insights, allowing individuals to manage finances at a detailed level"} 
                image={"/add-feature-1.png"}
                smallImage={"/additional_small1.png"}
                />

            <AdditionalFeatureCard 
                title={"Finance Management"} 
                description={"Empower customers: our platform offers granular insights, allowing individuals to manage finances at a detailed level"} 
                image={"/add-feature-2.png"}
                smallImage={"/additional_small2.png"}
                />

            <AdditionalFeatureCard 
                title={"Inventory Management"} 
                description={"Empower customers: our platform offers granular insights, allowing individuals to manage finances at a detailed level"} 
                image={"/add-feature-3.png"}
                smallImage={"/additional_small3.png"}
            />

        </div>       
    </div>

  )
}

export default AdditionalFeatures