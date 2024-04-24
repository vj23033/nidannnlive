import React from 'react'
import Button from '../components/UI/Button'
import { Search } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:px-[120px] mx-[16px]  py-[100px] gap-[80px]'>
        <h1 className='text-center font-bold sm:text-[60px] text-[24px] leading-[72px] '>Find Your Desired Hospital</h1>
        
         <div className='flex items-center gap-[8px] rounded-full px-[8px] sm:px-[22px] py-[6px] sm:py-[15px] border border-[color:var(--grey)]'>
            <Search className='w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]' />
            <input type='text' className='focus:outline-none sm:border-r border-[color:var(--grey)]'  placeholder='Enter Hospital Name' />
            <input type='text' className='focus:outline-none sm:block hidden ml-auto pl-2'  placeholder='Enter Loaction' />
            <Button text={"white"} bg={"purpleGradient"} radius={"full"} >Search </Button>
         </div>
    </div>
  )
}

export default Hero


