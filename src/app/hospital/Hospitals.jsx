import React from 'react'
import Link from 'next/link';
import HospitalCard from '../components/HospitalCard';
import Button from '../components/UI/Button';


const Hospitals = () => {
  return (
    <div className='justify-center items-center sm:py-[100px] py-[20px] sm:px-[120px] px-[16px] bg-[#EBF4FF]'>
        <h1 className='text-center sm:text-[40px] sm:leading-[48px] font-bold py-[20px]'>Hospitals Partnered with us</h1>
        
       <div className='flex sm:flex-row flex-col items-center sm:justify-center gap-[20px]'>
          <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />

          <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />

        <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />
       </div>

       <div className='hidden md:flex mt-[20px] items-center sm:justify-center gap-[20px]'>
          <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />

          <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />

        <HospitalCard 
           title={'Amri Hospital'}
           description={'20/21 Gandhi Street, Kommaddi Junction, Kapullupada Road, Vizag, Andhra Pradesh 901234 '} 
           image={'./Hospital1.png'}
           linkText={'Visit Website'}
           
           />
           
       
       </div>
       
       <div className='mt-[100px] flex justify-center items-center self-center sm:hidden'>
            <Button bg={"transparent"} text={"blue"} border={"blue"}>View All</Button>        
       </div>
       <div className='mt-[100px] sm:flex justify-center items-center self-center hidden'>
            <Button bg={"purple"} text={"white"} border={"none"}>View All</Button>        
       </div>




    </div>
  )
}

export default Hospitals