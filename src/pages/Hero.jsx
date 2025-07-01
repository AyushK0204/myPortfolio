import {
  easeInOut,
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import profilepic from "../assets/images/meee.png";
import { useEffect } from "react";

const COLORS = ["#FFC02E", "#CE84CF", "#DD335C", "#13FFAA"];

const Hero = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
  radial-gradient(90% 65%, black 50%, ${color})
`;
  const border = useMotionTemplate`1px solid ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <div className=" relative overflow-clip min-h-screen text-white bg-gradient-to-b from-black via-blue-400/35 to-blue-500">
      <motion.div
        style={{ backgroundImage }}
        className="absolute w-[2200px] h-[1000px] rounded-[100%] left-1/2 -translate-x-1/2 top-[60%] border-4 border-blue-600/5 z-0"
      />
      <div className=" container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className=" relative mb-8 mt-18"
          >
            <div className=" absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
            <img
              src={profilepic}
              alt="Ayush Kumar"
              className="w-[250px] relative z-10 transition-all duration-300 hover:-rotate-2 hover:scale-110 "
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
            className=" absolute bottom-18 w-150 h-36 bg-white/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.8 }}
            className=" max-w-2xl"
          >
            <h1 className=" text-6xl md:text-7xl font-bold tracking-tighter mb-4">
              Hi, I am <br />
              <span className="bg-gradient-to-br from-blue-400 via-yellow-600 to-blue-300 bg-clip-text text-transparent">
                Ayush
              </span>{" "}
              Kumar
            </h1>
            <p className=" text-xl to-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I'm a full-stack developer specializing in creating websites that
              deliver exceptional user experiences.
            </p>

            <div className=" flex gap-4 justify-center">
              <motion.a
                style={{
                  borderBottom: border,
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
                href="FSD_Resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-block px-8 py-3 font-semibold text-white uppercase tracking-wider rounded-full bg-transparent hover:bg-black/40 overflow-hidden transition duration-300 group "
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none " />

                <span className="relative z-10">My Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
