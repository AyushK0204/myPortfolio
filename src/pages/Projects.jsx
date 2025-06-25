import {
  motion,
  AnimatePresence,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import proj1 from "../assets/images/job-portal-gif.gif";
import proj2 from "../assets/images/piccolo-gif.gif";
import proj3 from "../assets/images/eleganza-gif.gif";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Jobहै",
    desc: "Jobहै is a job portal project designed to connect job seekers with employers. This web-based platform provides a simple interface for:\n -Browsing job listings\n -Submitting applications\n -Managing recruitment efficiently",
    devstack: "MongoDB, Express.js, React, Node.js, Vite, Clerk, Cloudinary",
    link: "https://job-portal-client-seven-bay.vercel.app/",
    git: "https://github.com/AyushK0204/job-portal",
    src: proj1,
  },
  {
    title: "Piccolo",
    desc: "Piccolo is an AI-powered image generation platform that transforms your text prompts into stunning visuals. This web-based tool offers a seamless experience for:\n-Generating high-quality images from simple text prompts\n -Exploring creative possibilities with AI-generated art\n -Buying additional credits to unlock more generations (free credits are limited)",
    devstack: "MongoDB, Express.js, React, Node.js, Vite, Razorpay, Motion",
    link: "https://ai-image-generator-client-chi.vercel.app/",
    git: "https://github.com/AyushK0204/ai-image-generator",
    src: proj2,
  },
  {
    title: "Eleganza",
    desc: "Eleganza is a feature-rich e-commerce project designed to provide a seamless online shopping experience. This web-based platform provides a simple interface for:\n-User Authentication & Authorization\n-Filter & Browse a Wide Range of Products\n-Secure Payment Integration\n-Review System\n-Admin Portal",
    devstack:
      "MongoDB, Express.js, React, Node.js, Stripe, Redux, Bootstrap, Material-UI",
    link: "#",
    git: "https://github.com/AyushK0204/ecommerce-website",
    src: proj3,
  },
];

const COLORS = ["#49a7ff", "#005dff"];

const Projects = () => {
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`2px solid ${color}`;
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <div className=" text-white py-24 md:py-48" id="projects">
      <div className=" container mx-auto px-4">
        <h2 className=" text-6xl font-bold text-center mb-16">
          Selected <motion.span style={{ color }}>Projects</motion.span>
        </h2>
        <div className=" space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" bg-white/5 rounded-lg overflow-hidden shadow-sm shadow-blue-400 hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                style={{ border }}
                className=" p-6 flex justify-between items-center cursor-pointer bg-black/2"
                onClick={() => toggleExpand(index)}
              >
                <h3 className=" text-4xl font-semibold ">{project.title}</h3>
                <div className=" flex items-center space-x-4">
                  <span className=" text-3xl font-light text-blue-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </motion.div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className=" flex flex-col md:flex-row gap-8 py-4">
                      <img
                        src={project.src}
                        alt={project.title}
                        className=" w-full md:w-1/2 h-64 object-contain"
                      />
                      <div className=" flex-1">
                        <p className=" text-white/70 mb-4 whitespace-pre-line">
                          {project.desc}
                        </p>
                        <p className=" text-blue-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>

                        <div className=" flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className=" text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className=" text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
