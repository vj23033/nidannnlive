import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500 flex gap-[20px]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          {/* <ion-icon name={icon.name}></ion-icon> */}
          <img src={icon.link} alt="icon" width={10} height={10} />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;