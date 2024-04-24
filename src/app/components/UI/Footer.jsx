import React from 'react'
import ItemsContainer from './Footer/ItemContainer'
import SocialIcons from './Footer/SocialIcons'
import { Icons } from './Footer/Menu'

const Footer = () => {
  return (
    <footer className=''>
      
     <div className='flex sm:flex-row flex-col gap-[10px]  justify-between sm:px-[120px] px-[20px] border border-b py-[40px]'>
            <div className='flex items-center'>
             <img className="h-10 w-10 mr-2" src='/logohms.png' alt="Logo" />
             <span className="text-xl font-bold tracking-tight">Logoipsum</span>
            </div>
             <p className='sm:text-[18px] text-[14px] text-[#6F6C90] sm:max-w-[40%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    
     </div>

      <div className='sm:px-[120px]'>
        <ItemsContainer />

      </div>

      <div className="flex flex-col-reverse gap-[10px] sm:flex-row sm:px-[120px] sm:py-[20px] px-[90px] justify-between text-center pt-2 text-gray-400 text-[18px] pb-8 border-t border-solid border-[#E4E4E7]">
        <span className='sm:text-[18px]'>Copyright © 2024 NidaanHMS | All Rights Reserved </span>

        <SocialIcons Icons={Icons} />
      </div>

    </footer>
  )
}

export default Footer