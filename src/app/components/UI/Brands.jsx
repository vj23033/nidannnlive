import React from 'react'

const Brands = ({ height, width, justify, overlay, gap }) => {
  return (
    <div className={`flex justify-${justify} flex-wrap sm:flex-nowrap sm:gap-[${gap}px] gap-[30px] ${overlay?"opacity-50":""} `}>
        <img src="/brand1.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand2.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand3.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
        <img src="/brand4.png" alt="brand1" height={height} width={width} className=' max-w-[40%]'/>
    </div>
  )
}

export default Brands