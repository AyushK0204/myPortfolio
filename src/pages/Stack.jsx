import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import {
  SiJavascript,
  SiGithub,
  SiGit,
  SiOracle,
  SiCplusplus,
  SiExpress,
  SiRedux,
  SiVite,
  SiFramer,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Javascript",
    icon: <SiJavascript size={100} />,
    color: "text-blue-300",
  },
  {
    id: 2,
    name: "Tailwindcss",
    icon: <SiTailwindcss size={100} />,
    color: "text-blue-300",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-blue-300",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-blue-300",
  },
  {
    id: 5,
    name: "MongoDB",
    icon: <SiMongodb size={100} />,
    color: "text-blue-300",
  },
  {
    id: 6,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-blue-300",
  },
  {
    id: 7,
    name: "Express.js",
    icon: <SiExpress size={100} />,
    color: "text-blue-300",
  },
  {
    id: 8,
    name: "Vite",
    icon: <SiVite size={100} />,
    color: "text-blue-300",
  },
  {
    id: 9,
    name: "Redux",
    icon: <SiRedux size={100} />,
    color: "text-blue-300",
  },
  {
    id: 10,
    name: "Java",
    icon: <DiJava size={100} />,
    color: "text-blue-300",
  },
  {
    id: 11,
    name: "C++",
    icon: <SiCplusplus size={100} />,
    color: "text-blue-300",
  },
  {
    id: 12,
    name: "Oracle",
    icon: <SiOracle size={100} />,
    color: "text-blue-300",
  },
  {
    id: 13,
    name: "Git",
    icon: <SiGit size={100} />,
    color: "text-blue-300",
  },
  {
    id: 14,
    name: "GitHub",
    icon: <SiGithub size={100} />,
    color: "text-blue-300",
  },
];
const COLORS = ["#009dff", "#006eff"];

const Stack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const color = useMotionValue(COLORS[0]);
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section
      className=" py-24 md:py-64 max-w-[1200px] mx-auto text-center"
      id="stack"
    >
      <h2 className=" text-7xl text-gray-100 font-bold mb-20">
        My <motion.span style={{ color }}>Stack</motion.span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
              }),
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                },
              },
            }}
            className=" bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <p className=" text-white/20 text-xl">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
