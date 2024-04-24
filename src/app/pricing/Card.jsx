import React from 'react'

const Card = () => {

    const items = [
        "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website"
    ]

    return (


            <div className='border items-center sm:mt-[100px] mt-[48px] sm:max-w-[60%] sm:mx-auto mx-[16px] dark:border-gray-700 rounded-lg gradient shadow overflow-hidden'>

                <div className='flex flex-col gap-[20px] py-[40px] sm:px-[60px] px-[16px]'>
                    <span className='flex items-center justify-between w-full'>
                        <h1 className='text-[length:var(--heading-h1)] font-bold'>Only For <span className='text-[purple]'>Enterprise</span></h1>
                        <div className='flex h-[50px] py-[15px] px-[40px] gap-2 items-center rounded-3xl bg-[green]'>
                            <img src='./wtp.png' alt='wtp'></img>
                            <p className=' text-white '>Lets Talk!</p>
                        </div>
                    </span>
                    <p className='text-[#71717A]'>Elevate your enterprise with bespoke solutions. Enjoy<br />
                        custom packages at unbeatable rates.Lets discuss your <br />
                        unique needs and craft a tailored plan.Join us today for<br /> exceptional service and seamless partnership.
                    </p>
                    <div className='flex 3xl:justify-between gap-[14px] sm:w-[140%] w-[300vw] sm:ml-0 ml-[-30vw] self-center'>
                        <div className='gradient border border-[color:var(--purple)] px-3 text-[18px] font-semibold py-2 rounded-[100px] text-[#5147DD] min-w-[200px] whitespace-nowrap'></div>
                        <div className='gradient border border-[color:var(--purple)] px-3 text-[18px] font-semibold py-2 rounded-[100px] text-[#5147DD] whitespace-nowrap'>Customize website</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 text-[18px] font-semibold py-2 rounded-[100px] text-[#5147DD] whitespace-nowrap'>Get Your Own Server</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 text-[18px] font-semibold py-2 rounded-[100px] text-[#5147DD] whitespace-nowrap '>24*7 hours customer support</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 text-[18px] font-semibold py-2 rounded-[100px] text-[#5147DD] whitespace-nowrap min-w-[200px]'></div>
                    </div>
                    <div className='flex 3xl:justify-between gap-[14px] sm:w-[140%] w-[300vw] sm:ml-0 ml-[-30vw] self-center'>
                        <div className='gradient border border-[color:var(--purple)] px-3 py-2 rounded-[100px] text-[18px] font-semibold text-[#5147DD] whitespace-nowrap min-w-[200px]'></div>
                        <div className='gradient border border-[color:var(--purple)] px-3 py-2 rounded-[100px] text-[18px] font-semibold text-[#5147DD] whitespace-nowrap'>Enterprise- grade security</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 py-2 rounded-[100px] text-[18px] font-semibold text-[#5147DD] whitespace-nowrap'>Search engine optimization</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 py-2 rounded-[100px] text-[18px] font-semibold text-[#5147DD] whitespace-nowrap'>All Services</div>
                        <div className='gradient border border-[color:var(--purple)] px-3 py-2 rounded-[100px] text-[18px] font-semibold text-[#5147DD] whitespace-nowrap min-w-[200px]'></div>
                    </div>
                </div>

            </div>


    )
}

export default Card