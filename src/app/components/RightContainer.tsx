import Image from "next/image";
import React from "react";

const RightContainer = () => {
  return (
    <div className=" flex justify-end items-center">
      <Image
        src="/Travel card.svg"
        alt="header logo"
        width={444}
        height={600}
      />
    </div>
  );
};

export default RightContainer;
