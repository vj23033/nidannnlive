import React from 'react'
import Button from '../components/UI/Button'

const UserRole = () => {

    const roles = [
        {
            role: "Receptionist",
            image: "/patient1.png",
            color : "#99810057",
            bg : "black"
        },
        {
            role: "Case manager",
            image: "/patient2.png",
            color : "#FF7F50",
        },
        {
            role: "Pharmacist",
            image: "/patient3.png",
            color : "#FFDAB9"
        },
        {
            role: "Accountants",
            image: "/patient4.png",
            color : "#6262E0"
        },
        {
            role: "Doctors",
            image: "/patient5.png",
            color : "#008080"
        },
        {
            role: "Patients",
            image: "/patient6.png",
            color : "#FFDB58"
        },
        {
            role: "Nurse",
            image: "/patient7.png",
            color : "#87CEEB"
        },
        {
            role: "Laboratoristst",
            image: "/patient8.png",
            color : "#93C572"
        },
    ]

    return (
        <div className='sm:py-[60px] sm:px-[120px] mt-[50px] px-[16px] py-[42px] bg-[#E6F0FF] flex flex-col gap-[20px]'>

            <div className='flex items-center flex-col gap-[20px]'>
                <h1 className='text-[24px] sm:text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[44px] lg:leading-[58px]'> 8+ Versatile User Roles </h1>
                <p className='max-w-[76%] text-center sm:max-w-[50%] sm:text-[18px] text-[11px] leading-[13px] sm:leading-[26px] text-[#71717A]'>Enhance hospital management efficiency with robust user role system,ensuring privacy, security, and tailored functionality for diverse healthcare professionals</p>
            </div>

            {/* <div className='flex flex-col gap-[60px]'> */}

                <div className=' flex justify-center flex-wrap sm:flex-row flex-col max-h-[300px] sm:gap-[20px] sm:gap-y-[20px] gap-y-[34px] gap-x-[10px]  mt-[20px]'>

                    {
                        roles?.map((role) => {
                            return <div style={{ border : `2px solid ${role.color}` }} className={`bg-white rounded-[17px] sm:px-[28px] sm:py-[21px] p-[10px] sm:min-w-0 min-w-[170px] sm:max-w-none`}>
                                <div className='flex items-center gap-2'>
                                    <img src={role.image} alt="play" className='w-[20px] aspect-square sm:w-[50px]' />
                                    <h1 className='font-semibold text-[#172026] text-[length:var(--heading-h4)]'>{role.role}</h1>
                                </div>
                            </div>
                        })
                    }

                </div>

            {/* </div> */}
            <div className='flex justify-center py-8'>

                <Button bg={"purpleGradient"} text={"white"}>Get Started With Us</Button>

            </div>
        </div>
    )
}

export default UserRole