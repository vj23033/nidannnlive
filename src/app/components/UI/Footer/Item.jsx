import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul className="flex flex-col sm:gap-[18px] order-2 sm:order-none">
      <h1 className="mb-1 sm:text-[20px] text-[16px] font-bold text-[#170F49] ">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-[#6F6C90] py-[10px] hover:text-teal-400 duration-300 text-[length:var(--md-text)] cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;