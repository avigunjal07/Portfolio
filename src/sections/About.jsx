import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import "./About.css";

function About() {

  return (

    <section
      id="about"
      className="about-section"
    >

      {/* Glow */}
      <div className="about-bg-glow"></div>

      {/* MAIN ABOUT CONTAINER */}
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="about-left"
        >

          <h2 className="about-title">
            About me
          </h2>

          <p className="about-description">

            Hi, I'm
            <span> Avishkar Gunjal</span>,
            a Full-Stack
            <span> MERN Developer </span>
            based in Pune.

            I specialize in developing scalable,
            efficient, and modern web applications
            using the MERN stack with clean
            architecture and optimized backend systems.

          </p>

          <p className="about-description">

            I enjoy solving real-world problems,
            creating responsive user experiences,
            and building applications that focus on
            performance, maintainability, and scalability.

            Driven by curiosity and a passion for problem-solving, I enjoy turning ideas into real, impactful digital solutions.

          </p>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{ once: true }}
          className="about-right"
        >

          <div className="about-image-card">

            <img
              src="/about.png"
              alt="developer"
              className="about-main-image"
            />

          </div>

        </motion.div>

      </div>

      {/* PROJECT IMAGE SLIDER */}

<div className="slider-section">

  <Swiper
    slidesPerView={"auto"}
    centeredSlides={true}
    watchSlidesProgress={true}
    grabCursor={true}
    loop={true}
    speed={1200}
    spaceBetween={-220}

    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
    }}

    breakpoints={{

      0: {
        spaceBetween: -40,
      },

      700: {
        spaceBetween: -220,
      },
    }}

    modules={[Autoplay]}
    className="mySwiper"
  >

    {[
      "/navdhara (5).jpeg",
      "/navdhara (2).jpeg",
      "/navdhara (1).jpeg",
      "/navdhara (3).jpeg",
      "/navdhara (4).jpeg",
      "/hackathon (1).jpeg",
      "/hackathon (2).jpeg",
      "/hackathon (3).jpeg",
    ].map((img, index) => (

      <SwiperSlide key={index}>

        <div className="project-slide">

          <img
            src={img}
            alt="project"
            className="slide-image"
          />

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

</div>

    </section>
  );
}

export default About;