import { cva } from 'class-variance-authority'
import React from 'react'

const Button = ({ bg, text, radius, border, ...props }) => {
  return (
    <button {...props} className={buttonVariants({ bg, text, radius, border })} />
  )
}

const buttonVariants = cva("sm:py-[15px] sm:px-[28px] px-[19px] py-[12px] text-[length:var(--md-text)] font-semibold", {
    variants : {
        bg : {
            purple : "bg-[color:var(--purple)]",
            purpleGradient : "from-10% from-[#696BEB] via-[#5147DD] via-80% bg-gradient-to-b to-100% to-[#5147DD]",
            transparent : "bg-transparent"
          },
          text : {
            white : "text-white",
            blue : "text-[color:var(--blue)]",
            black : "text-[color:var(--black)]"
        },
        radius : {
          full : "rounded-full",
          sm : "rounded-[10px]"
        },
        border : {
          blue : "border-2 border-[color:var(--blue)]",
          none : "border-none"
        }
    },
    defaultVariants : {
      bg : "purpleGradient",
      text : "white",
      radius : "sm",
      border : "none"
    }
})

export default Button