import React from "react";
import No1 from "@/assets/no1.png";
import No2 from "@/assets/no2.png";
import No3 from "@/assets/no3.png";
import No4 from "@/assets/no4.png";
import Phone from "@/assets/phone.png";

const SectionTereWork = () => {
  return (
    <div className="container mt-20" id="work">
      <div className="flex flex-col justify-center items-center">
        <h2 className="md:text-5xl text-3xl font-extrabold">
          HOW <span className="text-[#75BF7A]">TERE</span> WORKS
        </h2>
        <p className="text-textSecondary-Default font-medium text-xl md:w-[45%] text-center mt-5">
          Download and install the tere app. Enter your phone number and make
          your user account. when approved you may start driving.
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center mt-16 gap-x-8 items-center">
        <div className="flex-1 flex flex-col justify-around order-2 mt-8">
          <div className="flex flex-col md:items-end items-center gap-y-2 mb-8 mt-8">
            <div>
              <img src={No1} alt="number" />
            </div>
            <span className="text-[22px] font-extrabold">REQUEST A RIDE</span>
            <p className="text-xl text-textSecondary-Default md:w-[100%] md:text-right text-center">
              Have to reach office or going for shopping ? Just put your current
              location and destination and search a ride that suits you
            </p>
          </div>
          <div className="flex flex-col md:items-end items-center gap-y-2">
            <div>
              <img src={No3} alt="number" />
            </div>
            <span className="text-[22px] text-end font-extrabold">
              INSTANT NOTIFICATIONS
            </span>
            <p className="text-xl text-textSecondary-Default md:w-[70%] md:text-right text-center">
              Get instant notifications for your rides and be in contact with
              fellow riders all the time
            </p>
          </div>
        </div>
        <div className="h-full w-full flex items-center justify-center flex-1 md:order-2 order-1 ">
          <img src={Phone} alt="phone" />
        </div>
        <div className="flex-1 flex flex-col justify-around order-3 mt-8">
          <div className="flex flex-col md:items-start items-center gap-y-2 mb-8">
            <div>
              <img src={No2} alt="number" />
            </div>
            <span className="text-[22px] font-extrabold">POST A RIDE</span>
            <p className="text-xl text-textSecondary-Default md:w-[70%] md:text-left text-center">
              Going somewhere but hate to travel alone - just post your ride
              details and publish it
            </p>
          </div>
          <div className="flex flex-col md:items-start items-center gap-y-2">
            <div>
              <img src={No4} alt="number" />
            </div>
            <span className="text-[22px] font-extrabold">CASHLESS PAYMENT</span>
            <p className="text-xl text-textSecondary-Default md:w-[70%] md:text-left text-center">
              Payment made easy by using your own Wallet - no more cash to carry
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTereWork;
