import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { AtmosphericImage } from "../components/AtmosphericImage";
import wilbotOverview2 from "../../assets/images/wilbot-overview2.png";
import walkableOverviewWide5 from "../../assets/images/walkable-overview-wide5.png";
import eclypt1 from "../../assets/images/eclypt-overview-wide2png.png";
import v1 from "../../assets/images/v1.png";

const PORTRAIT_URL = v1;

const TITLE_FONT = `"normalidad-extended-medium", sans-serif`;
const ACCENT_FONT = `"normalidad-compact-medium", sans-serif`;
const BODY_FONT = `"Inter", sans-serif`;

export default function Home() {
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
    <main>
      {/* ─── HERO ─── */}
      <SmokySection
        intensity="strong"
        className="vb-section vb-hero-section"
        style={{
          minHeight: "100vh",
          padding: "0 3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ECEAE6",
        }}
      >
        {/* Ambient background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(210, 206, 200, 0.35) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          className="vb-hero-inner"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            width: "100%",
            paddingTop: "10rem",
          }}
        >
          {/* Label / normalidad accent */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: ACCENT_FONT,
              fontSize: "0.82rem",
              fontWeight: 200,
              fontStyle: "normal",
              fontSynthesis: "none",
              letterSpacing: "0.08em",
              color: "#1C1C1A",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}
          >
            Digital Designer | Munich
          </motion.p>

          {/* Hero headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(3rem, 6.8vw, 8.5rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 0.9,
              color: "#1C1C1A",
              letterSpacing: "-0.055em",
              maxWidth: "15ch",
              marginBottom: "0",
            }}
          >
            Designing
            <br />
            systems with
            <br />
            <span style={{ color: "#7A7872" }}>structure</span>
            <br />& feeling.
          </motion.h1>

          {/* Right-aligned scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "3rem",
              paddingBottom: "6rem",
            }}
          >
            <Link
              to="/work"
              style={{
                fontFamily: ACCENT_FONT,
                fontSize: "0.8rem",
                fontWeight: 200,
                fontStyle: "normal",
                fontSynthesis: "none",
                color: "#7A7872",
                textDecoration: "none",
                letterSpacing: "0.03em",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                transition: "color 0.3s ease",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "48px",
                  height: "1px",
                  background: "#9A9690",
                }}
              />
              View selected work
            </Link>
          </motion.div>
        </div>
      </SmokySection>

      {/* ─── INTRO + PORTRAIT ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "8rem 3.5rem 10rem",
          background: "#ECEAE6",
        }}
      >
        <div
          className="vb-container vb-grid-2"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(280px, 1fr)",
            gap: "6rem",
            alignItems: "start",
          }}
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <p
              style={{
                fontFamily: BODY_FONT,
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                fontWeight: 300,
                lineHeight: 1.72,
                color: "#3A3A36",
                maxWidth: "42ch",
                marginBottom: "3.5rem",
              }}
            >
              I design digital experiences at the intersection of technology,
              aesthetics, and human behavior, creating systems that are both
              intuitive and deeply human.
            </p>

            {/* Thin separator */}
            <div
              style={{
                width: "2.5rem",
                height: "1px",
                background: "rgba(28, 28, 26, 0.2)",
                marginBottom: "2rem",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              {[
                { label: "Focus", value: "UX / UI Design" },
                { label: "Approach", value: "Systems & Atmosphere" },
                { label: "Based in", value: "Munich, DE" },
                { label: "Available", value: "Open to collabs" },
              ].map(({ label, value }) => (
                <div key={label}>
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
                      marginBottom: "0.35rem",
                    }}
                  >
                    {label}
                  </p>

                  <p
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: "0.88rem",
                      fontWeight: 400,
                      color: "#3A3A36",
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <Link
                to="/about"
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
                  transition: "border-color 0.3s ease",
                }}
              >
                More about me
                <span style={{ fontFamily: BODY_FONT, fontSize: "0.9rem" }}>
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              justifySelf: "end",
            }}
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

      {/* ─── SELECTED WORK PREVIEW ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "4rem 3.5rem 8rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div
          className="vb-container vb-section-header"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <p
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              color: "#1C1C1A",
              letterSpacing: "-0.035em",
            }}
          >
            Selected Work
          </p>

          <Link
            to="/work"
            style={{
              fontFamily: ACCENT_FONT,
              fontSize: "0.8rem",
              fontWeight: 200,
              fontStyle: "normal",
              fontSynthesis: "none",
              color: "#7A7872",
              textDecoration: "none",
              letterSpacing: "0.03em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            View all projects →
          </Link>
        </div>

        <div
          className="vb-container vb-grid-3"
          style={{
            maxWidth: "1300px",
            margin: "3rem auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {[
            {
              num: "01",
              title: "Wil-Bot",
              type: "AI Interaction Design",
              to: "/work/wil-bot",
              img: wilbotOverview2,
            },
            {
              num: "02",
              title: "Walkable Memory",
              type: "Service Design / Mobile",
              to: "/work/walkable-memory",
              img: walkableOverviewWide5,
            },
            {
              num: "03",
              title: "Eclypt",
              type: "Experimental Branding",
              to: "/work/eclypt",
              img: eclypt1,
            },
          ].map(({ num, title, type, to, img }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link to={to} style={{ textDecoration: "none", display: "block" }}>
                <AtmosphericImage
                  src={img}
                  alt={title}
                  aspectRatio="4/3"
                  feather={false}
                  style={{ marginBottom: "1.2rem" }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: ACCENT_FONT,
                        fontSize: "0.72rem",
                        fontWeight: 200,
                        fontStyle: "normal",
                        fontSynthesis: "none",
                        color: "#1C1C1A",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {num}
                    </p>

                    <p
                      style={{
                        fontFamily: TITLE_FONT,
                        fontSize: "1rem",
                        fontWeight: 700,
                        fontStyle: "normal",
                        fontSynthesis: "none",
                        color: "#1C1C1A",
                        marginBottom: "0.25rem",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {title}
                    </p>

                    <p
                      style={{
                        fontFamily: BODY_FONT,
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        color: "#7A7872",
                      }}
                    >
                      {type}
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: BODY_FONT,
                      fontSize: "0.8rem",
                      color: "#1C1C1A",
                    }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}