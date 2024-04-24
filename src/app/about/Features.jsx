import React from 'react'
import Button from '../components/UI/Button'

const Features = () => {
  return (
    <div className='px-[16px] sm:px-[120px] py-[40px] '>
      <div className='flex sm:flex-row sm:items-center flex-col justify-between'>
            <div className='mb-[28px] sm:w-[560px]'>            
                  <h1 className='font-bold text-[24px] sm:text-[40px] mb-[12px]'>Upcoming <span className='bg-[url("/featureBg.png")] bg-contain'>features</span> that we are working on </h1>
                  <p className='text-[13px] sm:text-[16px] text-[#667085]'>We're diligently working on new features to take your healthcare management experience to the next level.</p>
            </div>
            <div className=''>
            <Button bg={"purpleGradient"} text={"white"} >Join WIth Us</Button>

            </div>

      </div>
        <div className='flex flex-wrap gap-[8px] sm:gap-[15px] sm:items-center  mt-[22px] '>
             <div className='flex flex-col justify-center w-[167px] sm:w-[289px] sm:h-[340px] items-center sm:gap-[12px] gap-[40px] border  px-[18px]  py-[18px] border-solid rounded-3xl box_shadow'>
                  <img src='./wifi.png' alt='img' className='w-[60px] sm:hidden' />
                  <img src='./feature_desk1.png' alt='img' className='w-[120px] h-[120px] sm:block hidden' />
                  <div className='sm:mt-[45px]'>
                    <h1 className='font-semibold sm:text-[22px] text-[16px] sm:text-start text-center'>Healthcare Chatbot</h1> 
                    <p className='text-[16px] text-[#71717A] leading-[24px] mt-[12px] sm:block hidden'>Empowering Patients with Personalized Healthcare Assistance Through AI Chatbots</p>
            
                  </div>
             </div>

             <div className='flex flex-col justify-center w-[167px] sm:w-[289px] sm:h-[340px] items-center sm:gap-[12px] gap-[40px] border  px-[18px]  py-[18px] border-solid rounded-3xl box_shadow'>
                  <img src='./wifi.png' alt='img' className='w-[60px] sm:hidden' />
                  <img src='./feature_desk1.png' alt='img' className='w-[120px] h-[120px] sm:block hidden' />
                  <div className='sm:mt-[45px]'>
                    <h1 className='font-semibold sm:text-[22px] text-[16px] sm:text-start text-center'>Healthcare Chatbot</h1> 
                    <p className='text-[16px] text-[#71717A] leading-[24px] mt-[12px] sm:block hidden'>Empowering Patients with Personalized Healthcare Assistance Through AI Chatbots</p>
            
                  </div>
             </div>

             <div className='flex flex-col justify-center w-[167px] sm:w-[289px] sm:h-[340px] items-center sm:gap-[12px] gap-[40px] border  px-[18px]  py-[18px] border-solid rounded-3xl box_shadow'>
                  <img src='./wifi.png' alt='img' className='w-[60px] sm:hidden' />
                  <img src='./feature_desk1.png' alt='img' className='w-[120px] h-[120px] sm:block hidden' />
                  <div className='sm:mt-[45px]'>
                    <h1 className='font-semibold sm:text-[22px] text-[16px] sm:text-start text-center'>Healthcare Chatbot</h1> 
                    <p className='text-[16px] text-[#71717A] leading-[24px] mt-[12px] sm:block hidden'>Empowering Patients with Personalized Healthcare Assistance Through AI Chatbots</p>
            
                  </div>
             </div>


             <div className='flex flex-col justify-center w-[167px] sm:w-[289px] sm:h-[340px] items-center sm:gap-[12px] gap-[40px] border  px-[18px]  py-[18px] border-solid rounded-3xl box_shadow'>
                  <img src='./wifi.png' alt='img' className='w-[60px] sm:hidden' />
                  <img src='./feature_desk1.png' alt='img' className='w-[120px] h-[120px] sm:block hidden' />
                  <div className='sm:mt-[45px]'>
                    <h1 className='font-semibold sm:text-[22px] text-[16px] sm:text-start text-center'>Healthcare Chatbot</h1> 
                    <p className='text-[16px] text-[#71717A] leading-[24px] mt-[12px] sm:block hidden'>Empowering Patients with Personalized Healthcare Assistance Through AI Chatbots</p>
            
                  </div>
             </div>




           




            
        </div>

    </div>
  )
}

export default Features