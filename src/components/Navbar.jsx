import { useState } from "react";
import Logo from "../assets/asset 0.png";
import ElectronIcon from "../assets/asset 1.svg";

const navLinks = ["Pricing", "Docs", "Changelog", "Blogs", "Login"];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-3 flex bg-white justify-between items-center fixed top-0 right-0 left-0 z-20 shadow-md">
        {/* Logo */}
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            className="object-cover max-w-12 max-h-12"
            src={Logo}
            alt="Logo"
          />
          <span className="font-medium text-lg font-display">ToDesktop</span>
        </a>

        {/* NavLinks */}
        <div id="nav-menu" className="gap-12 hidden lg:flex">
          {navLinks.map((link, index) => (
            <a key={index} href="#" className="font-medium hover:text-primary">
              {link}
            </a>
          ))}
        </div>

        {/* Electron Btn */}
        <div className="hidden lg:flex flex-1 justify-end">
          <button className=" flex items-center gap-2 border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 cursor-pointer">
            <img src={ElectronIcon} alt="" />
            <span>Electron Developers</span>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        <button className="p-2 lg:hidden" onClick={handleMenu}>
          <i className="fa-solid fa-bars text-gray-600" />
        </button>

        <div
          className={`fixed bg-white inset-0 p-3 z-10 lg:hidden ${
            !isMenuOpen && "hidden"
          }`}
        >
          <div id="nav-bar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img
                className="object-cover max-w-12 max-h-12"
                src={Logo}
                alt="Logo"
              />
              <span className="font-medium text-lg font-display">
                ToDesktop
              </span>
            </a>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-gray-600" />
            </button>
          </div>
          {/* Mobile Navlinks */}
          <div className="mt-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="h-[1px] bg-gray-300"></div>
          <button className="mt-6 w-full flex items-center gap-2 px-6 py-4 rounded-lg hover:bg-gray-50 cursor-pointer">
            <img src={ElectronIcon} alt="" />
            <span>Electron Developers</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
