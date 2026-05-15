// Skills.jsx

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaDatabase,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiMysql,
  SiCanva,
  SiC,
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiPycharm,
  SiJupyter,
  SiRender,
} from "react-icons/si";


import { VscVscode } from "react-icons/vsc";

import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>
          <span>Skills & Technologies</span>
        </h2>
      </motion.div>

      <div className="skills-container">

        {/* WEB DEVELOPMENT */}
        <motion.div
          className="skills-card web-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Web Development</h3>

          <div className="skills-grid">

            <a href="#" target="_blank" rel="noreferrer">
              <FaHtml5 />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaCss3Alt />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaJs />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaReact />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaNodeJs />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiExpress />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiMongodb />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiTailwindcss />
            </a>

            {/* <a href="#" target="_blank" rel="noreferrer">
              <FaBootstrap />
            </a> */}

            <a href="#" target="_blank" rel="noreferrer">
              <SiMysql />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaDatabase />
            </a>

            {/* <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a> */}

          </div>
        </motion.div>

        {/*TECHNICAL SKILLS*/}
          <motion.div
            className="skills-card tech-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3>Technical Skills</h3>

            <div className="skills-grid">

              <a href="#" target="_blank" rel="noreferrer">
                <FaJava />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <SiC />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <SiCplusplus />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaPython />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <FaJs />
              </a>

              {/* <a href="#" target="_blank" rel="noreferrer">
                <SiNumpy />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <SiPandas />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <SiPlotly />
              </a>

              <a href="#" target="_blank" rel="noreferrer">
                <SiScikitlearn />
              </a> */}

              <a href="#" target="_blank" rel="noreferrer">
                <FaFileExcel />
              </a>

            </div>
          </motion.div>

        {/* DEVELOPMENT TOOLS */}
        <motion.div
          className="skills-card tools-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >
          <h3>Development Tools & Platforms</h3>

          <div className="skills-grid">

            <a href="#" target="_blank" rel="noreferrer">
              <FaGitAlt />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiPostman />
            </a>


            {/* <a href="#" target="_blank" rel="noreferrer">
              <FaFigma />
            </a> */}

            <a href="#" target="_blank" rel="noreferrer">
              <SiNetlify />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiVercel />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiRender />
             </a>

            <a href="#" target="_blank" rel="noreferrer">
              <VscVscode />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiPycharm />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiJupyter />
            </a>

            {/* <a href="#" target="_blank" rel="noreferrer">
              <SiCanva />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaReact />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiTailwindcss />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <SiMysql />
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              <FaNodeJs />
            </a>  */}

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;