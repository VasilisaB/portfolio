import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { SmokySection } from "../components/SmokySection";
import cvPdfUrl from "../../assets/cv/Vasilisa-Boronnikova-CV.pdf?url";

const TITLE_FONT = `"normalidad-extended-medium", sans-serif`;
const ACCENT_FONT = `"normalidad-compact-medium", sans-serif`;
const BODY_FONT = `"Inter", sans-serif`;

const CONTACT_EMAIL = "vasilisa.boronnikova@gmail.com";

type ContactLink = {
  label: string;
  href: string;
  note: string;
  target?: "_blank";
  download?: string;
};

const links: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/vasilisa-boronnikova-722407236",
    note: "Professional network",
    target: "_blank",
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    note: CONTACT_EMAIL,
  },
  {
    label: "CV",
    href: cvPdfUrl,
    note: "Download PDF",
    download: "Vasilisa-Boronnikova-CV.pdf",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "opened">("idle");

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio message from ${
      formState.name.trim() || "Website visitor"
    }`;

    const body = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
`.trim();

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setStatus("opened");
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "1rem 0",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${
      focused === field ? "rgba(28, 28, 26, 0.4)" : "rgba(28, 28, 26, 0.12)"
    }`,
    fontFamily: BODY_FONT,
    fontSize: "0.9rem",
    fontWeight: 300,
    color: "#1C1C1A",
    outline: "none",
    transition: "border-color 0.35s ease",
    display: "block",
    marginBottom: "2.5rem",
  });

  return (
    <main style={{ background: "#ECEAE6", minHeight: "100vh" }}>
      {/* ─── HERO ─── */}
      <SmokySection
        intensity="light"
        className="vb-section vb-hero-section"
        style={{
          paddingTop: "11rem",
          paddingBottom: "5rem",
          padding: "11rem 3.5rem 5rem",
          background: "#ECEAE6",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
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
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
            style={{
              fontFamily: TITLE_FONT,
              fontSize: "clamp(3.2rem, 6.6vw, 8.4rem)",
              fontWeight: 700,
              fontStyle: "normal",
              fontSynthesis: "none",
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              color: "#1C1C1A",
              marginBottom: "2.5rem",
            }}
          >
            Let's talk.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: BODY_FONT,
              fontSize: "1rem",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "#5A5A56",
              maxWidth: "45ch",
            }}
          >
            Feel free to reach out for collaborations, questions, or
            opportunities. You can reach me directly or send a message here.
          </motion.p>
        </div>
      </SmokySection>

      {/* ─── MAIN CONTENT ─── */}
      <section
        className="vb-section vb-section-tall"
        style={{
          padding: "5rem 3.5rem 9rem",
          borderTop: "1px solid rgba(28, 28, 26, 0.08)",
        }}
      >
        <div
          className="vb-container vb-grid-2"
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "8rem",
            alignItems: "start",
          }}
        >
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
                marginBottom: "2.5rem",
              }}
            >
              Direct links
            </p>

            <div>
              {links.map(({ label, href, note, target, download }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                  style={{
                    paddingTop: "1.4rem",
                    paddingBottom: "1.4rem",
                    borderBottom: "1px solid rgba(28, 28, 26, 0.07)",
                  }}
                >
                  <a
                    href={href}
                    target={target}
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                    download={download}
                    style={{
                      fontFamily: TITLE_FONT,
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSynthesis: "none",
                      color: "#1C1C1A",
                      textDecoration: "none",
                      letterSpacing: "-0.035em",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "1.5rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#7A7872")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#1C1C1A")
                    }
                  >
                    {label}
                    <span
                      style={{
                        fontFamily: ACCENT_FONT,
                        fontSize: "0.72rem",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSynthesis: "none",
                        color: "#1C1C1A",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {note}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Location note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ marginTop: "3.5rem" }}
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
                  marginBottom: "0.5rem",
                }}
              >
                Based in
              </p>
              <p
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: "0.88rem",
                  fontWeight: 400,
                  color: "#5A5A56",
                }}
              >
                Munich, Germany
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                marginBottom: "2.5rem",
              }}
            >
              Send a message
            </p>

            <form
              onSubmit={handleSubmit}
              className="vb-contact-form"
              style={{
                padding: "2.5rem 3rem",
                background: "rgba(220, 218, 214, 0.2)",
                backdropFilter: "blur(14px)",
                border: "1px solid rgba(200, 196, 190, 0.3)",
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: ACCENT_FONT,
                    fontSize: "0.62rem",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSynthesis: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#1C1C1A",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, name: e.target.value }))
                  }
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  style={{
                    ...inputStyle("name"),
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: ACCENT_FONT,
                    fontSize: "0.62rem",
                    fontWeight: 200,
                    fontStyle: "normal",
                    fontSynthesis: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#1C1C1A",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  style={{
                    ...inputStyle("email"),
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: ACCENT_FONT,
                    fontSize: "0.62rem",
                    fontWeight: 200,
                    fontStyle: "normal",
                    fontSynthesis: "none",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "#9A9690",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="What's on your mind?"
                  style={{
                    width: "100%",
                    padding: "1rem 0",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${
                      focused === "message"
                        ? "rgba(28, 28, 26, 0.4)"
                        : "rgba(28, 28, 26, 0.12)"
                    }`,
                    fontFamily: BODY_FONT,
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "#1C1C1A",
                    outline: "none",
                    resize: "none" as const,
                    transition: "border-color 0.35s ease",
                    display: "block",
                    marginBottom: "3rem",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.8rem 0",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(28, 28, 26, 0.3)",
                  fontFamily: ACCENT_FONT,
                  fontSize: "0.8rem",
                  fontWeight: 200,
                  fontStyle: "normal",
                  fontSynthesis: "none",
                  color: "#1C1C1A",
                  letterSpacing: "0.03em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  transition: "border-color 0.3s ease, color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#7A7872";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(28, 28, 26, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#1C1C1A";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(28, 28, 26, 0.3)";
                }}
              >
                Send message
                <span style={{ fontFamily: BODY_FONT, fontSize: "0.9rem" }}>
                  →
                </span>
              </button>

              {status === "opened" && (
                <p
                  aria-live="polite"
                  style={{
                    marginTop: "1.5rem",
                    fontFamily: BODY_FONT,
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#5A5A56",
                  }}
                >
                  Your email app should open with the message prepared. Please
                  press send there to complete it.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}