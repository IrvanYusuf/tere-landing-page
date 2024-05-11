import React from "react";
import { Input } from "./input";
import { Button } from "./button";

const SectionApplyToDrive = () => {
  return (
    <div className="container mt-20">
      <div className="bg-[#75BF7A] p-8 flex md:flex-row flex-col md:items-center md:justify-center rounded-md">
        <div className="flex-1">
          <h2 className="font-semibold text-white md:text-2xl text-xl">
            Let’s go. Get a link <br /> to download the app.
          </h2>
        </div>
        <div className="flex-1 flex md:flex-row flex-col w-full gap-x-3 md:gap-y-0 gap-y-3 md:mt-0 mt-3">
          <Input type="text" placeholder="Enter mobile phone number" />
          <Button>APPLY TO DRIVE</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionApplyToDrive;
