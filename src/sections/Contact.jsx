import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {

  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqfhbsm",
        "template_w6hjtlq",
        form.current,
        "EsU2v0cQNyQciy2WL"
      )
      .then(
        () => {

          setStatus(
            "Message sent successfully!"
          );

          form.current.reset();
        },

        () => {

          setStatus(
            "Failed to send message."
          );
        }
      );
  };

  return (

    <section
      id="contact"
      className="contact-section"
    >

      {/* ================= BACKGROUND ================= */}

      <div className="contact-bg">

        <div className="contact-glow-one"></div>

        <div className="contact-glow-two"></div>

      </div>

      <div className="contact-container">

        {/* ================= HEADING ================= */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-heading"
        >
          Contact <span>Me</span>
        </motion.h2>

        {/* <p className="contact-subheading">
          LET'S BUILD SOMETHING AMAZING TOGETHER
        </p> */}

        {/* ================= CONTENT ================= */}

        <div className="contact-grid">

          {/* ================================================= */}
          {/* LEFT */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="contact-left"
          >

            <h3>
              Let's Connect 
            </h3>

            <p>
              Open for internships,
              collaborations,
              freelance projects,
              and exciting tech opportunities.
            </p>

            {/* ================= LINKS ================= */}

            <div className="contact-links">

              <a
                href="mailto:avishkargunjal07@gmail.com"
                className="contact-link"
              >
                <FaEnvelope />
                <span>
                  avishkargunjal07@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/avigunjal07"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FaGithub />
                <span>
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/avishkar-gunjal/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <FaLinkedin />
                <span>
                  LinkedIn
                </span>
              </a>

              <a
                href="tel:+917058666889"
                className="contact-link"
                >
                <FaPhoneAlt />
                
                <span>
                    +91 7058666889
                </span>
                </a>

            </div>

          </motion.div>

          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}

            className="contact-form"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">

              <FaPaperPlane />

              Send Message

            </button>

            {status && (
              <p className="status-text">
                {status}
              </p>
            )}

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;