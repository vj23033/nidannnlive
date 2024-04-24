import React from 'react'

const Appointments = () => {
  return (
    <div className=' sm:px-[120px] px-[16px] py-[40px] bg-[#0C0C45] flex flex-col sm:flex-row sm:flex-wrap sm:gap-[50px] gap-[24px]'>
         <h1 className='text-[rgb(255,255,255)] font-bold sm:text-[60px] text-[22px] order-1 sm:basis-full'> 4 steps to book easy Appointments</h1>
         {/* <div className='flex sm:flex-row flex-col-reverse gap-[60px] mt-[50px] '> */}
            <ul className='order-2'>
                <li className='flex items-center gap-[12px] mb-[30px]'>
                     <img src='/one.png' alt='one'/>
                     <p className='text-white sm:text-[20px] text-[13px]'>Pick your desire Hospitals.</p>
                </li>
                
                <li className='flex items-center gap-[12px] mb-[30px]'>
                     <img src='/one.png' alt='one'/>
                     <p className='text-white sm:text-[20px] text-[13px]'>Check the link to visit Hospital’s website</p>
                </li>
                
                <li className='flex items-center gap-[12px] mb-[30px]'>
                     <img src='/one.png' alt='one'/>
                     <p className='text-white sm:text-[20px] text-[13px]'>Locate the appointment booking section.</p>
                </li>
                
                <li className='flex items-center gap-[12px] mb-[30px]'>
                     <img src='/one.png' alt='one'/>
                     <p className='text-white sm:text-[20px] text-[13px]'>Schedule your appointment through the booking system.</p>
                </li>
                
                                
             </ul>


         {/* </div> */}
            <div className='sm:order-3 -order-1'>
            <img src='/video.png' alt='video' className='' />
         </div>
        
    </div>
  )
}

export default Appointments