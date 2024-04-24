"use client"
import React, {useState} from 'react'
import Button from './Button'
import { Menu, X } from "lucide-react";
import Link from "next/link"
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Top Features", href: "/features" },
    { name: "Our Hospital", href: "/hospital" },
    { name: "Pricing", href: "/pricing" },
    { name: "About us", href: "/about" },
  ];

  const pathName = usePathname()
   

      const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

      const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
      };
   
  return (
    <>  
 <nav className=" top-0 z-50 py-3 sm:px-[120px] cursor-pointer border-b border-[#E4E4E7]">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src='/logohms.png' alt="Logo" />
            <span className="text-xl font-bold tracking-tight">Logoipsum</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                className={`text-[#737373] text-[16px] leading-[24px] font-bold ${
                  pathName === item.href ? 'border-b-2 border-black text-black' : 'hover:border-black hover:text-black'
                }`}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center gap-[5px] items-center">
            <a href="#" className="py-2 px-3 font-bold text-[16px] leading-[24px]">
                Contact Us
            </a>
            <Button bg={"transparent"} text={"blue"} border={"blue"}>Login</Button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
               contact
              </a>
              <Button bg={"purple"} text={"white"}>Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>

</>

  )
}

export default Navbar