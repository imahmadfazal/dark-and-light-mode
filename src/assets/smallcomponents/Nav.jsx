import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { RxCrossCircled } from "react-icons/rx";

export const Nav = () => {
  const { theme, setTheme, navOpen, setNavopen } = useContext(ThemeContext);
  if (!navOpen) return null;
  return (
    <div>
      <nav className="min-h-screen flex flex-col items-center gap-5 md:min-h-2 md:bg-primaryBlue md:flex-row md:h-18 lg:h-18">
        <h2 className="pl-5 text-white text-2xl font-bold  bg-primaryBlue w-full flex items-center justify-between h-14 md:text-3xl lg:text-4xl ">
          <div className="md:pb-1">MyApp</div>
          <div
            className="block md:hidden"
            onClick={() => {
              setNavopen(false);
            }}
          >
            <RxCrossCircled />
          </div>
        </h2>

        <ul className="flex flex-col gap-5 p-5 text-lg md:flex-row md:gap-4  md:p-0 md:text-white  items-center md:text-sm lg:text-sm">
          <li>
            <a href="/" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="font-bold">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="font-bold">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="font-bold">
              Contact
            </a>
          </li>
          <div className="w-2/3 h-px bg-black opacity-30 block md:hidden"></div>
          <button className="font-bold">Signin</button>
          <button className="font-bold">SignUp</button>
        </ul>

        <div className=" flex flex-col gap-5 w-full items-center text-lg md:flex-row md:text-sm sm:gap-2 md:justify-end">
          <div className="w-2/3 h-px bg-black opacity-30 block md:hidden"></div>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="btn-grad font-bold"
          >
            Toggle Theme
          </button>
        </div>
      </nav>
    </div>
  );
};
