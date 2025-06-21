import {
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import project1 from "../assets/images/pic1.jpg";
import project2 from "../assets/images/pic2.jpg";
import { useEffect } from "react";

const COLORS = ["#000000", "#59a4f9"];

const About = () => {
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <section id="about" className=" text-white p-8">
      <h2 className=" text-6xl font-bold mb-8">
        About{" "}
        <span className=" bg-gradient-to-tr from-blue-100 via-blue-600 via-5% to-blue-100 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          style={{
            borderLeft: border,
            borderBottom: border,
            borderRight: border,
            borderTop: "none",
          }}
          className="  rounded-sm rounded-br-[60px] rounded-bl-[60px] p-6  shadow-sm shadow-blue-400"
        >
          <h3 className="text-2xl font-bold mb-2">01. Backgroud</h3>
          <p className=" text-white/50 mb-6">
            I'm a passionate full-stack developer with a strong foundation in
            computer science and a love for creating innovative web solutions.
            My journey in tech started with a curiosity about how things work,
            which led me to pursue a career in web development.
          </p>

          <div className=" rounded-lg p-4 mb-4 border border-white/20">
            <code className=" text-blue-400/50">
              const skills = [ <br />
              &nbsp;&nbsp;'Javascript',
              <br />
              &nbsp;&nbsp;'React',
              <br />
              &nbsp;&nbsp;'Node.js',
              <br />
              &nbsp;&nbsp;'Express.js',
              <br />
              &nbsp;&nbsp;'MongoDB',
              <br />
              ];
            </code>
          </div>
        </motion.div>

        <motion.div
          style={{
            borderLeft: border,
            borderBottom: border,
            borderRight: border,
            borderTop: "none",
          }}
          className=" rounded-sm rounded-br-[60px] rounded-bl-[60px] p-6 bg-gradient-to-b from-transparent via-transparent to-blue-400/10 shadow-sm shadow-blue-400"
        >
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className=" text-white/50 mb-6">
            I specialize in building robust and scalable web applications using
            modern technologies. My expertise spans both back-end and front-end
            development, allowing me to create seamless, end-to-end solutions.
          </p>
          <div className=" mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              alt="Project 1"
              className=" absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            borderLeft: border,
            borderBottom: border,
            borderRight: border,
            borderTop: "none",
          }}
          className=" rounded-sm rounded-br-[60px] rounded-bl-[60px] p-6 bg-gradient-to-b from-transparent via-transparent to-blue-400/10 shadow-sm shadow-blue-400"
        >
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className=" text-white/50 mb-6">
            I'm proficient in a wide range of technologies and constantly
            expanding my skill to set to stay at the forefront of web
            development.
          </p>
          <div className=" grid grid-cols-1 text-center gap-4">
            <div className=" border border-white/20 rounded-lg p-3">
              <h4 className=" text-blue-300 font-medium mb-2">Frontend</h4>
              <ul className=" text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>Javascript</li>
                <li>TailwindCSS</li>
                <li>Framer Motion</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className=" border border-white/20 rounded-lg p-3">
              <h4 className=" text-blue-300 font-medium mb-2">Backend</h4>
              <ul className=" text-white/50 space-y-1 text-sm">
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Clerk</li>
                <li>Razorpay</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          style={{
            borderLeft: border,
            borderBottom: border,
            borderRight: border,
            borderTop: "none",
          }}
          className=" rounded-sm rounded-br-[60px] rounded-bl-[60px] p-6  shadow-sm shadow-blue-400"
        >
          <div className="space-y-4">
            <div>
              <label className=" block text-sm font-medium mb-1">
                Front-end
              </label>
              <div className=" w-full bg-white/10 rounded-full h-2">
                <div
                  className=" bg-gradient-to-r from-blue-300/30 via-blue-300/50 to-blue-400 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className=" block text-sm font-medium mb-1">
                Back-end
              </label>
              <div className=" w-full bg-white/10 rounded-full h-2">
                <div
                  className=" bg-gradient-to-r from-blue-300/30 via-blue-300/50 to-blue-400 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className=" block text-sm font-medium mb-1">Java</label>
              <div className=" w-full bg-white/10 rounded-full h-2">
                <div
                  className=" bg-gradient-to-r from-blue-300/30 via-blue-300/50 to-blue-400 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className=" block text-sm font-medium mb-1">DSA</label>
              <div className=" w-full bg-white/10 rounded-full h-2">
                <div
                  className=" bg-gradient-to-r from-blue-300/30 via-blue-300/50 to-blue-400 h-2 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
          </div>

          <h3 className=" text-2xl font-bold mt-4 mb-2">04. Approach</h3>
          <p className=" text-white/50">
            I believe in writing clean, maintainable code and following the best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </motion.div>

        <motion.div
          style={{
            borderLeft: border,
            borderBottom: border,
            borderRight: border,
            borderTop: "none",
          }}
          className=" rounded-sm rounded-br-[60px] rounded-bl-[60px] p-6  shadow-sm shadow-blue-400 flex flex-col justify-between"
        >
          <div className=" relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className=" absolute inset-0 w-full h-full object-cover object-bottom"
            />
          </div>
          <div>
            <h3 className=" text-2xl font-bold mt-4 mb-2">05. Goals</h3>
            <p className=" text-white/50">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community. I'm
              always excited to learn new technologies and push the boundaries
              of what's possible in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
