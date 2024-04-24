"use client"

import React, { useState } from 'react';

const Hero = () => {
    const [time, setTime] =useState("monthly"); // Using React.useState instead of useState

    return (
        <div className='flex flex-col gap-[8px] sm:gap-[20px] text-center px-[16px] sm:py-[100px] sm:px-[120px] gradient'>
            <h1 className='text-[22px] sm:text-[length:var(--heading-h1)] font-bold'>Transparent and Simple Pricing</h1>
            <p className='text-[#71717A] sm:text-[18px] text-[13px]'>Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit! </p>

            <div className='bg-white max-w-fit mx-auto rounded-[100px] p-1 border flex'>
                <button onClick={() => setTime("monthly")} className={`px-[68px] py-[7px] rounded-[100px] ${time === "monthly" ? "text-white bg-[color:var(--purple)]" : "text-black"}`}>Monthly</button>
                <button onClick={() => setTime("yearly")} className={`p-[68px] py-[7px] rounded-[100px]  ${time === "yearly" ? "text-white bg-[color:var(--purple)]" : "text-black"}`}>Yearly</button>
            </div>
        </div>
    );
};

export default Hero;