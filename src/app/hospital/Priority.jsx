import React from 'react'

const Priority = () => {
    
    const data = [
        {
           title:"Maintain Healthy-Lifestyle",
           description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
           image: '/health2.png'
        },
        {
            title:"Maintain Healthy-Lifestyle",
            description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
            image: '/health2.png'
         },
         {
            title:"Maintain Healthy-Lifestyle",
            description:"Incorporate balanced nutrition, regular exercise, and adequate rest into your daily routine to support overall well-being.",
            image: '/health2.png'
         }
          
          
        
    ]



  return (

    <div className='flex flex-col gap-[20px] sm:px-[120px] px-[16px] sm:py-[80px] py-[40px]'>
        <h1 className='sm:text-[40px] text-[22px] leading-[48px] text-[#011000] font-bold'>Your Health, Our priority</h1>
        <p className='sm:w-[526px] sm:text-[16px] text-[13px]'>Committed to delivering outstanding care and support to ensure your well-being and peace of mind always.</p>
         
        <div className='flex sm:flex-row flex-col items-center  gap-[15px]'>
            
           

            {
                data.map((datas)=>{
                    
                    return  <div className='flex flex-col  gap-[20px] sm:max-w-[390px] border border-solid border-[#DDE0EA]  px-[20px] py-[30px] rounded-[16px] box_shadow'>
                    <img src={datas.image} alt='' />
                    <h1 className='font-semibold text-[24px] leading-[30px]'>{datas.title}</h1>
                    <p className='font-medium text-[#71717A] text-[16px]'>{datas.description}</p>
                </div>

                })
            }

        </div>
    </div>
    

    
    
  )
}

export default Priority