import React from 'react'
// import { testimonials } from '../../data/data'
import TestimonialCard from '../components/UI/TestimonialCard'
import Brands from '../components/UI/Brands'

const Testimonials = () => {

    
    const testimonials = [
        {
            name: "Sarah Thompson",
            role: "Creative Director, PixelCraft",
            remark: "Sparkle Mono has revolutionized my web design process! The high fidelity wireframe sections are not only visually stunning but also incredibly easy to integrate. It has elevated the overall aesthetics of my projects",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Mark Johnson",
            role: "Creative Director, PixelCraft",
            remark: "“Sparkle Mono has become an essential part of our design toolkit. The wireframes are not only beautiful but also highly customizable!”",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Megan Carter",
            role: "Creative Director, PixelCraft",
            remark: "Sparkle Mono has become my secret weapon for client presentations. The high fidelity wireframes impress clients, helping them visualize the final product and making the approval process smoother.",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Jessica Walker",
            role: "Creative Director, PixelCraft",
            remark: "I've tried other wireframing tools, but Sparkle Mono stands out for its elegance and simplicity. It has streamlined our prototyping process",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Jessica Walker",
            role: "Creative Director, PixelCraft",
            remark: "I've tried other wireframing tools, but Sparkle Mono stands out for its elegance and simplicity. It has streamlined our prototyping process",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Alex Rodriguez",
            role: "Creative Director, PixelCraft",
            remark: "As a web developer, Sparkle Mono is a game-changer. The pre-made wireframes have saved me countless hours, allowing me to focus more on functionality and less on design. Truly a time-saving gem!",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Kevin Lee",
            role: "Creative Director, PixelCraft",
            remark: "We improved our collaboration with clients. The clear and beautiful wireframes help bridge the communication gap, making it easier for clients to understand our design concepts.",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Emily Chang",
            role: "Creative Director, PixelCraft",
            remark: "I was skeptical at first, but Sparkle Mono exceeded my expectations. The variety of sections is impressive, and the attention to detail is unmatched. It's like having a design team at your fingertips",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "JKevin Lee",
            role: "Creative Director, PixelCraft",
            remark: "Sparkle Mono is a must-have for any designer or developer. The time saved on creating stunning wireframes is invaluable, allowing us to focus on delivering exceptional user experiences..",
            avatar: "/dummyAvatar1.jpg"
        },
        {
            name: "Ryan Miller",
            role: "Creative Director, PixelCraft",
            remark: "The quality of Sparkle Mono's wireframes is unmatched. They have added a level of professionalism to our projects that was missing before.",
            avatar: "/dummyAvatar1.jpg"
        },
    ]

    return (
        <>        <div className='flex flex-col py-[40px] items-center'>
            <div className='flex flex-col items-center gap-[20px] text-center px-[20px] sm:p-0'>
                <p className='bg-[#E1E8FE] sm:text-[18px] text-[13px] font-semibold text-[#201D49] px-[15px] py-[10px] max-w-fit rounded-[100px]'>Testimonials</p>
                <h3 className=' sm:text-[48px] text-[20px] leading-[20px] sm:leading-[58px] font-extrabold'>Why our customers loves us</h3>
                <p className='sm:text-[length:var(--md-text)] text-[11px] leading-[13px] sm:leading-[28px] text-[color:var(--grey)] sm:max-w-[60%]'>We’re trusted by <span className='text-[color:var(--purple)] font-medium'>+1500</span> Hospitals in <span className='text-[color:var(--purple)] font-medium'>+6</span> States. Explain what results you’ve gained for your customers.</p>
                {/* <img src="/brands.png" alt="brands" className='my-[60px]' /> */}
                <div className='sm:my-[60px] my-[20px]'>
                    <Brands height={32} width={169} justify={"between"} />

                </div>
            </div>

            <div className='flex flex-col flex-wrap gap-[20px] sm:max-h-[800px] testimonials_container px-[20px] '>
                {
                    testimonials.map((testimonial, index) => {
                        if (index > 8) return;
                        return <TestimonialCard key={testimonial.remark} name={testimonial.name} avatar={testimonial.avatar} remarks={testimonial.remark} role={testimonial.role} />
                    })
                }
            </div>
        </div>

            

        </>

    )
}

export default Testimonials