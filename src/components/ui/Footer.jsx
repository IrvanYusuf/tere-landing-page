import React from "react";
import Logo2 from "@/assets/logo2.png";
import { Button } from "./button";
import PlayStoreImg from "@/assets/play-store.png";
import AppStoreImg from "@/assets/app-store.png";

const Footer = () => {
  return (
    <footer className="mt-40 border-t py-8">
      <div className="container">
        <div className="flex md:flex-row md:gap-y-0 gap-y-4 flex-col justify-between items-center">
          <div className="md:order-1 order-1">
            <img src={Logo2} alt="" />
          </div>
          <div className="flex-1 flex justify-center md:order-2 order-3">
            <div className="md:text-start text-center">
              <span className="font-medium text-xl text-[#272042]">
                Be Our Friend
              </span>
              <ul className="text-textSecondary-Default mt-2 flex flex-col gap-y-2">
                <li>3, Season Park, Jakarta</li>
                <li>support@foodyar.co,id</li>
                <li>021 - 1111 - 2222</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 md:order-3 order-2">
            <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 justify-end gap-x-3">
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
        </div>
        <p className="text-[#75BF7A] md:mt-14 mt-4 text-center">
          All Rights Reserved tere by Codematics 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
