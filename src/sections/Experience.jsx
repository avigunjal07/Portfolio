import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

import "./Experience.css";

function Experience() {

  const experiences = [
    {
      role: "Java & DSA Intern",
      company: "Talent Battle Pvt. Ltd.",
      duration: "July 1, 2025 - July 30, 2025",
      location: "Offline (In-Person)",

      description: [
        "Completed an intensive internship focused on Java and Data Structures & Algorithms.",

        "Solved complex algorithmic problems and optimized code for better time and space complexity.",

        "Gained practical experience in object-oriented programming and problem-solving techniques.",

        "Improved logical thinking through hands-on coding and rigorous DSA training.",

        "Practice questions on Aptitude Test."
      ],

      skills: [
        "Java",
        "Data Structures and Algorithms",
        "OOP",
        "Problem Solving",
        "Aptitude",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="experience-section"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="experience-bg">

        <div className="top-line"></div>

        <div className="vertical-lines">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
              }}
              className="line"
            />
          ))}
        </div>

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

      </div>

      <div className="experience-container">

        {/* ================= HEADING ================= */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="experience-heading"
        >
          Work <span>Experience</span>
        </motion.h2>

        {/* =============== EXPERIENCE CARD =============== */}

        <div className="experience-wrapper">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.6 }}
              className="experience-card"
            >

              {/* LEFT BLUE BORDER */}
              <div className="left-border"></div>

              {/* TOP */}
              <div className="experience-top">

                <div>

                  <h3>{exp.role}</h3>

                  <div className="company">

                    <FaBriefcase />

                    <span>{exp.company}</span>

                  </div>

                </div>

                <div className="experience-info">

                  <div className="info-item">
                    <FaCalendarAlt />
                    <span>{exp.duration}</span>
                  </div>

                  <div className="info-item location">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>

                </div>

              </div>

              {/* DESCRIPTION */}

              <ul className="experience-list">

                {exp.description.map((point, i) => (
                  <li key={i}>
                    <span className="dot">•</span>
                    {point}
                  </li>
                ))}

              </ul>

              {/* SKILLS */}

              <div className="skills">

                {exp.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;