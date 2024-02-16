import React from "react";
import Buttons from "./Buttons";
import Image from "next/image";
import TravellingMember from "./TravellingMember";

const LeftContainer = () => {
  return (
    <div className="w-[40%]">
      <h1
        className="text-[20px] font-bold text-[#1F2327]
"
      >
        Traveling Members
      </h1>
      <p
        className="text-[#60646C]
"
      >
        Are you traveling alone or with someone else?
      </p>
      <div className="flex flex-col gap-2 mt-9 mb-6">
        <Buttons text="Alone" />
        <Buttons text="With others" />
      </div>
      {/* Travelling Members Section */}

      <div className="w-full px-[16px] border-[1px] rounded-[16px] border-[#0000301B]">
        <div className="flex justify-start items-center gap-2 py-[16px]">
          <Image
            src="/member__logo.svg"
            alt="member logo"
            width={18}
            height={15}
          />

          <h1
            className="text-[14px] font-semibold text-[#1F2327]
"
          >
            Traveling Members
          </h1>
        </div>
        <TravellingMember
          title="Legal Spouse"
          description="Must have marrige certificate"
          counter="1"
        />

        <TravellingMember
          title="Children under 18"
          description="Must have birth certificate"
          counter="2"
        />
        <TravellingMember
          title="Pets"
          description="Must have documents"
          counter="5"
        />
      </div>

      {/* Button Bottom */}
      <div className="flex justify-between mt-10 items-center">
        <div className="flex justify-start items-center gap-2">
          <Image src="/back__logo.svg" alt="header logo" width={5} height={8} />
          <h1 className="text-[14px] font-semibold">Back</h1>
        </div>
        <button className="text-[14px] p-[16px] rounded-[10px] bg-[#000] font-semibold text-[#fff]">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LeftContainer;
