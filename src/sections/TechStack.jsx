import { useRef } from "react";
import { techStackImgs } from "../constants";

/* ── per-tech brand colours for glow/accent ── */
const brandColors = {
  React:        "#61dafb",
  "Node.js":    "#68a063",
  "Express.js": "#ffffff",
  MongoDB:      "#47a248",
  Java:         "#f89820",
  "Spring Boot":"#6db33f",
  MySQL:        "#4479a1",
  Docker:       "#2496ed",
  Git:          "#f05032",
  "Three.js":   "#ffffff",
};

/* ── category groups ── */
const categories = [
  {
    label: "Frontend",
    techs: ["React", "Three.js"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    label: "Databases",
    techs: ["MongoDB", "MySQL"],
  },
  {
    label: "DevOps & Tools",
    techs: ["Docker", "Git"],
  },
];

/* ── single animated card ── */
const TechCard = ({ name, imgPath }) => {
  const cardRef = useRef(null);
  const color = brandColors[name] || "#6366f1";

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
    card.style.boxShadow = `0 20px 60px ${color}30, 0 0 30px ${color}20`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    card.style.boxShadow = `0 4px 20px rgba(0,0,0,0.4)`;
  };

  return (
    <div
      ref={cardRef}
      className="tech-logo-card"
      style={{ "--brand": color }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* glow blob */}
      <div className="tech-logo-glow" />

      {/* logo */}
      <div className="tech-logo-img-wrap">
        <img
          src={imgPath}
          alt={name}
          className="tech-logo-img"
          draggable={false}
        />
      </div>

      {/* name */}
      <p className="tech-logo-name">{name}</p>

      {/* bottom accent bar */}
      <div className="tech-logo-bar" />
    </div>
  );
};

/* ── main section ── */
const TechStack = () => {
  /* build a lookup map from techStackImgs */
  const techMap = Object.fromEntries(
    techStackImgs.map((t) => [t.name, t.imgPath])
  );

  return (
    <section className="tech-section" id="skills">
      {/* ── background decorations ── */}
      <div className="tech-bg-orb tech-bg-orb--1" />
      <div className="tech-bg-orb tech-bg-orb--2" />

      <div className="tech-inner">
        {/* ── header ── */}
        <div className="tech-header">
          <span className="tech-badge">Tech Stack</span>
          <h2 className="tech-title">
            Tools I Build&nbsp;
            <span className="tech-title-accent">With</span>
          </h2>
          <p className="tech-subtitle">
            A curated set of technologies I use to craft fast, scalable, and
            maintainable web applications.
          </p>
        </div>

        {/* ── categories ── */}
        <div className="tech-categories">
          {categories.map((cat) => (
            <div key={cat.label} className="tech-category">
              <div className="tech-category-label">
                <span className="tech-category-line" />
                <span className="tech-category-name">{cat.label}</span>
                <span className="tech-category-line" />
              </div>

              <div className="tech-logo-grid">
                {cat.techs.map((techName) =>
                  techMap[techName] ? (
                    <TechCard
                      key={techName}
                      name={techName}
                      imgPath={techMap[techName]}
                    />
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
