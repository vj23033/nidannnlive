import React from 'react'
import Button from '../components/UI/Button'

const SetupBanner = () => {
    return (
        <div className='bg-[#030334] bg-[url("/BG_grid.png")]'>

        <div className='max-w-[1440px] flex flex-col-reverse sm:flex-row  justify-center sm:gap-[80px] items-start sm:px-[120px] sm:py-[70px] px-[16px] py-[40px]  gap-[50px] text-white mx-auto'>
            <div className='flex  flex-col items-start gap-[20px] sm:py-[81px]]'>
                <h1 className='sm:max-w-[70%] text-[length:var(--heading-h1)] font-bold sm:leading-[72px] leading-[42px] text-white'>Easy Setup Nidaan HMS in 30 Minutes</h1>
                <p className=' text-[length:var(--md-text)] text-opacity-80 '>Lorem ipsum dolor sit amet consectetur. Purus  blandit arcu sem purus. Posuere lorem egestas auctor amet nisi. Pretium nisl nec et tempus </p>
                <Button bg={"purpleGradient"} text={"white"} style={{ marginTop: '50px' }}>Get Started Now</Button>

            </div>

           {/* <div> */}
             <img src='./pc.png' alt='pc' />
           {/* </div> */}

        </div>
        </div>
    )
}

export default SetupBanner