import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const projectData: Record<
  string,
  {
    title: string;
    summary: string;
    partner: string;
    type: string;
    role: string;
    timeline: string;
    tools: string;
    heroImg: string;
    processImg: string;
    uiImg: string;
  }
> = {
  "wil-bot": {
    title: "Wil-Bot",
    summary:
      "A conversational AI interface that helps people understand process mining through interactive exploration.",
    partner: "Celonis",
    type: "AI Interaction Design / Concept Prototype",
    role: "Concept, interaction design, visual system, prototype",
    timeline: "2023 — 10 weeks",
    tools: "Figma, Protopie, After Effects",
    heroImg:
      "https://images.unsplash.com/photo-1770169272345-9636d5ef2681?w=1600&q=80&fit=crop",
    processImg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=75&fit=crop",
    uiImg:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75&fit=crop",
  },
  "walkable-memory": {
    title: "Walkable Memory",
    summary:
      "A location-based mobile concept that helps people encounter hidden history through short stories connected to real places.",
    partner: "Academic Project",
    type: "Service Design / Mobile Concept",
    role: "User research, concept development, UX/UI design, prototyping, testing",
    timeline: "2022 — 14 weeks",
    tools: "Figma, Miro, Notion, field research",
    heroImg:
      "https://images.unsplash.com/photo-1639562471471-4de7bfc813ae?w=1600&q=80&fit=crop",
    processImg:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=75&fit=crop",
    uiImg:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=75&fit=crop",
  },
  eclypt: {
    title: "Eclypt",
    summary:
      "A visual identity exploring the intersection of brutalist sculpture, organic forms, and futuristic jewelry aesthetics.",
    partner: "Self-initiated",
    type: "Experimental Branding / Visual Identity",
    role: "Art direction, brand concept, visual system design",
    timeline: "2023 — 6 weeks",
    tools: "Figma, Photoshop, Illustrator",
    heroImg:
      "https://images.unsplash.com/photo-1658051794980-c3fd2f67e255?w=1600&q=80&fit=crop",
    processImg:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=75&fit=crop",
    uiImg:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=75&fit=crop",
  },
  "project-4": {
    title: "Project Placeholder",
    summary: "A future case study. Layout and structure are visually consistent.",
    partner: "TBD",
    type: "Project Type",
    role: "Role Placeholder",
    timeline: "2024",
    tools: "TBD",
    heroImg:
      "https://images.unsplash.com/photo-1693760631069-89e1f6fee6b2?w=1600&q=80&fit=crop",
    processImg:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=75&fit=crop",
    uiImg:
      "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&q=75&fit=crop",
  },
};

function AtmosphericImageBlock({
  src,
  alt,
  aspectRatio = "16/8",
  label,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  label?: string;
}) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", overflow: "hidden", aspectRatio }}>
        <ImageWithFallback
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(0.68) contrast(0.93)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(236, 234, 230, 0.1)",
            boxShadow: "inset 0 0 80px rgba(236, 234, 230, 0.28)",
            pointerEvents: "none",
          }}
        />
      </div>
      {label && (
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            fontWeight: 400,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9A9690",
            marginTop: "0.75rem",
          }}
        >
          {label}
        </p>
      )}
    </div>
  );
}

function CaseSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(28, 28, 26, 0.08)",
      }}
    >
      <div
        className="vb-case-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Label column */}
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.62rem",
              fontWeight: 400,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#9A9690",
              marginBottom: "0.6rem",
            }}
          >
            {label}
          </p>
          <h3
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1C1C1A",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>
        </div>

        {/* Content column */}
        <div>{children}</div>
      </div>
    </motion.section>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectData[id ?? ""] ?? projectData["wil-bot"];

  return (
    <main style={{ background: "#ECEAE6" }}>
      {/* ─── HERO ─── */}
      <SmokySection
        intensity="strong"
        style={{ paddingTop: "10rem", background: "#ECEAE6" }}
      >
        <div
          className="vb-section vb-container"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "0 3.5rem 5rem",
          }}
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3.5rem" }}
          >
            <Link
              to="/work"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 400,
                color: "#7A7872",
                textDecoration: "none",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              ← All Projects
            </Link>
          </motion.div>

          {/* Project title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(3.5rem, 7vw, 8.5rem)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#1C1C1A",
              marginBottom: "2rem",
            }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: 1.65,
              color: "#5A5A56",
              maxWidth: "52ch",
              marginBottom: "4rem",
            }}
          >
            {project.summary}
          </motion.p>

          {/* Metadata row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="vb-meta-5col"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "2rem",
              paddingTop: "2rem",
              paddingBottom: "4rem",
              borderTop: "1px solid rgba(28, 28, 26, 0.08)",
            }}
          >
            {[
              { label: "Partner / Client", value: project.partner },
              { label: "Project Type", value: project.type },
              { label: "Role", value: project.role },
              { label: "Timeline", value: project.timeline },
              { label: "Tools", value: project.tools },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 400,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#9A9690",
                    marginBottom: "0.5rem",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#3A3A36",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </SmokySection>

      {/* ─── HERO IMAGE ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="vb-section vb-container"
        style={{ padding: "0 3.5rem 8rem", maxWidth: "1300px", margin: "0 auto" }}
      >
        <AtmosphericImageBlock
          src={project.heroImg}
          alt={`${project.title} — Hero`}
          aspectRatio="16/7"
          label="Project overview"
        />
      </motion.div>

      {/* ─── CASE STUDY SECTIONS ─── */}
      <div className="vb-section vb-container" style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 3.5rem 8rem" }}>
        <CaseSection label="01 / Overview" title="What is it?">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginBottom: "2rem",
            }}
          >
            {project.summary} The project set out to investigate how complex
            technological concepts can be made accessible and engaging through
            careful interaction and visual design — without sacrificing depth or
            accuracy.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
            }}
          >
            This work was developed as part of an academic and professional
            collaboration, combining user research methods with speculative
            interaction design.
          </p>
        </CaseSection>

        <CaseSection label="02 / Challenge" title="The core problem">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginBottom: "2rem",
            }}
          >
            The central challenge was bridging the gap between technical
            complexity and human intuition. Users often feel alienated by data
            systems that speak in their own language — the design task was to
            create a new kind of mediator.
          </p>

          {/* Pull quote */}
          <div
            style={{
              padding: "2rem 2.5rem",
              background: "rgba(200, 196, 190, 0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(200, 196, 190, 0.35)",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                lineHeight: 1.5,
                color: "#2A2A28",
                fontStyle: "italic",
              }}
            >
              "How do you make something invisible — like process data — feel
              tangible and worth exploring?"
            </p>
          </div>
        </CaseSection>

        <CaseSection label="03 / Approach" title="Design strategy">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginBottom: "3rem",
            }}
          >
            The approach combined conversational UI patterns with visual
            storytelling. Instead of presenting raw data, the system translates
            it into narrative fragments — guiding users through discovery rather
            than confronting them with complexity.
          </p>

          {/* Approach chips grid */}
          <div
            className="vb-chips-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {[
              "Conversational interface patterns",
              "Progressive disclosure of complexity",
              "Human-centered AI mediation",
              "Narrative-driven data storytelling",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "1.2rem 1.5rem",
                  background: "rgba(236, 234, 230, 0.6)",
                  border: "1px solid rgba(28, 28, 26, 0.08)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: "#3A3A36",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection label="04 / Process" title="How it was built">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginBottom: "3rem",
            }}
          >
            The process moved through phases of research, ideation, prototyping,
            and refinement. User testing sessions were conducted iteratively,
            with each round informing the next layer of interaction design.
          </p>
          <AtmosphericImageBlock
            src={project.processImg}
            alt="Process documentation"
            aspectRatio="16/7"
            label="Process research and documentation"
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginTop: "3rem",
            }}
          >
            Wireframing and rapid prototyping were used extensively to validate
            assumptions early. The final prototype in Figma and Protopie was
            tested with 12 participants across different levels of technical
            familiarity.
          </p>
        </CaseSection>

        <CaseSection label="05 / Outcome" title="What was achieved">
          <AtmosphericImageBlock
            src={project.uiImg}
            alt="Final UI screens"
            aspectRatio="16/8"
            label="Final UI screens and interaction system"
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginTop: "3rem",
            }}
          >
            The final system demonstrated that complex data processes could be
            made approachable through carefully structured conversational flows
            and a calm, atmospheric visual language. Users reported feeling
            guided rather than overwhelmed.
          </p>
        </CaseSection>

        <CaseSection label="06 / Reflection" title="What I learned">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
              marginBottom: "2rem",
            }}
          >
            This project deepened my understanding of the relationship between
            information architecture and emotional design. The most important
            insight was that restraint — in both visual and interaction design —
            creates more trust than abundance.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.97rem",
              fontWeight: 300,
              lineHeight: 1.82,
              color: "#4A4A46",
            }}
          >
            I also developed a stronger intuition for when to show, when to
            hide, and how to sequence information in ways that feel natural
            rather than instructed.
          </p>
        </CaseSection>

        {/* Next project */}
        <div
          style={{
            paddingTop: "5rem",
            borderTop: "1px solid rgba(28, 28, 26, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/work"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.78rem",
              fontWeight: 400,
              color: "#7A7872",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            ← All Projects
          </Link>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.65rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9A9690",
            }}
          >
            Vasilisa Boronnikova
          </p>
        </div>
      </div>
    </main>
  );
}