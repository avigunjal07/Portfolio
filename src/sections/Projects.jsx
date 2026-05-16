import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "NutriSync-AI : Meal Suggestion",

      tech: [
        "HTML",
        "css",
        "JS",
        "Machine Learning",
        "MongoDB",
        "Node.js",
      ],

      description: [
        "Real-time diet adjustments based on body vitals like heart rate and oxygen levels.",

        "Allergy friendly diet suggestion",

        "Mood boosting meal plan",

      ],

      metrics: [
        "based on real-time body vitals ",
        "Real-time tracking",
      ],

      github:
        "https://github.com/Rohit172006/nutrisync",

    //   live:
    //     "https://reimbursement-management-27.vercel.app/",

      images: [
        "/Projects/NutriSync/nutrisync (1).png",
        "/Projects/NutriSync/nutrisync (2).png",
        "/Projects/NutriSync/nutrisync (3).png",
        "/Projects/NutriSync/nutrisync (4).png",
        "/Projects/NutriSync/nutrisync (5).png",
        "/Projects/NutriSync/nutrisync (6).png",
      ],

      video:
        "https://www.youtube.com/watch?v=uz2UkAgSEtQ",

      featured: false,
    },

    {
      title: "AgriArya – Smart Farming Platform",

      tech: [
        "MERN",
        "Machine Learning",
        "AI Chatbot",
      ],

      description: [
        "Built crop recommendation and disease prediction system",

        "Integrated AI chatbot for farmer assistance",

        "Real-time market insights dashboard",
      ],

      metrics: [
        "AI-based insights",
        "Real-time data",
        "Smart farming",
      ],

      github:
        "https://github.com/AjayGhadage/AgriArya",

      live:
        "https://agritech-tan.vercel.app/auth",

      images: [
        "/Projects/AgriArya/agriarya-1.png",
        "/Projects/AgriArya/agriarya-2.png",
        "/Projects/AgriArya/agriarya-3.png",
        "/Projects/AgriArya/agriarya-4.png",
      ],

      video:
        "https://www.youtube.com/watch?v=J2Y1juKwXpw",
    },

    {
      title: "Hostel Recommendation System",

      tech: [
        "Machine Learning",
        "Python",
        "MERN",
      ],

      description: [
        "Developed ML-based hostel recommendation engine using user preferences.",

        "Implemented filtering based on budget, ratings, mess, and AC availability.",

        "Built responsive full-stack hostel management and booking platform.",
      ],

      metrics: [
        "Personalized results",
        "ML-based filtering",
        "Efficient search",
      ],

      github:
        "https://github.com/avigunjal07/Hostel-Recommendation-and-Management",

      images: [
        "/Projects/HostelHub/hostel (1).png",
        "/Projects/HostelHub/hostel (2).png",
        "/Projects/HostelHub/hostel (3).png",
        "/Projects/HostelHub/hostel (4).png",
        "/Projects/HostelHub/hostel (5).png",
        "/Projects/HostelHub/hostel (6).png",
      ],

      video:
        "https://www.youtube.com/watch?v=tEX1JDsY8kE",
    },
  ];

  return (

    <section
      id="projects"
      className="projects-section"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="projects-bg">

        <div className="glow glow-one"></div>

        <div className="glow glow-two"></div>

        <div className="center-glow"></div>

      </div>

      <div className="projects-container">

        {/* ================= HEADING ================= */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="projects-heading"
        >
          My <span>Projects</span>
        </motion.h2>

        {/* ================= GRID ================= */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`project-card ${
                project.featured
                  ? "featured-card"
                  : ""
              }`}
            >

              {/* FEATURED */}

              {project.featured && (
                <div className="featured-badge">
                  Featured
                </div>
              )}

              {/* ================= SLIDER ================= */}

              <div className="project-media">

                <Swiper
                  modules={[
                    Pagination,
                    Autoplay,
                  ]}

                  pagination={{
                    clickable: true,
                  }}

                  autoplay={{
                    delay: 4000,
                  }}

                  className="project-swiper"
                >

                  {/* VIDEO */}

                  {project.video && (
                    <SwiperSlide>

                      <iframe
                        src={project.video.replace(
                          "watch?v=",
                          "embed/"
                        )}
                        title={project.title}
                        allowFullScreen
                      ></iframe>

                    </SwiperSlide>
                  )}

                  {/* IMAGES */}

                  {project.images.map((img, i) => (

                    <SwiperSlide key={i}>

                      <img
                        src={img}
                        alt={project.title}
                      />

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

              {/* ================= CONTENT ================= */}

              <div className="project-content">

                <h3>{project.title}</h3>

                {/* TECH */}

                <div className="tech-stack">

                  {project.tech.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}

                </div>

                {/* METRICS */}

                <div className="metrics">

                  {project.metrics.map((metric, i) => (
                    <span key={i}>
                      ✓ {metric}
                    </span>
                  ))}

                </div>

                {/* DESCRIPTION */}

                <ul className="project-description">

                  {project.description.map((item, i) => (
                    <li key={i}>
                      <span>•</span>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

              {/* ================= BUTTONS ================= */}

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;