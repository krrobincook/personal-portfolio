import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: "2023",
    title: "Started B.Tech in Computer Science",
    icon: "🎓",
    color: "#6366f1",
    items: [],
  },
  {
    year: "2024",
    title: "Core Foundations",
    icon: "⚙️",
    color: "#06b6d4",
    items: ["Learned Java", "Data Structures & Algorithms", "SQL & Databases"],
  },
  {
    year: "2025",
    title: "Backend Development",
    icon: "🚀",
    color: "#10b981",
    items: ["Built Spring Boot Projects", "REST APIs & JPA", "MySQL Integration"],
  },
  {
    year: "2026",
    title: "Full Stack & DevOps",
    icon: "🌐",
    color: "#f59e0b",
    items: [
      "Building MERN Applications",
      "DevOps Internship",
      "Working on Employee Management System",
    ],
  },
];

const Journey = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          delay: 0.15 * i,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="journey" ref={sectionRef} className="journey-section section-padding">
      <div className="journey-inner">
        {/* Header */}
        <div ref={headerRef} className="journey-header">
          <div className="edu-badge">My Journey</div>
          <h2 className="edu-title">From Student to Developer</h2>
          <p className="edu-subtitle">
            A timeline of milestones, learnings, and growth along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="journey-timeline">
          {/* Vertical line */}
          <div className="journey-line-wrap">
            <div ref={lineRef} className="journey-line" />
          </div>

          {journeyData.map(({ year, title, icon, color, items }, index) => (
            <div
              key={year}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`journey-item ${index % 2 === 0 ? "journey-item--left" : "journey-item--right"}`}
            >
              {/* Connector dot */}
              <div className="journey-dot" style={{ borderColor: color }}>
                <span className="journey-dot-inner" style={{ backgroundColor: color }} />
              </div>

              {/* Card */}
              <div className="journey-card card" style={{ "--accent": color }}>
                <div className="glow" />
                <div className="journey-card-top">
                  <span className="journey-icon">{icon}</span>
                  <span className="journey-year" style={{ color }}>
                    {year}
                  </span>
                </div>
                <h3 className="journey-card-title">{title}</h3>
                {items.length > 0 && (
                  <ul className="journey-card-list">
                    {items.map((item) => (
                      <li key={item} className="journey-card-item">
                        <span className="journey-bullet" style={{ backgroundColor: color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
