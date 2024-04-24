"use client"

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Faqs = () => {
  const [active, setActive] = useState(null)
  const Faqs = [
    {
      question: "How Nidaan HMS works?",
      answer: "Lorem ipsum dolor sit amet consectetur. Malesuada leo ullamcorper tincidunt sit ipsum id iaculis lectus sem. Consectetur lacus egestas ultrices amet eget malesuada tristique cursus ut. Ac massa aliquet maecenas ultrices lorem. Amet lectus porttitor enim mi pellentesque leo sapien ornare ac.",
    },
    {
      question: "How Nidaan HMS works?",
      answer: "Lorem ipsum dolor sit amet consectetur. Malesuada leo ullamcorper tincidunt sit ipsum id iaculis lectus sem. Consectetur lacus egestas ultrices amet eget malesuada tristique cursus ut. Ac massa aliquet maecenas ultrices lorem. Amet lectus porttitor enim mi pellentesque leo sapien ornare ac.",
    },
    {
      question: "How Nidaan HMS works?",
      answer: "Lorem ipsum dolor sit amet consectetur. Malesuada leo ullamcorper tincidunt sit ipsum id iaculis lectus sem. Consectetur lacus egestas ultrices amet eget malesuada tristique cursus ut. Ac massa aliquet maecenas ultrices lorem. Amet lectus porttitor enim mi pellentesque leo sapien ornare ac.",
    },
    {
      question: "How Nidaan HMS works?",
      answer: "Lorem ipsum dolor sit amet consectetur. Malesuada leo ullamcorper tincidunt sit ipsum id iaculis lectus sem. Consectetur lacus egestas ultrices amet eget malesuada tristique cursus ut. Ac massa aliquet maecenas ultrices lorem. Amet lectus porttitor enim mi pellentesque leo sapien ornare ac.",
    },
  ]

  const handleChangeActive = (index) => {
    if (index === active) {
      return setActive(null)
    }
    setActive(index)
  }

  return (
    <div className="mt-[100px] sm:mx-[120px] mx-[16px] bg-[#EBF4FF] border dark:border-gray-700 rounded-lg">
      <div className="flex flex-col sm:py-[70px] py-[20px] sm:px-[43px] px-[16px] gap-[20px] sm:items-center">
        <h1 className="text-[length:var(--heading-h1)] font-bold">
          Frequently asked questions
        </h1>

        <div className="flex gap-[20px] items-center">
          <div className="px-[10px] py-[6px] text-[purple] items-center rounded-3xl bg-[#E1E8FE]">
            <span>General</span>
          </div>

          <span>pricing</span>
          <span>other</span>
          <span>pricing</span>
        </div>
      </div>
      <div className="p-[43px] px-[16px] flex flex-col gap-[20px]">
        {
          Faqs.map((q, i) => {
            return <div className="flex flex-col border-b-2 py-[20px]">
              <span className="flex justify-between">
                <span className="flex items-center gap-[12px]">
                  <p className="text-[length:var(--lg-text)] font-semibold">{i + 1}</p>
                  <p className="text-[length:var(--lg-text)] font-semibold">{q.question}</p>
                </span>
                <ChevronDown onClick={() => handleChangeActive(i)} className={`cursor-pointer ${active === i ? "rotate-180" : ""}`} />
              </span>
              <p className={`text-[length:var(--md-text)] text-[color:var(--light-grey)] ${active === i ? "block" : "none" }`}>{q.answer}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Faqs;
