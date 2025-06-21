import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const COLORS = ["#009dff", "#006eff"];

const Footer = () => {
  const color = useMotionValue(COLORS[0]);
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <footer className=" py-8" id="contact">
      <div className=" max-w-[1200px] mx-auto px-4">
        <div className="text-center flex items-center justify-between flex-col md:flex-row">
          <div>
            <h2 className="md:text-6xl text-2xl max-md:text-center font-bold mb-10 text-white/50">
              Get in <motion.span style={{ color }}>touch</motion.span>
            </h2>
            <a
              href="mailto:ayu.k.210402@gmail.com"
              className="text-2xl md:text-4xl font-semibold text-white underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-300"
            >
              ayu.k.210402@gmail.com
            </a>
          </div>
        </div>

        <div className="relative z-10 text-center mt-8 py-12">
          <h1 className="hidden md:block text-[10rem] md:text-[7rem] lg:text-[10rem] font-bold text-white opacity-10">
            AYUSHKUMAR
          </h1>
          <h1 className="md:hidden relative text-8xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            AYUSH
            <br />
            KUMAR
          </h1>
        </div>
        <div className=" relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          {" "}
          <p className=" text-gray-200 caption text-n-4 lg:block">
            © 2025. All rights reserved.
          </p>
          <ul className=" flex gap-5 flex-wrap">
            <a
              href="https://github.com/AyushK0204"
              aria-label="GitHub"
              className=" text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-61215b271/"
              aria-label="GitHub"
              className=" text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillLinkedin size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
