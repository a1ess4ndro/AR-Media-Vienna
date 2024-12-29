import { useState } from 'react';

//import styling libraries
import { motion } from 'motion/react';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="navbarContainer">
      <div
        id="navbar"
        className="flex flex-row border-b border-slate-400 px-4 py-6 items-center justify-between sticky"
      >
        <img
          src="../../public/logo.png"
          alt="Logo"
          className="p-0 m-0 w-[12.5%] h-auto"
        />
        <button
          id="Hamburger"
          className={`flex flex-col justify-center items-center w-6 h-auto ${
            isMobileMenuOpen ? 'gap-0' : 'gap-2'
          }`}
          onClick={toggleMobileMenu}
        >
          <span
            className={`bg-white block w-full h-[1px] transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? 'opacity-100 rotate-45' : 'opacity-100'
            }`}
          />
          <span
            className={`bg-white block w-full h-[1px] transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? 'hidden -rotate-45' : 'rotate-0 delay-100'
            }`}
          />
          <span
            className={`bg-white block w-full h-[1px] transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? 'opacity-100 -rotate-45' : 'opacity-100'
            }`}
          />
        </button>
      </div>
      <div
        id="mobileMenu"
        className={` bg-black z-50 flex items-center justify-center fixed w-full h-screen py-12 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ul
          id="mobileMenuList"
          className="z-50 flex flex-col gap-8 absolute top-[33.333%]"
        >
          <li className="hover:translate-x-5 hover:underline transition-transform duration-500">
            <a>
              <b>About</b>
            </a>
          </li>
          <li className="hover:translate-x-5 hover:underline transition-transform duration-500">
            <a>
              <b>Projects</b>
            </a>
          </li>
          <li className=" hover:translate-x-5 hover:underline transition-transform duration-500">
            <a>
              <b>Contact</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
