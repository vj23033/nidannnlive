import React from 'react'
import TestimonialCardPricing from '../components/TestimonialCardPricing'

const Testimonials2 = () => {

  const testimonials = [
    {
      image : "/test_img.png",
      remark : "I've tried other wireframing tools, but Sparkle Mono stands out for its elegance and simplicity. It has streamlined our prototyping process",
      reviewer : "Jessica Walker",
      role : "Procduct manager, Innovate Hub"
    },
    {
      image : "/test_img.png",
      remark : "I've tried other wireframing tools, but Sparkle Mono stands out for its elegance and simplicity. It has streamlined our prototyping process",
      reviewer : "Jessica Walker",
      role : "Procduct manager, Innovate Hub"
    },
    {
      image : "/test_img.png",
      remark : "I've tried other wireframing tools, but Sparkle Mono stands out for its elegance and simplicity. It has streamlined our prototyping process",
      reviewer : "Jessica Walker",
      role : "Procduct manager, Innovate Hub"
    }
  ]

  return (
    <div className='flex flex-col text-center py-[100px] px-[16px] sm:px-[120px] gap-[20px] items-center'>
      <h1 className='text-[length:var(--heading-h1)] font-bold leading-[72px]'>Talks in the Town</h1>
      <p className=' text-[#71717A]'>Discover glowing reviews from top-tier clients. Now its your <br />turn to Elevate your hospital management</p>

      <div className='flex flex-col sm:flex-row py-[60px] justify-between gap-[24px]  pricing_testimonials_container'>
        {
          testimonials.map((testimonial)=>{
            return <TestimonialCardPricing testimonial={testimonial} />
          })
        }
      </div>

    </div>
  )
}

export default Testimonials2