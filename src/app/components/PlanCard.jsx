"use client"

import React, { useState } from 'react'

const PlanCard = ({ plan }) => {

    const [isActive, setIsActive] = useState(false)

    return (
        <div className={`${plan?.isPopular ? "bg-[#0C0C45] text-white" : "bg-white"} sm:w-[380px] w-full sm:my-8  flex-1  border dark:border-gray-700 rounded-lg ${!isActive ? "max-h-[170px] overflow-y-hidden sm:max-h-none" : "max-h-none"}`} onClick={() => setIsActive(prev => !prev)} >
            <div className='p-6'>

                <h1 className='text-[length:var(--heading-h1)] font-bold capitalize lg:text-2xl dark:text-black'>{plan.title}</h1>
                <p className={`mt-4 ${plan.isPopular ? "text-white" : "text-gray-500"} dark:text-gray-300`}>{plan.description}</p>
                <h2 className={`mt-4 text-2xl text-[length:var(--heading-h1)] font-bold ${plan.isPopular ? "text-white" : "text-gray-700"} sm:text-3xl dark:text-gray-300`}>₹{plan.price} <span className="text-base font-medium">/Month</span></h2>

                <button className="w-full px-4 py-2 mt-6 tracking-wide border dark:border-gray-700  text-black capitalize transition-colors duration-300 transform bg-white rounded-md ">
                    Get Started
                </button>

                <div className='mt-[25px]'>
                    <hr className="border-gray-200  dark:border-gray-700" />
                </div>

                <div className='p-6'>
                    <h1 className='text-[length:var(--heading-h5)] font-bold'>Package Includes:</h1>

                    <div className='mt-2 space-y-4'>


                        {
                            plan.perks && plan.perks.map((perk, index) => (
                                <div key={index} className={`sm:flex items-center gap-2 ${perk.isIncluded === false ? "sm:opacity-20 hidden" : "flex"} `}>
                                    <img src='./check-circle.png' alt='check' />
                                    <p>{perk.item}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlanCard