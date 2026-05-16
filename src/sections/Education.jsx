import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaTrophy,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import "./Education.css";

function Education() {
  const [activeCert, setActiveCert] = useState(null);

  /* ================= LEETCODE API ================= */
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-stats-api.vercel.app/avigunjal07")
      .then((res) => res.json())
      .then((data) => {
        setLeetcodeData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const certificates = [
        {
          id: "mern",
          title: "MERN Stack Development",
          image: "/mern.png",
        },

        {
          id: "talent",
          title: "Talent Battle Java + DSA",
          image: "/talent.png",
        },

        {
          id: "hackarena",
          title: "HackArena 2026",
          image: "/hackarena.jpeg",
        },

        {
          id: "vyoma",
          title: "VYOMA Prototype Competition",
          image: "/vyoma.png",
        },

        {
          id: "synapse",
          title: "Synapse Hackathon",
          image: "/synapse.png",
        },

        {
          id: "pandora",
          title: "Pandora Hackathon",
          image: "/pandora.png",
        },
        ];

  return (
    <section id="education" className="education-section">

      {/* ================= BACKGROUND ================= */}
      <div className="education-bg"></div>

      <div className="education-container">

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="education-heading"
        >
          Education &{" "}
          <span>Achievements</span>
        </motion.h2>

        {/* ====================================================== */}
        {/* ================= EDUCATION SECTION ================== */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="education-wrapper"
        >
          <div className="section-title">
            <FaGraduationCap />
            <h3>Education</h3>
          </div>

          {/* ===== CARD 1 ===== */}
          <div className="education-card">
            <div className="education-top">
              <h4>B.E Computer Engineering</h4>
              <span>2023 - Present</span>
            </div>

            <p>Savitribai Phule Pune University</p>

            <div className="badge-group">
              <span className="badge cyan-badge">
                9.44 CGPA
              </span>

              <span className="badge purple-badge">
                Academic Top 5th Sem
              </span>
            </div>
          </div>

          {/* ===== CARD 2 ===== */}
          <div className="education-card">
            <div className="education-top">
              <h4>Higher Secondary (12th)</h4>
              <span>2023</span>
            </div>

            <p>BJS Junior College, Wagholi, Pune</p>

            <div className="badge-group">
              <span className="badge green-badge">
                64.83%
              </span>
            </div>
          </div>

          {/* ===== CARD 3 ===== */}
          <div className="education-card">
            <div className="education-top">
              <h4>Secondary (10th)</h4>
              <span>2021</span>
            </div>

            <p>BJS Highshcool Wagholi, Pune</p>

            <div className="badge-group">
              <span className="badge yellow-badge">
                86.00%
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* ================= ACHIEVEMENTS ======================= */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="achievements-card"
        >
          <div className="section-title">
            <FaTrophy />
            <h3>Achievements</h3>
          </div>

          <ul className="achievement-list">

            {/* <li>🎓 Qualified GATE 2026 with strong CS fundamentals</li> */}

            <li>🏆 Academic 2nd Topper - TE </li>

            <li>🚀 4th Rank in the HackArena 2026, Hackathon conducted by VIIT college Pune</li>

            <li>💡 5+ Hackathon participation</li>

            <li>📊 Solved 25+ DSA Problems on LeetCode</li>

            {/* <li>⚡ Built multiple MERN + ML Projects</li> */}

          </ul>
        </motion.div>
        {/* ====================================================== */}
        {/* ================= CERTIFICATES ======================= */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="certificate-section"
        >
          <div className="section-title">
            <FaCertificate />
            <h3>Certificates</h3>
          </div>

          <div className="certificate-grid">

            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="certificate-card"
                onClick={() => setActiveCert(cert)}
              >
                <img src={cert.image} alt={cert.title} />

                <div className="certificate-overlay">
                  <span>View Certificate</span>
                </div>

                <h4>{cert.title}</h4>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* ====================================================== */}
        {/* ================= LEETCODE =========================== */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="leetcode-section"
        >
          <div className="section-title">
            <FaCode />
            <h3>LeetCode Profile</h3>
          </div>

          {loading && (
            <p className="loading-text">
              Fetching LeetCode Data...
            </p>
          )}

          {leetcodeData && (
            <div className="leetcode-grid">

              {/* LEFT */}
              <div className="chart-container">

                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={[
                        {
                          name: "Easy",
                          value: leetcodeData.easySolved,
                        },
                        {
                          name: "Medium",
                          value: leetcodeData.mediumSolved,
                        },
                        {
                          name: "Hard",
                          value: leetcodeData.hardSolved,
                        },
                      ]}
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      <Cell fill="#22c55e" />
                      <Cell fill="#eab308" />
                      <Cell fill="#a855f7" />
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>

                <div className="total-solved">
                  <h2>{leetcodeData.totalSolved}</h2>
                  <span>Total Solved</span>
                </div>

              </div>

              {/* RIGHT */}
              <div className="leetcode-stats">

                <div className="stat-box">
                  <p>Global Rank</p>
                  <h2>
                    #{leetcodeData.ranking.toLocaleString()}
                  </h2>
                </div>

                <div className="stat-box">
                  <p>Acceptance Rate</p>
                  <h2>
                    {leetcodeData.acceptanceRate || 0}%
                  </h2>
                </div>

                {/* PROGRESS */}
                {[
                  {
                    label: "Easy",
                    solved: leetcodeData.easySolved,
                    total: leetcodeData.totalEasy,
                    color: "green-progress",
                  },
                  {
                    label: "Medium",
                    solved: leetcodeData.mediumSolved,
                    total: leetcodeData.totalMedium,
                    color: "yellow-progress",
                  },
                  {
                    label: "Hard",
                    solved: leetcodeData.hardSolved,
                    total: leetcodeData.totalHard,
                    color: "purple-progress",
                  },
                ].map((item, index) => (
                  <div className="progress-item" key={index}>

                    <div className="progress-top">
                      <span>{item.label}</span>

                      <span>
                        {item.solved}/{item.total}
                      </span>
                    </div>

                    <div className="progress-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${
                            (item.solved / item.total) * 100
                          }%`,
                        }}
                        transition={{ duration: 1.2 }}
                        className={`progress-fill ${item.color}`}
                      />
                    </div>

                  </div>
                ))}

                <a
                  href="https://leetcode.com/avigunjal07"
                  target="_blank"
                  rel="noreferrer"
                  className="leetcode-btn"
                >
                  Visit LeetCode Profile
                </a>

              </div>

            </div>
          )}
        </motion.div>

      </div>

      {/* ====================================================== */}
      {/* ================= MODAL ============================== */}
      {/* ====================================================== */}

      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeCert.image}
                alt={activeCert.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Education;