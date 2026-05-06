import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { AtmosphericImage } from "../components/AtmosphericImage";

const TITLE_FONT = `"normalidad-extended-medium", sans-serif`;
const ACCENT_FONT = `"normalidad-compact-medium", sans-serif`;
const BODY_FONT = `"Inter", sans-serif`;

const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1612485842581-0dce50d5268f?w=900&q=80&fit=crop";

const facts = [
  { label: "Location", value: "Munich, Germany" },
  { label: "Education", value: "Computer Science & Design" },
  { label: "Focus areas", value: "UX/UI, Branding, Interaction" },
  { label: "Available for", value: "Internships, Collaborations, Freelance" },
  { label: "Languages", value: "Russian, English, German" },
  { label: "Currently", value: "Open to opportunities" },
];

const interests = [
  "Spatial interfaces",
  "Editorial design systems",
  "Human-computer interaction",
  "Material aesthetics",
  "Sensory experience design",
  "Experimental typography",
];

export default function About() {
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
    <main style={{ background: "#ECEAE6" }}>
      {/* ─── HERO ─── */}
      <SmokySection
        intensity="medium"
        className="vb-section vb-hero-section"
        style={{
          paddingTop: "11rem",
          paddingBottom: "7rem",
          padding: "11rem 3.5rem 7rem",
          background: "#ECEAE6",
        }}
      >
        {/* Ambient bg */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            background:
              "radial-gradient(ellipse 60% 70% at 70% 30%, rgba(208, 204, 198, 0.3) 0%, transparent 72%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          {/* Section label */}
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
              marginBottom: "1.8rem",
            }}
          >
            About
          </motion.p>

          {/* Opening statement */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(2.8rem, 6vw, 7.4rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 0.92,
              letterSpacing: "-0.055em",
              color: "#1C1C1A",
              maxWidth: "18ch",
              marginBottom: "0",
            }}
          >
            I design at the
            <br />
            intersection of
            <br />
            <span style={{ color: "#7A7872" }}>systems,</span>
            <br />
            aesthetics &
            <br />
            behavior.
          </motion.h1>
        </div>
      </SmokySection>

      {/* ─── MAIN BIO + PORTRAIT ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "7rem 3.5rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div
          className="vb-container vb-grid-2"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "7rem",
            alignItems: "start",
          }}
        >
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
                fontWeight: 300,
                lineHeight: 1.82,
                color: "#3A3A36",
                marginBottom: "2rem",
              }}
            >
              A digital designer working across UX/UI, concept development,
              branding, and interactive systems — with a particular interest in
              the meeting point between clarity and atmosphere.
            </p>
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
                fontWeight: 300,
                lineHeight: 1.82,
                color: "#3A3A36",
                marginBottom: "2rem",
              }}
            >
              My work is grounded in a belief that good design is invisible when
              it works — but unmistakably present when it doesn't. I'm drawn to
              the tension between structure and feeling, between precision and
              intuition.
            </p>
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "clamp(1rem, 1.4vw, 1.22rem)",
                fontWeight: 300,
                lineHeight: 1.82,
                color: "#3A3A36",
              }}
            >
              Based in Munich, I'm currently studying Computer Science and
              Design, developing projects that sit at the edges of disciplines —
              neither purely technical nor purely aesthetic, but thoughtfully
              both.
            </p>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <AtmosphericImage
              src={PORTRAIT_URL}
              alt="Vasilisa Boronnikova"
              aspectRatio="3/4"
              feather
            />
          </motion.div>
        </div>
      </section>

      {/* ─── DESIGN PHILOSOPHY ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "7rem 3.5rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="vb-case-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: ACCENT_FONT,
                  fontSize: "0.68rem",
                  fontWeight: 200,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#1C1C1A",
                  marginBottom: "0.8rem",
                }}
              >
                Design approach
              </p>
              <h2
                style={{
                  fontFamily: TITLE_FONT,
                  fontSize: "clamp(1.45rem, 2.2vw, 2.15rem)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                  color: "#1C1C1A",
                }}
              >
                Structure
                <br />
                with feeling
              </h2>
            </div>

            <div>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "0.97rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "#4A4A46",
                  marginBottom: "1.8rem",
                }}
              >
                I believe design should balance emotional quality with structural
                precision. Systems that feel truly intuitive aren't born from
                simplicity alone — they come from understanding how people think,
                feel, and move through space and information.
              </p>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "0.97rem",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "#4A4A46",
                  marginBottom: "1.8rem",
                }}
              >
                My interest spans visual identity, digital interfaces, service
                design, and storytelling. What connects these disciplines is a
                common pursuit: making complex systems feel alive, coherent, and
                worth inhabiting.
              </p>

              {/* Pull quote */}
              <div
                style={{
                  padding: "1.8rem 2.2rem",
                  background: "rgba(200, 196, 190, 0.2)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(200, 196, 190, 0.3)",
                  marginTop: "2.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: TITLE_FONT,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontSynthesis: "none",
                    lineHeight: 1.55,
                    color: "#2A2A28",
                    letterSpacing: "-0.025em",
                  }}
                >
                  "The best interfaces are the ones you forget you're using."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BACKGROUND / FACTS ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "7rem 3.5rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="vb-case-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "5rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: ACCENT_FONT,
                  fontSize: "0.68rem",
                  fontWeight: 200,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "#1C1C1A",
                  marginBottom: "0.8rem",
                }}
              >
                Background
              </p>
              <h2
                style={{
                  fontFamily: TITLE_FONT,
                  fontSize: "clamp(1.45rem, 2.2vw, 2.15rem)",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  lineHeight: 1.12,
                  letterSpacing: "-0.04em",
                  color: "#1C1C1A",
                }}
              >
                Facts &
                <br />
                context
              </h2>
            </div>

            <div>
              <div
                className="vb-facts-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0",
                }}
              >
                {facts.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.06 }}
                    style={{
                      padding: "1.5rem 0",
                      borderTop: "1px solid rgba(28, 28, 26, 0.08)",
                      paddingRight: "2rem",
                    }}
                  >
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
                        marginBottom: "0.4rem",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: BODY_FONT,
                        fontSize: "0.88rem",
                        fontWeight: 400,
                        color: "#1C1C1A",
                        lineHeight: 1.5,
                      }}
                    >
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── AREAS OF INTEREST ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "7rem 3.5rem 8rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              style={{
                fontFamily: ACCENT_FONT,
                fontSize: "0.68rem",
                fontWeight: 200,
                fontStyle: "normal",
                fontSynthesis: "none",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#1C1C1A",
                marginBottom: "3rem",
              }}
            >
              What I care about
            </p>

            <div
              style={{ display: "flex", flexWrap: "wrap" as const, gap: "0" }}
            >
              {interests.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  style={{
                    padding: "0.9rem 1.6rem",
                    background: "rgba(200, 196, 190, 0.16)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(200, 196, 190, 0.3)",
                    margin: "0.3rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "#1C1C1A",
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ marginTop: "5rem" }}
          >
            <Link
              to="/contact"
              style={{
                fontFamily: ACCENT_FONT,
                fontSize: "0.78rem",
                fontWeight: 200,
                fontStyle: "normal",
                fontSynthesis: "none",
                color: "#1C1C1A",
                textDecoration: "none",
                letterSpacing: "0.03em",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                borderBottom: "1px solid rgba(28, 28, 26, 0.2)",
                paddingBottom: "0.2rem",
              }}
            >
              Get in touch
              <span style={{ fontFamily: BODY_FONT, fontSize: "0.9rem" }}>→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}