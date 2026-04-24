import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { to: "/work", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1.6rem 3.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: scrolled || menuOpen ? "blur(24px) saturate(1.4)" : "blur(0px)",
          background: scrolled || menuOpen
            ? "rgba(236, 234, 230, 0.88)"
            : "rgba(236, 234, 230, 0)",
          borderBottom: scrolled && !menuOpen
            ? "1px solid rgba(28, 28, 26, 0.06)"
            : "1px solid transparent",
          transition:
            "background 0.55s ease, backdrop-filter 0.55s ease, border-color 0.55s ease",
        }}
      >
        {/* Logo / Name */}
        <NavLink
          to="/"
          onClick={closeMenu}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "#1C1C1A",
            textDecoration: "none",
            letterSpacing: "0.025em",
            zIndex: 200,
          }}
        >
          Vasilisa Boronnikova
        </NavLink>

        {/* Desktop nav links */}
        <div
          className="vb-nav-links"
          style={{ gap: "2.8rem", alignItems: "center" }}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={{
                textDecoration: "none",
                position: "relative",
                paddingBottom: "5px",
                display: "inline-block",
              }}
            >
              {({ isActive }) => (
                <>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "#1C1C1A" : "#7A7872",
                      letterSpacing: "0.04em",
                      transition: "color 0.45s ease",
                      display: "block",
                    }}
                  >
                    {label}
                  </span>

                  {/* Thin editorial underline — scales from centre */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(28,28,26,0.5) 22%, rgba(28,28,26,0.5) 78%, transparent 100%)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "center",
                      transition:
                        "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="vb-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{ zIndex: 200 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="x"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <X size={20} strokeWidth={1.5} color="#1C1C1A" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2 }}
                style={{ display: "flex" }}
              >
                <Menu size={20} strokeWidth={1.5} color="#1C1C1A" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div className={`vb-mobile-overlay ${menuOpen ? "is-open" : ""}`}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "320px",
            height: "280px",
            background:
              "radial-gradient(ellipse at center, rgba(208, 204, 198, 0.45) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.65rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#9A9690",
            marginBottom: "2.5rem",
          }}
        >
          Navigation
        </p>

        <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {NAV_LINKS.map(({ to, label }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, x: -16 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <NavLink
                to={to}
                onClick={closeMenu}
                style={({ isActive }) => ({
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2.4rem, 10vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: isActive ? "#1C1C1A" : "#BEBBB5",
                  textDecoration: "none",
                  display: "block",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(28, 28, 26, 0.06)",
                  transition: "color 0.25s ease",
                })}
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ marginTop: "3rem" }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.72rem",
              fontWeight: 300,
              color: "#9A9690",
              letterSpacing: "0.04em",
            }}
          >
            Based in Munich — Open to opportunities
          </p>
        </motion.div>
      </div>
    </>
  );
}
