import { useEffect, useMemo, useRef } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import { AtmosphericImage } from "../components/AtmosphericImage";
import wilbotOverview2 from "../../assets/images/wilbot-overview2.png";
import walkableOverviewWide5 from "../../assets/images/walkable-overview-wide5.png";

const PORTRAIT_URL =
  "https://images.unsplash.com/photo-1612485842581-0dce50d5268f?w=900&q=80&fit=crop";

type PixelLine = {
  text: string;
  color?: string;
};

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  seed: number;
};

type PixelHeaderProps = {
  lines: PixelLine[];
  fontFamily?: string;
  fontWeight?: number | string;
  className?: string;
  style?: CSSProperties;
  sampleGap?: number;
  pixelSize?: number;
  repelRadius?: number;
  repelStrength?: number;
};

function PixelHeader({
  lines,
  fontFamily = `"redaction-70", sans-serif`,
  fontWeight = 700,
  className = "",
  style,
  sampleGap = 5,
  pixelSize = 4,
  repelRadius = 75,
  repelStrength = 1.35,
}: PixelHeaderProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    active: false,
  });

  const plainText = useMemo(() => lines.map((line) => line.text).join(" "), [lines]);

  const lineKey = useMemo(
    () => lines.map((line) => `${line.text}-${line.color ?? ""}`).join("|"),
    [lines]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let disposed = false;
    let resizeTimeout: number | undefined;

    const buildParticles = () => {
      const rect = wrapper.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const height = Math.max(260, Math.floor(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;

      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;

      const offCtx = offscreen.getContext("2d", {
        willReadFrequently: true,
      });

      if (!offCtx) return;

      offCtx.clearRect(0, 0, width, height);
      offCtx.imageSmoothingEnabled = false;
      offCtx.textAlign = "left";
      offCtx.textBaseline = "top";

      let fontSize = Math.min(Math.max(width * 0.15, 56), 155);
      let lineHeight = fontSize * 0.9;

      const setFont = () => {
        offCtx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      };

      setFont();

      const getLongestLineWidth = () => {
        return Math.max(...lines.map((line) => offCtx.measureText(line.text).width));
      };

      while (getLongestLineWidth() > width && fontSize > 42) {
        fontSize -= 3;
        lineHeight = fontSize * 0.9;
        setFont();
      }

      const totalTextHeight = lineHeight * lines.length;
      const startX = 0;
      const startY = Math.max(0, (height - totalTextHeight) / 2);

      lines.forEach((line, index) => {
        offCtx.fillStyle = line.color ?? "#1C1C1A";
        offCtx.fillText(line.text, startX, startY + index * lineHeight);
      });

      const imageData = offCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const particles: Particle[] = [];

      for (let y = 0; y < height; y += sampleGap) {
        for (let x = 0; x < width; x += sampleGap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];

          if (alpha > 80) {
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];

            particles.push({
              x,
              y,
              homeX: x,
              homeY: y,
              vx: 0,
              vy: 0,
              size: pixelSize,
              color: `rgba(${r}, ${g}, ${b}, ${alpha / 255})`,
              seed: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      if (disposed) return;

      const rect = wrapper.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const height = Math.max(260, Math.floor(rect.height));
      const now = performance.now();

      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      for (const particle of particles) {
        const homeForce = 0.05;
        const friction = 0.84;

        const toHomeX = particle.homeX - particle.x;
        const toHomeY = particle.homeY - particle.y;

        particle.vx += toHomeX * homeForce;
        particle.vy += toHomeY * homeForce;

        if (mouse.active) {
          const dx = particle.homeX - mouse.x;
          const dy = particle.homeY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius && distance > 0.001) {
            const proximity = 1 - distance / repelRadius;
            const force = proximity * proximity * repelStrength;

            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;

            const livingMotion = 0.04 * proximity;

            particle.vx += Math.cos(now * 0.002 + particle.seed) * livingMotion;
            particle.vy += Math.sin(now * 0.0022 + particle.seed) * livingMotion;
          }
        }

        particle.vx *= friction;
        particle.vy *= friction;

        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.fillStyle = particle.color;
        ctx.fillRect(
          Math.round(particle.x),
          Math.round(particle.y),
          particle.size,
          particle.size
        );
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const initialize = async () => {
      if ("fonts" in document) {
        try {
          await document.fonts.load(`${fontWeight} 120px ${fontFamily}`);
          await document.fonts.ready;
        } catch {
          await document.fonts.ready;
        }
      }

      if (disposed) return;

      buildParticles();

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      animate();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();

      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimeout);

      resizeTimeout = window.setTimeout(() => {
        buildParticles();
      }, 120);
    });

    resizeObserver.observe(wrapper);

    wrapper.addEventListener("pointermove", handlePointerMove);
    wrapper.addEventListener("pointerleave", handlePointerLeave);

    initialize();

    return () => {
      disposed = true;

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.clearTimeout(resizeTimeout);
      resizeObserver.disconnect();

      wrapper.removeEventListener("pointermove", handlePointerMove);
      wrapper.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [
    lineKey,
    fontFamily,
    fontWeight,
    sampleGap,
    pixelSize,
    repelRadius,
    repelStrength,
  ]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(360px, 44vw, 620px)",
        cursor: "crosshair",
        ...style,
      }}
    >
      <h1
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          border: 0,
          clip: "rect(0, 0, 0, 0)",
        }}
      >
        {plainText}
      </h1>

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}

export default function Home() {
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
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 400,
              letterSpacing: "0.18em",
              color: "#9A9690",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}
          >
            Digital Designer — Munich
          </motion.p>

          {/* Hero headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            style={{
              width: "min(100%, 1100px)",
              marginBottom: "0",
            }}
          >
            <PixelHeader
              fontFamily={`"redaction-70", sans-serif`}
              fontWeight={700}
              sampleGap={5}
              pixelSize={4}
              repelRadius={75}
              repelStrength={1.35}
              lines={[
                { text: "Designing", color: "#1C1C1A" },
                { text: "systems with", color: "#1C1C1A" },
                { text: "structure", color: "#7A7872" },
                { text: "& feeling.", color: "#1C1C1A" },
              ]}
            />
          </motion.div>

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
                fontFamily: "Inter, sans-serif",
                fontSize: "0.78rem",
                fontWeight: 400,
                color: "#7A7872",
                textDecoration: "none",
                letterSpacing: "0.08em",
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
            gridTemplateColumns: "1fr 1fr",
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
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                fontWeight: 300,
                lineHeight: 1.72,
                color: "#3A3A36",
                maxWidth: "42ch",
                marginBottom: "3.5rem",
              }}
            >
              I design digital experiences at the intersection of technology,
              aesthetics, and human behavior — creating systems that are both
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
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.68rem",
                      fontWeight: 400,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#9A9690",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
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
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 400,
                  color: "#1C1C1A",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  borderBottom: "1px solid rgba(28, 28, 26, 0.2)",
                  paddingBottom: "0.2rem",
                  transition: "border-color 0.3s ease",
                }}
              >
                More about me
                <span style={{ fontFamily: "Inter", fontSize: "0.9rem" }}>→</span>
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
            style={{ position: "relative" }}
          >
            <AtmosphericImage
              src={PORTRAIT_URL}
              alt="Vasilisa Boronnikova — Portrait"
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
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
              fontWeight: 600,
              color: "#1C1C1A",
              letterSpacing: "0.01em",
            }}
          >
            Selected Work
          </p>

          <Link
            to="/work"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.78rem",
              fontWeight: 400,
              color: "#7A7872",
              textDecoration: "none",
              letterSpacing: "0.05em",
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
              img: "https://images.unsplash.com/photo-1658051794980-c3fd2f67e255?w=800&q=75&fit=crop",
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
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 400,
                        color: "#9A9690",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {num}
                    </p>

                    <p
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1C1C1A",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {title}
                    </p>

                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
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
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      color: "#9A9690",
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