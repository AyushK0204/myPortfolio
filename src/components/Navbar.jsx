import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className=" z-50 fixed flex justify-center w-full text-white font-bold">
      <div className=" border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className=" flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className=" transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className=" md:hidden absolute top-5 right-5 border rounded z-50 text-white/70 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className=" flex flex-col items-center justify-center space-y-10 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                onClick={closeNav}
                className="text-5xl font-semibold bg-gradient-to-tr from-blue-300 via-yellow-100 to-blue-300 bg-clip-text text-transparent"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
