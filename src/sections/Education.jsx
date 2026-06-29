import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const badgeRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="education" ref={sectionRef} className="section-padding education-section">
      <div className="education-inner">
        {/* Header */}
        <div ref={badgeRef} className="education-header">
          <div className="edu-badge">Education</div>
          <h2 className="edu-title">Academic Background</h2>
          <p className="edu-subtitle">
            The foundation that fuels my passion for building great software.
          </p>
        </div>

        {/* Card */}
        <div ref={cardRef} className="edu-card card">
          {/* Glow overlay */}
          <div className="glow" />

          <div className="edu-card-inner">
            {/* Left - Icon & Year */}
            <div className="edu-left">
              <div className="edu-icon-wrap">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="edu-icon"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                </svg>
              </div>
              <div className="edu-year-badge">2023 – 2027</div>
            </div>

            {/* Right - Content */}
            <div className="edu-content">
              <div className="edu-degree-row">
                <h3 className="edu-degree">
                  B.Tech – Computer Science &amp; Engineering
                </h3>
                <span className="edu-status-pill">Pursuing</span>
              </div>

              <div className="edu-university">
                <span className="edu-uni-dot" />
                DIT UNIVERSITY, DEHRADUN
              </div>

              <p className="edu-desc">
                Currently pursuing a degree in Computer Science while building
                full-stack web applications, solving DSA problems, and exploring
                modern software development technologies.
              </p>

              {/* Tags */}
              <div className="edu-tags">
                {[
                  "Full Stack Dev",
                  "Data Structures",
                  "Spring Boot",
                  "MERN Stack",
                  "DevOps",
                ].map((tag) => (
                  <span key={tag} className="edu-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
