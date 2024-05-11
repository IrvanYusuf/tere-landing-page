import React from "react";
import Benefit1 from "@/assets/benefit1.png";
import Benefit2 from "@/assets/benefit2.png";
import Benefit3 from "@/assets/benefit3.png";

const SectionBenefit = () => {
  return (
    <div className="container mt-20" id="benefit">
      <div className="flex justify-center items-center">
        <h2 className="md:text-5xl text-3xl font-extrabold">
          <span className="text-[#75BF7A]">TERE</span> BENEFITS
        </h2>
      </div>
      <div className="mt-20 flex md:flex-row md:justify-start justify-center flex-col items-center md:gap-y-0 gap-y-4">
        <div className="flex-1 flex flex-col justify-center md:items-start items-center">
          <div className="flex gap-x-4 items-center justify-center md:items-center md:justify-start">
            <h2 className="text-[#75BF7A] text-6xl">01.</h2>
            <h3 className="text-2xl font-semibold w-[50%]">
              Flexible working hours
            </h3>
          </div>
          <p className="text-2xl text-textSecondary-Default mt-3 md:w-[70%] md:text-start text-center">
            You can decide when, and how much time you want to drive.
          </p>
        </div>
        <div className="flex-1">
          <img src={Benefit1} alt="" />
        </div>
      </div>
      <div className="mt-20 flex md:flex-row-reverse flex-col items-center md:gap-y-0 gap-y-4">
        <div className="flex-1 md:justify-start justify-center md:items-start items-center flex flex-col">
          <div className="flex items-center gap-x-4">
            <h2 className="text-[#75BF7A] text-6xl">02.</h2>
            <h3 className="text-2xl font-semibold w-[50%]">Earnings</h3>
          </div>
          <p className="text-2xl text-textSecondary-Default mt-3 md:w-[70%] md:text-start text-center">
            By driving with tere you can earn more.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={Benefit2} alt="" />
        </div>
      </div>
      <div className="mt-20 flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4">
        <div className="flex-1 flex flex-col md:items-start justify-center items-center">
          <div className="flex gap-x-4 items-center justify-center md:justify-start">
            <h2 className="text-[#75BF7A] text-6xl">03.</h2>
            <h3 className="text-2xl font-semibold w-[50%]">
              Customer support 24/7
            </h3>
          </div>
          <p className="text-2xl text-textSecondary-Default mt-3 md:w-[70%] md:text-start text-center">
            Tere is a local service provider and we are proud to support you in
            your local language. We are proud to be at your service 24/7!
          </p>
        </div>
        <div className="flex-1">
          <img src={Benefit3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionBenefit;
