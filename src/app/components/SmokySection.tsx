import { useRef, useState, ReactNode, CSSProperties } from "react";

interface SmokySectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  intensity?: "light" | "medium" | "strong";
}

export function SmokySection({
  children,
  className = "",
  style = {},
  intensity = "medium",
}: SmokySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [hovering, setHovering] = useState(false);

  const blurMap = { light: "blur(1px)", medium: "blur(2px)", strong: "blur(4px)" };
  const veilOpacity = { light: 0.06, medium: 0.11, strong: 0.18 };
  const glowSize = { light: 500, medium: 680, strong: 860 };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Large radial atmospheric glow — follows cursor at near-normal speed */}
      <div
        style={{
          position: "absolute",
          width: `${glowSize[intensity]}px`,
          height: `${glowSize[intensity] * 0.72}px`,
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(210, 207, 200, 0.52) 0%, rgba(210, 207, 200, 0.16) 48%, transparent 72%)",
          filter: "blur(26px)",
          pointerEvents: "none",
          transition: "left 0.16s ease, top 0.16s ease, opacity 0.6s ease",
          opacity: hovering ? 1 : 0,
          zIndex: 1,
        }}
      />

      {/* Slow-shifting translucent veil — parallax refraction effect */}
      <div
        style={{
          position: "absolute",
          inset: "-6%",
          backdropFilter: blurMap[intensity],
          background: `rgba(236, 234, 230, ${veilOpacity[intensity]})`,
          transform: `translate(${(mouse.x - 0.5) * -20}px, ${(mouse.y - 0.5) * -13}px)`,
          pointerEvents: "none",
          transition:
            "transform 1.5s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.65s ease",
          opacity: hovering ? 1 : 0,
          zIndex: 2,
        }}
      />

      {/* Secondary accent glow — slightly offset for depth */}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "220px",
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: `translate(calc(-50% + ${(mouse.x - 0.5) * -28}px), calc(-50% + ${(mouse.y - 0.5) * -18}px))`,
          background:
            "radial-gradient(ellipse at center, rgba(248, 246, 242, 0.36) 0%, transparent 68%)",
          filter: "blur(14px)",
          pointerEvents: "none",
          transition: "left 0.32s ease, top 0.32s ease, transform 0.85s ease, opacity 0.6s ease",
          opacity: hovering ? 0.75 : 0,
          zIndex: 2,
        }}
      />

      {/* Content layer — always crisp above the glass effect */}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}
