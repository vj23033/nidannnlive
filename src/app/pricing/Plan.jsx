
import React from 'react'


const Plan = () => {
    return (
        <div>
            <div className='container bg-white px-[550px] py-8 mx-auto'>
                <div className='flex-1 mt-8 mx-8 border dark:border-gray-700 rounded-lg' >
                    <div className='p-6'>
                        <h1 className='text-[length:var(--heading-h1)] font-bold capitalize lg:text-2xl dark:text-black'>Basic</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-300"> Perfect to get started</p>
                        <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">₹14000 <span className="text-base font-medium">/Month</span></h2>

                        <button className="w-full px-4 py-2 mt-6 tracking-wide border dark:border-gray-700 rounded-lg text-black capitalize transition-colors duration-300 transform bg-white rounded-md ">
                            Get Started
                        </button>

                        <hr className="border-gray-200  dark:border-gray-700" />

                        <div className='p-6'>
                            <h1 className='text-[length:var(--heading-h5)] font-bold'>Package Includes:</h1>

                            <div className='mt-8 space-y-4'>

                                <div className='flex items-center'>
                                    <img src='' alt='check' />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Plan