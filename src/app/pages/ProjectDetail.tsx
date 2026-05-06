import { useEffect, type ReactNode } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import wilbotOverviewWide1 from "../../assets/images/wilbot-overview-wide1.png";
import wilbotOverviewWide2 from "../../assets/images/wilbot-overview-wide2.png";
import wilbotCore from "../../assets/images/wil-core.png";
import walkableOverviewWide1 from "../../assets/images/walkable-overview-wide1.png";
import walkableOverviewWide3 from "../../assets/images/walkable-overview-wide3.png";
import walkableOverviewWide5 from "../../assets/images/walkable-overview-wide5.png";
import eclypt1 from "../../assets/images/eclypt-overview-wide3png.png";
import eclypt3 from "../../assets/images/eclypt-overview-wide1png.png";
import eclypt2 from "../../assets/images/eclypt-overview3.png";

const TITLE_FONT = `"normalidad-extended-medium", sans-serif`;
const ACCENT_FONT = `"normalidad-compact-medium", sans-serif`;
const BODY_FONT = `"Inter", sans-serif`;

type CaseStudyContent = {
  overviewTitle: string;
  overviewParagraphs: string[];

  challengeTitle: string;
  challengeParagraphs: string[];
  challengeQuote: string;

  strategyTitle: string;
  strategyParagraphs: string[];
  strategyChips: string[];

  systemSectionLabel?: string;
  systemTitle: string;
  systemParagraphBeforeImage: string;
  systemParagraphAfterImage: string;
  systemFlow: string;
  systemFlowLabel?: string;
  processImageLabel?: string;

  interactionSectionLabel?: string;
  interactionTitle: string;
  interactionParagraphs: string[];
  interactionChips: string[];

  outcomeSectionLabel?: string;
  outcomeTitle: string;
  outcomeParagraphs: string[];
  outcomeImageLabel?: string;

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
  overviewTitle: "AI knowledge interface for process mining",
  overviewParagraphs: [
    "Wil-Bot is a conversational AI interface designed to make process mining easier to understand for first-time users. Instead of reading documentation, users can ask questions, receive spoken explanations, and explore related topics through a spatial interface.",
    "The project focused on translating complex expert knowledge into a more accessible interaction model for business audiences, especially people encountering Celonis in event, presentation, or sales contexts.",
  ],

  challengeTitle: "Making complex technology understandable",
  challengeParagraphs: [
    "Process mining is powerful, but difficult to explain quickly. Non-technical users often understand that the technology is valuable, but struggle to describe what it does, how it works, or how it could apply to their company.",
    "The design challenge was to create a clearer entry point into the topic. The goal was not to simplify process mining itself, but to design a more intuitive way into understanding it.",
  ],
  challengeQuote:
    "How might we help people explore complex domain knowledge before they fully understand it?",

  strategyTitle: "From chatbot to knowledge interface",
  strategyParagraphs: [
    "The main design decision was to move beyond a traditional chatbot. Wil-Bot was designed as a knowledge interface where conversation, visual structure, and topic navigation work together.",
    "This made the experience less linear and more exploratory. Users could ask their own questions, follow connected concepts, and gradually build a mental model of process mining.",
  ],
  strategyChips: [
    "Conversation instead of static documentation",
    "Topic navigation instead of linear learning",
    "Point-cloud entity instead of human avatar",
    "Adaptive prompts for moments of confusion",
  ],

  systemTitle: "How the system works",
  systemParagraphBeforeImage:
    "Wil-Bot connects several system layers: user input, AI interpretation, structured knowledge retrieval, response generation, voice output, and visual feedback. Each question becomes part of an ongoing interaction rather than a single isolated answer.",
  systemParagraphAfterImage:
    "The prototype used Gemini for language generation, a structured knowledge base based on process mining material, ElevenLabs for voice output, MediaPipe for simple facial feedback, and a 3D point-cloud layer for the visual interface.",
  systemFlow:
    "User question → AI interpretation → Knowledge retrieval → Generated answer → Voice output → Visual feedback",
  systemFlowLabel: "Interaction flow",
  processImageLabel: "System architecture and interaction flow",

  interactionTitle: "Visual and interaction design",
  interactionParagraphs: [
    "Wil-Bot is represented as a dynamic point-cloud entity rather than a realistic human avatar. This avoided the uncanny valley while still giving the system a clear presence. The particles reflect ideas of data, knowledge, movement, and connection.",
    "The interface changes depending on the interaction state. When Wil-Bot is processing a question, the particles reorganize. When it speaks, the form subtly pulses. When new topics appear, small nodes are added so users can return to previous ideas.",
    "We also explored a lightweight adaptive layer using MediaPipe FaceLandmarker. If the user appears confused, Wil-Bot can suggest clearer prompts or offer a simpler explanation.",
  ],
  interactionChips: [
    "Thinking state with moving particles",
    "Voice-reactive visual feedback",
    "Topic nodes for revisiting ideas",
    "Camera-based adaptive suggestions",
  ],

  outcomeTitle: "What the prototype demonstrates",
  outcomeParagraphs: [
    "The final prototype shows how AI can support understanding when it is designed as an experience, not just as an answer generator. Wil-Bot combines conversation, voice, spatial navigation, and subtle feedback into one learning interface.",
    "For a hiring audience, the project demonstrates concept development, interaction design, visual system thinking, AI prototyping, and the ability to translate abstract technology into a clear user experience.",
  ],
  outcomeImageLabel: "Final interface and visual system",

  reflectionTitle: "What I learned",
  reflectionParagraphs: [
    "This project taught me that AI interaction design is not only about what the system says. It is also about how users enter the topic, how information is sequenced, and how the interface supports understanding.",
    "My main takeaway was that complex expertise does not always need to be reduced. Often, it needs a better structure, a clearer entry point, and an interaction model that lets people explore at their own pace.",
  ],
};

const walkableMemoryCaseStudy: CaseStudyContent = {
  overviewTitle: "Location-based remembrance experience",
  overviewParagraphs: [
    "Walkable Memory is a mobile web concept that makes Moosburg’s hidden Stalag VII-A history more visible in public space. Users can access short location-based stories directly on site, without downloading an app.",
    "The project focused on creating a low-barrier entry point into a sensitive historical topic. Instead of overwhelming users with dense information, the experience introduces history through clear navigation, short stories, and optional deeper context.",
  ],

  challengeTitle: "Making hidden history visible",
  challengeParagraphs: [
    "Moosburg’s Stalag VII-A history is highly significant, but mostly invisible in everyday life. The former camp area has become part of the normal city fabric, so people move through historically important places without recognizing them.",
    "Existing access points were fragmented or too dense for quick engagement. The design challenge was to connect historical locations into one coherent visitor experience that felt accessible, respectful, and easy to start.",
  ],
  challengeQuote:
    "How might we make hidden history visible on site without making the experience feel heavy, confusing, or inappropriate?",

  strategyTitle: "Low barrier first, depth second",
  strategyParagraphs: [
    "Research showed that the core issue was not a lack of information, but a lack of a clear entry point. Users needed to understand within seconds what the experience is, how long it takes, and how to begin.",
    "This led to one main product principle: low barrier first, depth second. The concept starts with short one-minute stories tied to real places, then offers deeper historical context for users who want to continue.",
  ],
  strategyChips: [
    "Mobile web access with no install",
    "Map-based entry into real locations",
    "One-minute stories for quick engagement",
    "Optional deeper layers through audio and AR",
  ],

  systemSectionLabel: "04 / Structure",
  systemTitle: "Information architecture",
  systemParagraphBeforeImage:
    "The experience was structured around a simple repeatable flow: users open the map, choose a location, read or listen to a short story, then decide whether to continue deeper or move to the next place.",
  systemParagraphAfterImage:
    "This structure reduced cognitive load and supported flexible engagement. Users could stop after one location or continue through several, depending on their time, attention, and emotional readiness.",
  systemFlow:
    "Map → Choose location → One-minute story → Deeper context → Continue exploring",
  systemFlowLabel: "Core user flow",
  processImageLabel: "Information architecture and mobile flow",

  interactionSectionLabel: "05 / Testing",
  interactionTitle: "Testing and iteration",
  interactionParagraphs: [
    "We tested the concept through quick lo-fi feedback, guided hi-fi walkthroughs on phone, and a remote prototype test with an AR and audio simulation. The goal was to understand confusion, hesitation, and emotional response rather than optimize task speed.",
    "Testing showed that the one-minute story format was easy to understand and that the overall idea felt approachable. At the same time, users needed clearer map interactions, stronger content depth for key locations, and better readability outdoors.",
    "Based on this feedback, we moved from a dark interface to a lighter visual system, improved map controls, added a simple route planner, and expanded content around important locations such as the memorial square.",
  ],
  interactionChips: [
    "Light interface for outdoor readability",
    "Clearer map controls",
    "Simple route planner",
    "More depth for key locations",
  ],

  outcomeSectionLabel: "06 / Outcome",
  outcomeTitle: "What the concept demonstrates",
  outcomeParagraphs: [
    "Walkable Memory shows how UX can support public remembrance by lowering the barrier to entry. Instead of requiring a full museum visit, the concept creates a lightweight place-based interaction that fits real movement through the city.",
    "For a hiring audience, the project demonstrates user research, information architecture, mobile interaction design, prototyping, usability testing, and careful ethical framing for a sensitive cultural context.",
  ],
  outcomeImageLabel: "Final mobile concept and interaction system",

  reflectionTitle: "What I learned",
  reflectionParagraphs: [
    "This project taught me that accessibility is not about simplifying history. It is about designing the right entry point into it.",
    "I also learned that usability in a memorial context is not only functional. Tone, pacing, visual restraint, and the decision not to gamify are part of the user experience.",
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
  systemFlowLabel: "Process flow",
  processImageLabel: "Process and structure",

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
  outcomeImageLabel: "Final outcome",

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
    role: "Concept development · Interaction design · Visual system design · AI prototype",
    timeline: "Oct 2025 · Feb 2026",
    tools: "Figma, Protopie, Gemini API, ElevenLabs, MediaPipe, 3D visualization",
    heroImg: wilbotOverviewWide2,
    processImg: wilbotCore,
    uiImg: wilbotOverviewWide1,
    caseStudy: wilbotCaseStudy,
  },

  "walkable-memory": {
    title: "Walkable Memory",
    summary:
      "A low-barrier mobile web concept that makes Moosburg’s hidden Stalag VII-A history visible through short location-based stories.",
    partner: "Academic Project",
    type: "Service Design / Mobile UX Concept",
    role: "Research · Concept development · Interaction design · Prototyping · Usability testing",
    timeline: "Oct 2025 · Feb 2026",
    tools: "Figma, Figma Make, Miro, field research, usability testing",
    heroImg: walkableOverviewWide5,
    processImg: walkableOverviewWide3,
    uiImg: walkableOverviewWide1,
    caseStudy: walkableMemoryCaseStudy,
  },

  eclypt: {
    title: "Eclypt",
    summary:
      "A visual identity exploring the intersection of brutalist sculpture, organic forms, and futuristic jewelry aesthetics.",
    partner: "Self-initiated",
    type: "Experimental Branding / Visual Identity",
    role: "Art direction, brand concept, visual system design",
    timeline: "2023 · 6 weeks",
    tools: "Figma, Photoshop, Illustrator",
    heroImg: eclypt1,
    processImg: eclypt2,
    uiImg: eclypt3,
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
  fontFamily: BODY_FONT,
  fontSize: "0.97rem",
  fontWeight: 300,
  lineHeight: 1.82,
  color: "#4A4A46",
};

const smallAccentStyle = {
  fontFamily: ACCENT_FONT,
  fontWeight: 200,
  fontStyle: "normal",
  fontSynthesis: "none",
  letterSpacing: "0.05em",
};

function AtmosphericImageBlock({
  src,
  alt,
  aspectRatio = "16/8",
  label,
  to,
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
  label?: string;
  to?: string;
}) {
  const imageContent = (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio,
        cursor: to ? "pointer" : "default",
      }}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "saturate(0.68) contrast(0.93)",
          transition: "transform 0.6s ease, filter 0.6s ease",
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
  );

  return (
    <div style={{ position: "relative" }}>
      {to ? (
        <Link
          to={to}
          aria-label={`Open ${alt}`}
          style={{
            display: "block",
            textDecoration: "none",
          }}
        >
          {imageContent}
        </Link>
      ) : (
        imageContent
      )}

      {label && (
        <p
          style={{
            ...smallAccentStyle,
            fontSize: "0.68rem",
            textTransform: "uppercase",
            color: "#1C1C1A",
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
              ...smallAccentStyle,
              fontSize: "0.68rem",
              textTransform: "uppercase",
              color: "#1C1C1A",
              marginBottom: "0.8rem",
            }}
          >
            {label}
          </p>

          <h3
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "1.25rem",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 1.18,
              color: "#1C1C1A",
              letterSpacing: "-0.035em",
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
              fontFamily: BODY_FONT,
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

  const currentProjectId = id && projectData[id] ? id : "wil-bot";
  const project = projectData[currentProjectId];
  const caseStudy = project.caseStudy ?? fallbackCaseStudy;
  const currentProjectPath = `/work/${currentProjectId}`;

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
            document.fonts.load(`400 24px "normalidad-extended-medium"`),
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
    <main style={{ background: "#ECEAE6" }}>
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3.5rem" }}
          >
            <Link
              to="/work"
              style={{
                ...smallAccentStyle,
                fontSize: "0.75rem",
                color: "#7A7872",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              ← All Projects
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(3rem, 6.4vw, 7.8rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
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
              fontFamily: BODY_FONT,
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
                    ...smallAccentStyle,
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    color: "#1C1C1A",
                    marginBottom: "0.55rem",
                  }}
                >
                  {label}
                </p>

                <p
                  style={{
                    fontFamily: BODY_FONT,
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    lineHeight: 1.5,
                    color: "#1C1C1A",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </SmokySection>

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
          alt={`${project.title} hero image`}
          aspectRatio="16/7"
          label="Project overview"
          to={currentProjectPath}
        />
      </motion.div>

      <div
        className="vb-section vb-container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 3.5rem 8rem",
        }}
      >
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
                fontFamily: TITLE_FONT,
                fontSize: "0.95rem",
                fontWeight: 700,
                fontStyle: "normal",
                fontSynthesis: "none",
                lineHeight: 1.5,
                color: "#2A2A28",
                letterSpacing: "-0.03em",
              }}
            >
              “{caseStudy.challengeQuote}”
            </p>
          </div>
        </CaseSection>

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

        <CaseSection
          label={caseStudy.systemSectionLabel ?? "04 / System"}
          title={caseStudy.systemTitle}
        >
          <p style={{ ...bodyTextStyle, marginBottom: "3rem" }}>
            {caseStudy.systemParagraphBeforeImage}
          </p>

          <AtmosphericImageBlock
            src={project.processImg}
            alt={`${project.title} process image`}
            aspectRatio="16/7"
            label={caseStudy.processImageLabel ?? "Process and structure"}
            to={currentProjectPath}
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
                ...smallAccentStyle,
                fontSize: "0.68rem",
                textTransform: "uppercase",
                color: "#1C1C1A",
                marginBottom: "0.75rem",
              }}
            >
              {caseStudy.systemFlowLabel ?? "Flow"}
            </p>

            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "0.9rem",
                fontWeight: 400,
                lineHeight: 1.65,
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

        <CaseSection
          label={caseStudy.interactionSectionLabel ?? "05 / Interaction"}
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

        <CaseSection
          label={caseStudy.outcomeSectionLabel ?? "06 / Outcome"}
          title={caseStudy.outcomeTitle}
        >
          <AtmosphericImageBlock
            src={project.uiImg}
            alt={`${project.title} final interface`}
            aspectRatio="16/8"
            label={caseStudy.outcomeImageLabel ?? "Final outcome"}
            to={currentProjectPath}
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
              ...smallAccentStyle,
              fontSize: "0.78rem",
              color: "#7A7872",
              textDecoration: "none",
            }}
          >
            ← All Projects
          </Link>

          <p
            style={{
              ...smallAccentStyle,
              fontSize: "0.68rem",
              textTransform: "uppercase",
              color: "#1C1C1A",
            }}
          >
            Vasilisa Boronnikova
          </p>
        </div>
      </div>
    </main>
  );
}