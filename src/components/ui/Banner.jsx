import React from "react";
import BannerImg from "@/assets/banner2.png";
import { Button } from "./button";
import PlayStoreImg from "@/assets/play-store.png";
import AppStoreImg from "@/assets/app-store.png";

const Banner = () => {
  return (
    <div className="container md:pt-32  lg:h-[50%]">
      <div className="flex md:flex-row flex-col-reverse lg:items-center lg:justify-center">
        <div className="flex-1 mt-6 md:mt-0 flex flex-col lg:h-screen lg:justify-end gap-y-10">
          <h1 className="md:text-6xl text-4xl font-extrabold md:text-start text-center">
            DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
          </h1>
          <p className="text-xl font-medium text-textSecondary-Default md:text-start text-center">
            Its simple and its free. Play your part in reducing Carbon Footprint
            and help Mother Nature to sustain its beauty. So what are you
            waiting for ? Lets ride together
          </p>
          <div className="flex gap-x-3">
            <Button className="flex gap-x-2 px-8 py-6">
              <img src={PlayStoreImg} alt="icon" width={"30px"} />
              <span>DOWNLOAD</span>
            </Button>
            <Button className="flex gap-x-2 px-8 py-6">
              <img src={AppStoreImg} alt="icon" width={"30px"} />
              <span>DOWNLOAD</span>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
