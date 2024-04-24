import React from 'react'
import Button from '../components/UI/Button'
import FeatureCard from '../components/UI/FeatureCard'

const Features = () => {
    return (
        <div className='sm:px-[120px] sm:py-[100px] px-[16px] py-[42px] flex flex-col sm:gap-[60px] gap-[40px]'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center items-start gap-[20px]'>
                <span className='sm:max-w-[60%]'>
                    <h3 className='text-[length:var(--heading-h3)] font-bold'>Our top Features</h3>
                    <p className='text-[length:var(--md-text)] text-[color:var(--grey)]'>Experience unrivaled efficiency with Nidaan's comprehensive suite: bespoke landing pages, robust inventory and finance management, seamless EHR integration, SEO, and more.</p>
                </span>
                <Button bg={"purpleGradient"} text={"white"}>Get Started Now</Button>
            </div>
            <div className='flex flex-col  gap-[20px]'>

                <div className='flex flex-wrap sm:flex-nowrap gap-[20px]'>
                    <FeatureCard title={"Schedule Appointment"} description={"Facilitating Convenient Online Appointment Booking for Patients, Anytime, Anywhere! "} image={"/feature-1.png"} classNames={"sm:basis-[90%]"} />
                    <FeatureCard title={"Schedule Appointment"} description={"Facilitating Convenient Online Appointment Booking for Patients, Anytime, Anywhere! "} image={"/feature-2.png"} />
                </div>
                <div className='flex flex-wrap sm:flex-nowrap gap-[20px]'>
                    <FeatureCard title={"Schedule Appointment"} description={"Facilitating Convenient Online Appointment Booking for Patients, Anytime, Anywhere! "} image={"/feature-3.png"} />
                    <FeatureCard title={"Schedule Appointment"} description={"Facilitating Convenient Online Appointment Booking for Patients, Anytime, Anywhere! "} image={"/feature-4.png"} />
                    <FeatureCard title={"Schedule Appointment"} description={"Facilitating Convenient Online Appointment Booking for Patients, Anytime, Anywhere! "} image={"/feature-5.png"} />
                </div>
            </div>
        </div>
    )
}

export default Features