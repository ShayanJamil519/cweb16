import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full py-3 px-10 ">
      <div className="w-[55%] flex justify-between items-center">
        <Image
          src="/header__logo.svg"
          alt="header logo"
          width={157}
          height={50}
        />
        <div className="flex justify-center items-center gap-2">
          <div className="w-[9px] h-[9px] rounded-full bg-[#ebebef]"></div>
          <div className="w-[9px] h-[9px] rounded-full bg-[#ebebef]"></div>
          <Image
            src="/bullet__img.svg"
            alt="header logo"
            width={18}
            height={10}
          />
          <div className="w-[9px] h-[9px] rounded-full bg-[#ebebef]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
