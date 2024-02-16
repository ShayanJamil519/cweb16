import React from "react";

const Buttons = ({ text }: any) => {
  return (
    <button
      className={`w-full border-[1px] py-[16px] text-center rounded-[10px] text-[14px] font-medium ${
        text === "Alone" ? "border-[#01012E22]" : "border-[#1F2327]"
      }`}
    >
      {text}
    </button>
  );
};

export default Buttons;
