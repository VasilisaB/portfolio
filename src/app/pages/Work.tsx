import { Link } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AtmosphericImage } from "../components/AtmosphericImage";
import wilbotOverview1 from "../../assets/images/wilbot-overview1.png";
import walkableOverviewWide5 from "../../assets/images/walkable-overview-wide5.png";
import eclypt1 from "../../assets/images/eclypt-overview-wide2png.png";


const TITLE_FONT = `"normalidad-extended-medium", sans-serif`;
const ACCENT_FONT = `"normalidad-compact-medium", sans-serif`;
const BODY_FONT = `"Inter", sans-serif`;

const projects = [
  {
    num: "01",
    slug: "wil-bot",
    title: "Wil-Bot",
    description:
      "A conversational AI interface that helps people understand process mining through interactive exploration.",
    partner: "Celonis",
    type: "AI Interaction Design / Concept Prototype",
    role: "Concept, interaction, visual system, prototype",
    img: wilbotOverview1,
    mood: "smoky, technological, atmospheric, softly futuristic",
  },
  {
    num: "02",
    slug: "walkable-memory",
    title: "Walkable Memory",
    description:
      "A location-based mobile concept that helps people encounter Moosburg's hidden Stalag VII-A history through short stories connected to real places.",
    partner: null,
    type: "Service Design / Mobile Concept",
    role: "User research, concept development, UX/UI design, prototyping, testing",
    img: walkableOverviewWide5,
    mood: "spatial, respectful, memory-like, soft, cinematic",
  },
  {
    num: "03",
    slug: "eclypt",
    title: "Eclypt",
    description:
      "A visual identity exploring the intersection of brutalist sculpture, organic forms, and futuristic jewelry aesthetics.",
    partner: null,
    type: "Experimental Branding / Visual Identity",
    role: "Art direction, brand concept, visual system design",
    img: eclypt1,
    mood: "sculptural, editorial, experimental, dark-luxury",
  },
  {
    num: "04",
    slug: "project-4",
    title: "Coming soon",
    description:
      "A new project is on the way. Stay tuned for the next case study and fresh work updates.",
    partner: null,
    type: "Coming soon",
    role: "Coming soon",
    img: "https://images.unsplash.com/photo-1693760631069-89e1f6fee6b2?w=1200&q=80&fit=crop",
    mood: "coming soon",
  },
];

function ProjectBlock({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="vb-project-block"
      style={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        borderTop: "1px solid rgba(28, 28, 26, 0.08)",
      }}
    >
      <div
        className="vb-project-grid"
        style={{
          display: "grid",
          gridTemplateColumns: isEven ? "2fr 3fr" : "3fr 2fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* Text block */}
        <div className="vb-project-text" style={{ order: isEven ? 1 : 2 }}>
          {/* Number */}
          <p
            style={{
              fontFamily: ACCENT_FONT,
              fontSize: "0.72rem",
              fontWeight: 200,
              fontStyle: "normal",
              fontSynthesis: "none",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#1C1C1A",
              marginBottom: "1.2rem",
            }}
          >
            {project.num}
          </p>

          {/* Title */}
          <h2
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(2rem, 3.1vw, 3.5rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#1C1C1A",
              marginBottom: "1.6rem",
            }}
          >
            {project.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: BODY_FONT,
              fontSize: "0.95rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#5A5A56",
              maxWidth: "38ch",
              marginBottom: "2.5rem",
            }}
          >
            {project.description}
          </p>

          {/* Metadata */}
          <div
            className="vb-meta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: project.partner ? "1fr 1fr" : "1fr",
              gap: "1.2rem 2rem",
              marginBottom: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(28, 28, 26, 0.08)",
            }}
          >
            {project.partner && (
              <div>
                <p
                  style={{
                    fontFamily: ACCENT_FONT,
                    fontSize: "0.62rem",
                    fontWeight: 200,
                    fontStyle: "normal",
                    fontSynthesis: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#1C1C1A",
                    marginBottom: "0.35rem",
                  }}
                >
                  Partner
                </p>
                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: "#3A3A36",
                    lineHeight: 1.5,
                  }}
                >
                  {project.partner}
                </p>
              </div>
            )}

            <div>
              <p
                style={{
                  fontFamily: ACCENT_FONT,
                  fontSize: "0.62rem",
                  fontWeight: 200,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#1C1C1A",
                  marginBottom: "0.35rem",
                }}
              >
                Project
              </p>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  color: "#3A3A36",
                  lineHeight: 1.5,
                }}
              >
                {project.type}
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: ACCENT_FONT,
                  fontSize: "0.62rem",
                  fontWeight: 200,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#1C1C1A",
                  marginBottom: "0.35rem",
                }}
              >
                Role
              </p>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "0.82rem",
                  fontWeight: 400,
                  color: "#3A3A36",
                  lineHeight: 1.5,
                }}
              >
                {project.role}
              </p>
            </div>
          </div>

          {/* Discover CTA */}
          <Link
            to={`/work/${project.slug}`}
            style={{
              fontFamily: ACCENT_FONT,
              fontSize: "0.8rem",
              fontWeight: 200,
              fontStyle: "normal",
              fontSynthesis: "none",
              color: "#1C1C1A",
              textDecoration: "none",
              letterSpacing: "0.03em",
              display: "inline-flex",
              alignItems: "center",
              gap: hovered ? "1rem" : "0.6rem",
              borderBottom: "1px solid rgba(28, 28, 26, 0.22)",
              paddingBottom: "0.25rem",
              transition: "gap 0.35s ease, border-color 0.35s ease",
            }}
          >
            Discover
            <span
              style={{
                display: "inline-block",
                fontFamily: BODY_FONT,
                transition: "transform 0.35s ease",
                transform: hovered ? "translateX(4px)" : "translateX(0)",
              }}
            >
              →
            </span>
          </Link>
        </div>

        {/* Image block */}
        <div
          className="vb-project-image"
          style={{
            order: isEven ? 2 : 1,
          }}
        >
          <AtmosphericImage
            src={project.img}
            alt={project.title}
            aspectRatio="16/10"
            feather={false}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  useEffect(() => {
    const adobeFontHref = "https://use.typekit.net/brk5oxs.css";
    const existingLink = document.querySelector(`link[href="${adobeFontHref}"]`);

    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = adobeFontHref;
      document.head.appendChild(link);
    }

    async function loadFonts() {
      if ("fonts" in document) {
        try {
          await Promise.all([
            document.fonts.load(`700 120px "normalidad-extended-medium"`),
            document.fonts.load(`200 24px "normalidad-compact-medium"`),
          ]);
          await document.fonts.ready;
        } catch {
          await document.fonts.ready;
        }
      }
    }

    loadFonts();
  }, []);

  return (
    <main
      style={{
        paddingTop: "10rem",
        paddingBottom: "8rem",
        background: "#ECEAE6",
      }}
    >
      <div
        className="vb-section"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 3.5rem",
        }}
      >
        {/* Oversized heading */}
        <div style={{ position: "relative", marginBottom: "0" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: ACCENT_FONT,
              fontSize: "0.78rem",
              fontWeight: 200,
              fontStyle: "normal",
              fontSynthesis: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#1C1C1A",
              marginBottom: "1.5rem",
            }}
          >
            Portfolio — 2022–2024
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(3.6rem, 8.2vw, 10rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 0.88,
              letterSpacing: "-0.055em",
              color: "#1C1C1A",
              marginBottom: "0",
            }}
          >
            Selected
            <br />
            Work
          </motion.h1>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, i) => (
            <ProjectBlock key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}