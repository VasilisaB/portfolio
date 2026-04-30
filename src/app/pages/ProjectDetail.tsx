import type { ReactNode } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import wilbotOverview1 from "../../assets/images/wilbot-overview1.png";
import wilbotOverview2 from "../../assets/images/wilbot-overview2.png";
import wilbotOverviewWide1 from "../../assets/images/wilbot-overview-wide1.png";
import wilbotOverviewWide2 from "../../assets/images/wilbot-overview-wide2.png";

type CaseStudyContent = {
  overviewTitle: string;
  overviewParagraphs: string[];

  challengeTitle: string;
  challengeParagraphs: string[];
  challengeQuote: string;

  strategyTitle: string;
  strategyParagraphs: string[];
  strategyChips: string[];

  systemTitle: string;
  systemParagraphBeforeImage: string;
  systemParagraphAfterImage: string;
  systemFlow: string;

  interactionTitle: string;
  interactionParagraphs: string[];
  interactionChips: string[];

  outcomeTitle: string;
  outcomeParagraphs: string[];

  reflectionTitle: string;
  reflectionParagraphs: string[];
};

type Project = {
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
  caseStudy?: CaseStudyContent;
};

const wilbotCaseStudy: CaseStudyContent = {
  overviewTitle: "An interface for exploring expert knowledge",
  overviewParagraphs: [
    "Wil-Bot is an AI knowledge interface designed to make process mining easier to understand for people encountering the topic for the first time. Instead of presenting information through static documentation or a linear tutorial, the system allows users to ask questions, follow related concepts, and gradually build a mental model through interaction.",
    "The project was developed in collaboration with Celonis and explores how expert knowledge can become more accessible through conversational AI, spatial visualization, and subtle adaptive feedback.",
  ],

  challengeTitle: "The accessibility gap",
  challengeParagraphs: [
    "Process mining allows organizations to analyze and improve real operational processes using system data. While the technology is powerful, it can be difficult for non-technical audiences to understand quickly — especially in contexts like conferences, presentations, or first client conversations.",
    "A business decision-maker may leave a Celonis event interested in the idea, but still struggle to explain what process mining actually does, how it relates to their company, or why it matters. The challenge was therefore not a lack of information, but a lack of accessible entry points.",
  ],
  challengeQuote:
    "How might we turn complex domain knowledge into something people can explore before they fully understand it?",

  strategyTitle: "Designing a bridge into complexity",
  strategyParagraphs: [
    "During the project, we realized that most users do not need expert-level training at the first point of contact. They need a bridge between curiosity and understanding. The design strategy was therefore to create an interface that explains, connects, and guides — without overwhelming the user with technical depth too early.",
    "Three ideas shaped the concept: knowledge is easier to grasp through conversation, complex topics are better understood as connected systems rather than linear texts, and visual structure can help people remember relationships between ideas.",
  ],
  strategyChips: [
    "Conversational explanation instead of static documentation",
    "Knowledge connections instead of linear learning paths",
    "Point-cloud visualization instead of a human avatar",
    "Adaptive guidance based on user understanding",
  ],

  systemTitle: "From question to knowledge space",
  systemParagraphBeforeImage:
    "Wil-Bot was designed as a modular AI system connecting several layers: user input, AI interpretation, knowledge retrieval, response generation, voice output, and visual feedback. When a user asks a question, the system interprets the request, retrieves relevant knowledge, generates an explanation, and translates the interaction into a visual state.",
  systemParagraphAfterImage:
    "The interaction flow follows a simple logic: the user asks a question, the system interprets it, retrieves relevant information from a structured knowledge base, generates a response, and presents the answer through both voice and visual motion. This made the experience feel less like reading a database and more like navigating a living knowledge space.",
  systemFlow:
    "User question → AI interpretation → Knowledge retrieval → Response generation → Voice + visual output",

  interactionTitle: "A visual system for thinking",
  interactionParagraphs: [
    "Instead of representing Wil-Bot as a realistic human avatar, we designed it as a dynamic point-cloud entity. This avoided the uncanny valley while still giving the system a recognizable presence. The particles suggest data, knowledge, and movement — aligning visually with Celonis’ identity as a data-driven company.",
    "The point cloud changes depending on the state of the interaction. During thinking moments, particles disperse and reorganize around the core structure. During voice responses, the form subtly pulses with the rhythm of the generated speech. As new concepts appear, topic nodes emerge in the interface, allowing users to return to previous ideas and explore related themes.",
    "To make the system feel more responsive, we also experimented with a lightweight emotional feedback layer. Using MediaPipe FaceLandmarker, the prototype could react to simple user states such as confusion or engagement by suggesting clearer prompts or alternative explanations.",
  ],
  interactionChips: [
    "Thinking state: particles disperse and orbit",
    "Speaking state: the form pulses with voice output",
    "Topic nodes: new concepts become revisitable points",
    "Camera feedback: confusion can trigger clearer prompts",
  ],

  outcomeTitle: "Turning explanation into exploration",
  outcomeParagraphs: [
    "The final prototype demonstrated how AI, visualization, and interaction design can work together to create a more accessible entry point into complex technology. Instead of simplifying process mining itself, Wil-Bot simplifies the path into understanding it.",
    "By combining conversational explanations with spatial topic navigation, the system turns abstract expertise into something users can ask about, hear, revisit, and explore. The result is not just a chatbot, but a guided knowledge interface for first-time learners and decision-makers.",
  ],

  reflectionTitle: "What I learned",
  reflectionParagraphs: [
    "This project helped me understand that designing with AI is not only about generating answers. It is about shaping the conditions in which people can build understanding. The interface, the rhythm of interaction, the visual feedback, and the level of explanation all influence whether a system feels helpful or overwhelming.",
    "My main takeaway was that complex expertise does not always need to be reduced. Sometimes it needs to be staged more carefully — through clearer entry points, adaptive guidance, and interaction patterns that let users explore at their own pace.",
  ],
};

const fallbackCaseStudy: CaseStudyContent = {
  overviewTitle: "Project overview",
  overviewParagraphs: [
    "This case study presents the project context, design approach, and final outcome. The work combines research, concept development, visual design, and prototyping into a coherent design process.",
    "The goal was to translate an initial idea into a structured experience that could be understood, tested, and communicated clearly.",
  ],

  challengeTitle: "The core problem",
  challengeParagraphs: [
    "The project began with a design challenge that required translating complex needs into a clear and usable experience.",
    "The main task was to create a solution that felt accessible, visually coherent, and meaningful for its intended audience.",
  ],
  challengeQuote:
    "How might we create an experience that feels clear, engaging, and easy to understand?",

  strategyTitle: "Design approach",
  strategyParagraphs: [
    "The approach combined research, visual exploration, prototyping, and iteration. Each design decision was shaped by the goal of making the final experience more intuitive and emotionally coherent.",
    "The project developed through a process of testing different directions, refining the visual system, and clarifying the interaction logic.",
  ],
  strategyChips: [
    "Research-led concept development",
    "Visual system exploration",
    "Iterative prototyping",
    "Clear communication of the final idea",
  ],

  systemTitle: "Process and structure",
  systemParagraphBeforeImage:
    "The project developed through several phases, from early research and concept exploration to visual development and prototype refinement.",
  systemParagraphAfterImage:
    "This process helped transform the initial idea into a more structured and communicable design outcome.",
  systemFlow: "Research → Concept → Prototype → Refinement → Final outcome",

  interactionTitle: "Design details",
  interactionParagraphs: [
    "The final design language was shaped through careful attention to layout, visual hierarchy, interaction rhythm, and atmosphere.",
    "The goal was to create an experience that felt both functional and emotionally consistent.",
  ],
  interactionChips: [
    "Visual hierarchy",
    "Interaction rhythm",
    "Consistent atmosphere",
    "Clear user guidance",
  ],

  outcomeTitle: "Final outcome",
  outcomeParagraphs: [
    "The final outcome demonstrates how the project idea was translated into a coherent visual and interactive experience.",
    "The result communicates the concept clearly while maintaining a strong visual identity.",
  ],

  reflectionTitle: "What I learned",
  reflectionParagraphs: [
    "This project helped me better understand how design decisions shape the way people interpret and experience an idea.",
    "It also strengthened my ability to connect concept, structure, and visual language into one coherent design direction.",
  ],
};

const projectData: Record<string, Project> = {
  "wil-bot": {
    title: "Wil-Bot",
    summary:
      "An AI knowledge interface that helps people understand process mining through conversation, spatial navigation, and adaptive explanation.",
    partner: "Celonis",
    type: "AI Interaction Design / Concept Prototype",
    role: "Concept development · Interaction design · Visual system design · Prototype development",
    timeline: "[insert timeline]",
    tools: "Figma, Protopie, Gemini API, ElevenLabs, MediaPipe, 3D visualization",
    heroImg: wilbotOverviewWide1,
    processImg: wilbotOverviewWide2,
    uiImg: wilbotOverview2,
    caseStudy: wilbotCaseStudy,
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

const bodyTextStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: "0.97rem",
  fontWeight: 300,
  lineHeight: 1.82,
  color: "#4A4A46",
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
  children: ReactNode;
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

        <div>{children}</div>
      </div>
    </motion.section>
  );
}

function ChipsGrid({ items }: { items: string[] }) {
  return (
    <div
      className="vb-chips-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
      }}
    >
      {items.map((item) => (
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
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectData[id ?? ""] ?? projectData["wil-bot"];
  const caseStudy = project.caseStudy ?? fallbackCaseStudy;

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
        style={{
          padding: "0 3.5rem 8rem",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <AtmosphericImageBlock
          src={project.heroImg}
          alt={`${project.title} — Hero`}
          aspectRatio="16/7"
          label="Project overview"
        />
      </motion.div>

      {/* ─── CASE STUDY SECTIONS ─── */}
      <div
        className="vb-section vb-container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 3.5rem 8rem",
        }}
      >
        {/* 01 / Overview */}
        <CaseSection label="01 / Overview" title={caseStudy.overviewTitle}>
          {caseStudy.overviewParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                ...bodyTextStyle,
                marginBottom:
                  index === caseStudy.overviewParagraphs.length - 1
                    ? 0
                    : "2rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </CaseSection>

        {/* 02 / Challenge */}
        <CaseSection label="02 / Challenge" title={caseStudy.challengeTitle}>
          {caseStudy.challengeParagraphs.map((paragraph) => (
            <p key={paragraph} style={{ ...bodyTextStyle, marginBottom: "2rem" }}>
              {paragraph}
            </p>
          ))}

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
              “{caseStudy.challengeQuote}”
            </p>
          </div>
        </CaseSection>

        {/* 03 / Strategy */}
        <CaseSection label="03 / Strategy" title={caseStudy.strategyTitle}>
          {caseStudy.strategyParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                ...bodyTextStyle,
                marginBottom:
                  index === caseStudy.strategyParagraphs.length - 1
                    ? "3rem"
                    : "2rem",
              }}
            >
              {paragraph}
            </p>
          ))}

          <ChipsGrid items={caseStudy.strategyChips} />
        </CaseSection>

        {/* 04 / System */}
        <CaseSection label="04 / System" title={caseStudy.systemTitle}>
          <p style={{ ...bodyTextStyle, marginBottom: "3rem" }}>
            {caseStudy.systemParagraphBeforeImage}
          </p>

          <AtmosphericImageBlock
            src={project.processImg}
            alt={`${project.title} — System architecture`}
            aspectRatio="16/7"
            label="System architecture and interaction flow"
          />

          <div
            style={{
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
              padding: "1.5rem 1.75rem",
              background: "rgba(236, 234, 230, 0.7)",
              border: "1px solid rgba(28, 28, 26, 0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9A9690",
                marginBottom: "0.65rem",
              }}
            >
              Interaction flow
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#3A3A36",
              }}
            >
              {caseStudy.systemFlow}
            </p>
          </div>

          <p style={{ ...bodyTextStyle, marginTop: "3rem" }}>
            {caseStudy.systemParagraphAfterImage}
          </p>
        </CaseSection>

        {/* 05 / Interaction */}
        <CaseSection
          label="05 / Interaction"
          title={caseStudy.interactionTitle}
        >
          {caseStudy.interactionParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                ...bodyTextStyle,
                marginBottom:
                  index === caseStudy.interactionParagraphs.length - 1
                    ? "3rem"
                    : "2rem",
              }}
            >
              {paragraph}
            </p>
          ))}

          <ChipsGrid items={caseStudy.interactionChips} />
        </CaseSection>

        {/* 06 / Outcome */}
        <CaseSection label="06 / Outcome" title={caseStudy.outcomeTitle}>
          <AtmosphericImageBlock
            src={project.uiImg}
            alt={`${project.title} — Final interface`}
            aspectRatio="16/8"
            label="Final interface and visual system"
          />

          {caseStudy.outcomeParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                ...bodyTextStyle,
                marginTop: index === 0 ? "3rem" : 0,
                marginBottom:
                  index === caseStudy.outcomeParagraphs.length - 1
                    ? 0
                    : "2rem",
              }}
            >
              {paragraph}
            </p>
          ))}
        </CaseSection>

        {/* 07 / Reflection */}
        <CaseSection label="07 / Reflection" title={caseStudy.reflectionTitle}>
          {caseStudy.reflectionParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              style={{
                ...bodyTextStyle,
                marginBottom:
                  index === caseStudy.reflectionParagraphs.length - 1
                    ? 0
                    : "2rem",
              }}
            >
              {paragraph}
            </p>
          ))}
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