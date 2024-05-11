import React, { useState } from "react";
import Logo from "@/assets/logo.png";
import { Button } from "./button";
import { AlignRight, X } from "lucide-react";
const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const links = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "How tere works",
      path: "#work",
    },
    {
      name: "Tere benefits",
      path: "#benefit",
    },
  ];
  return (
    <div className="bg-white border-b py-6 fixed top-0 w-full">
      <div className="md:flex justify-between container items-center">
        <a href="#">
          <img src={Logo} alt="logo" width={"140px"} height={"51px"} />
        </a>
        <button
          className="md:hidden absolute top-6 right-6"
          onClick={() => setOpenHamburger(!openHamburger)}
          name="button"
        >
          {openHamburger ? <X size={32} /> : <AlignRight size={32} />}
        </button>
        <div
          className={`md:flex items-center gap-x-8 md:bg-white md:py-0 py-3 duration-700 md:z-auto z-[-1] md:static absolute bg-white left-0 md:left-auto md:px-0 px-8 w-full md:w-auto ${
            openHamburger ? "block" : "hidden"
          }`}
        >
          <nav>
            <ul className="md:flex md:gap-y-0 gap-y-9 md:gap-x-8 font-medium">
              {links.map((link, i) => (
                <li key={i} className="my-5 md:my-0">
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            className="md:static flex md:w-auto w-full"
            variant="secondary"
          >
            Help Center
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
