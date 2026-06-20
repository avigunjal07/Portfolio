import { FaArrowRight, FaDownload } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

import "./Home.css";

function Home() {

  // Cursor Glow Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);

  }, [mouseX, mouseY]);

  return (

    <section
      id="home"
      className="home-section"
    >

      {/* Animated Background */}
      <div className="background-wrapper">

        {/* Glow */}
        <div className="center-glow" />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.3, 1],
              x: [0, Math.random() * 80 - 40],
              y: [0, Math.random() * 80 - 40],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="particle"
            style={{
              width:
                Math.random() * 150 + 50 + "px",
              height:
                Math.random() * 150 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}

      </div>

      {/* Cursor Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="cursor-glow"
      />

      {/* Grid */}
      <div className="grid-bg"></div>

      {/* Navbar */}
      <nav className="navbar">

        <h2 className="logo">
          Avishkar Gunjal
        </h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="social-icons">

          <a href="https://github.com/avigunjal07" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/avishkar-gunjal/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/u/avigunjal07/" target="_blank">
            <SiLeetcode />
          </a>

          <a href="mailto:avishkargunjal07@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </nav>

      {/* Main Content */}
      <div className="home-container">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="left-content"
        >

          <p className="welcome-text">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="main-heading">
            Hello, I am <br />

            <span>
              <Typewriter
                words={[
                  "Avishkar Gunjal",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h1>

          <p className="role-text">
            Full Stack Developer (MERN) | 👨‍💻 Software Engineer <br />
            💻 Lifelong learner | Tech Enthusiast <br /><br />
          </p>


          {/* Buttons */}
          <div className="button-group">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="contact-btn"
            >
              Get In Touch
              <FaArrowRight />
            </motion.a>

            {/* Resume Preview */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Avishkar_Gunjal_BE_2027.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume
              <FaDownload />
            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="right-content"
        >

          <div className="profile-wrapper">

            {/* Rotating Border */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="rotating-border"
            />

            {/* Profile Image */}
            <motion.img
              src="/Avishkar Gunjal.jpeg"
              alt="Avishkar Gunjal"
              className="profile-image"
              
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Home;