import React from 'react'
import WhyUsCard from '../components/UI/WhyUsCard'

const WhyUs = () => {
  return (
    <section className='flex pt-[70px] sm:px-[120px] px-[16px] pb-12 bg-[#030334] -z-10 flex-col gap-[60px] '>
   <div className='flex flex-col gap-[12px]'>
     <h1 className='text-center text-[24px] sm:text-[length:var(--heading-h3)] leading-[52px] font-bold text-[#ffffff]'>
        Why Choose Us?
      </h1>
      <p className='text-center text-white sm:text-[18px] text-[11px] sm:leading-[26px] font-normal max-w-[80%] sm:max-w-[60%] mx-auto' style={{ color: "rgba(255, 255, 255, 0.7)" }}>
        Seamless Hospital management Software offering Ease of use, top notch security and Round-the-clock Support for your peace of mind
      </p>

   </div>
      <div className='flex justify-center sm:flex-row flex-col sm:gap-[15px]  px-[16px] gap-[15px] '>
          
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
          
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
         
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
       
      </div>
      
    </section>
  )
}

export default WhyUs