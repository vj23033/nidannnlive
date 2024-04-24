import React from 'react'

const Banner = () => {
  return (
    <div className='sm:flex text-center justify-between px-[120px] py-[60px] text-white bg-[color:var(--dark-blue)] relative hidden bg-[url("/bg_stats.png")]'>


                <div className='flex flex-col gap-[10px]'>

                    <h1 className='text-[60px] leading-[60px] font-bold text-white'>1.4K</h1>
                    <p className='sm:text-[18px] leading-[28px] font-normal'>Active Users</p>
                </div>

                  <div className='flex flex-col gap-[10px]'>

                    <h1 className='text-[60px] leading-[60px] font-bold text-white'>98%</h1>
                    <p className='sm:text-[18px] leading-[28px] font-normal'>Customer Satisfaction</p>
                  </div>

                  <div className='flex flex-col gap-[10px]'>

                     <h1 className='text-[60px] leading-[60px] font-bold text-white'>5</h1>
                     <p className='sm:text-[18px] leading-[28px] font-normal'>Trusted by Hospital</p>
                  </div>

                  <div className='flex flex-col gap-[10px]'>

                    <h1 className='text-[60px] leading-[60px] font-bold text-white'>$5K</h1>
                    <p className='sm:text-[18px] leading-[28px] font-normal'>Revenue Generated</p>
                  </div>



            </div>
  )
}

export default Banner