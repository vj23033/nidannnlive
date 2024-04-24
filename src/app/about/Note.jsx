import React from 'react'

const Note = () => {
  return (
    <div className='px-[16px] flex sm:flex-row sm:px-[120px] flex-col justify-between gap-[24px] bg-[#F1FFF0] py-[40px]'>
       <div className='sm:w-[45%] '>
            <div>
                <p className='text-[15px] text-[#5147DD]'>Founder’s Note</p>
                <h1 className='font-bold sm:text-[40px] sm:leading-[48px] text-[24px] mt-[8px]'>Born Out Of Frustration running a <span className='text-[#808299]'> 6 figure agency </span></h1>
            </div>
            
            <div className='text-[#344054] text-[14px] sm:text-[16px] flex flex-col gap-[12px]'>
                <p>My name is Shivam. I've started freelancing aged 15, with Dubai International Airport as my very first paying client.</p>
                <p>However fun and satisfying freelancing can be, I had to constantly jump between apps, duplicate data between apps, pay multiple subscriptions and then use even more apps to “connect” them all together - I was sunk in a productivity maze, which pulled me back from growing the business.</p>
                <p>That's when we've decided to build Plutio - the most intuitive and deeply customisable platform anyone would ever need to start, run and grow their business from anywhere.</p>
            </div>
            <div>
                <img src='/signature.png' alt='sign' className='my-[8px]' />
                <p className='sm:text-[14px] font-semibold underline'>Read Full Story</p>
            </div>
       </div>
        <img src="/noteImg.png" alt="note" className='hidden sm:block' />
    </div>
  )
}

export default Note