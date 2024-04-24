import React from 'react'
import PlanCard from '../components/PlanCard'

const Testimonial = () => {
   
    const plans = [
        {
            title : "Basic",
            description : "Perfect for getting started",
            price : "14000",
            perks : [
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                }
        
        
            ]
        },
        {
            title : "Standard",
            description : "Perfect for getting started",
            price : "18000",
            perks : [
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                },
                {
                    item:"Appointment",
                    isIncluded : false,
                }
        
        
            ]
        },
        {
            title : "Premium",
            description : "Perfect for getting started",
            price : "24000",
            isPopular : true,
            perks : [
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                },
                {
                    item:"Appointment",
                    isIncluded : true,
                }
        
        
            ]
        },
    ]
    


  return (
    <div>
        <div className='flex sm:flex-row flex-col justify-center gap-[20px] items-center px-[16px] sm:px-[120px]'>
                   {
                plans.map((plan)=>{
                    return <PlanCard plan={plan} />
                })
            }
    </div> 

    </div>
  )
}

export default Testimonial