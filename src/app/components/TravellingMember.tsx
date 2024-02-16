import Image from "next/image";
import React from "react";

const TravellingMember = ({ title, description, counter }: any) => {
  return (
    <div className="w-full flex justify-between items-center py-3 border-t-[1px] border-[#02023414]">
      <div>
        <h1
          className="text-[14px] font-medium text-[#1C2024] mb-[2px]
          
"
        >
          {title}
        </h1>
        <p
          className="text-[#60646C] font-normal text-[12px] 
"
        >
          {description}
        </p>
      </div>
      <div className="flex justify-center gap-3 items-center">
        <Image
          src="/subtract__logo.svg"
          alt="subtract logo"
          width={32}
          height={32}
          className="cursor-pointer"
        />
        <h1 className="font-semibold">{counter}</h1>
        <Image
          src="/add__logo.svg"
          alt="add logo"
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TravellingMember;
