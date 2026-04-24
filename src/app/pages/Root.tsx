import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navigation } from "../components/Navigation";

function Footer() {
  return (
    <footer
      className="vb-footer"
      style={{
        padding: "2.2rem 3.5rem",
        borderTop: "1px solid rgba(28, 28, 26, 0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ECEAE6",
      }}
    >
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 400,
          color: "#9A9690",
          letterSpacing: "0.06em",
        }}
      >
        © 2024 Vasilisa Boronnikova
      </p>
      <div className="vb-footer-links" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {[
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "Instagram", href: "https://instagram.com" },
          { label: "Email", href: "mailto:vasilisa@example.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              color: "#9A9690",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#3A3A36")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#9A9690")
            }
          >
            {label}
          </a>
        ))}
      </div>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 400,
          color: "#9A9690",
          letterSpacing: "0.06em",
        }}
      >
        Digital Designer — Munich
      </p>
    </footer>
  );
}

export default function Root() {
  const location = useLocation();

  return (
    <div
      style={{
        background: "#ECEAE6",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        color: "#1C1C1A",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation />
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}