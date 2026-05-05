import { useState, useRef, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AtmosphericImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
  feather?: boolean;
}

/**
 * AtmosphericImage
 *
 * Default:     desaturated, slight vignette, feathered edges.
 * On hover:    slightly more colour + a cursor-tracking smoked-acrylic
 *              lens drifts over the surface — a translucent backdrop-filter
 *              circle with soft radial feathering that creates a liquid-glass
 *              / refractive haze as it moves.
 */
export function AtmosphericImage({
  src,
  alt,
  aspectRatio = "4/3",
  className = "",
  style = {},
  feather = true,
}: AtmosphericImageProps) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", aspectRatio, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* ── Image container ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          /* Feathered edge masking */
          maskImage: feather
            ? `linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%),
               linear-gradient(to right,  transparent 0%, black 4%, black 96%, transparent 100%)`
            : undefined,
          maskComposite: feather ? "intersect" : undefined,
          WebkitMaskImage: feather
            ? `linear-gradient(to bottom, transparent 0%, black 6%, black 92%, transparent 100%),
               linear-gradient(to right,  transparent 0%, black 4%, black 96%, transparent 100%)`
            : undefined,
          WebkitMaskComposite: feather ? "source-in" : undefined,
        }}
      >
        {/* Base image */}
        <ImageWithFallback
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: hovered
              ? "saturate(0.95) contrast(1.02)"
              : "saturate(0.82) contrast(0.98)",
            transition:
              "filter 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.85s ease",
            transform: hovered ? "scale(1.025)" : "scale(1.0)",
          }}
        />

        {/* Tonal warm-haze overlay — lifts on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "rgba(236, 234, 230, 0.01)"
              : "rgba(236, 234, 230, 0.07)",
            transition: "background 0.85s ease",
            pointerEvents: "none",
          }}
        />

        {/* Radial vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 40% 45%, transparent 32%, rgba(236, 234, 230, 0.26) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Inset edge shadow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 72px rgba(236, 234, 230, 0.32)",
            pointerEvents: "none",
          }}
        />

        {/* ───────────────────────────────────────────────────────
            Smoked-acrylic lens — follows cursor inside the image.
            Two-layer construction:
              1. Outer halo   — large, very soft warm glow
              2. Inner lens   — tighter, backdrop-filter frosted glass

            Both use CSS radial-gradient masks to feather their
            edges so there are no hard boundaries — the lens
            blends seamlessly into the image surface.
        ─────────────────────────────────────────────────────── */}

        {/* Layer 1 — diffuse warm halo */}
        <div
          style={{
            position: "absolute",
            width: "340px",
            height: "280px",
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, rgba(248, 246, 242, 0.22) 0%, rgba(236, 234, 230, 0.08) 48%, transparent 72%)",
            borderRadius: "50%",
            opacity: hovered ? 1 : 0,
            pointerEvents: "none",
            transition: [
              "opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "left 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "top 0.22s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            ].join(", "),
          }}
        />

        {/* Layer 2 — frosted glass core */}
        <div
          style={{
            position: "absolute",
            width: "190px",
            height: "155px",
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            transform: "translate(-50%, -50%)",
            backdropFilter: "blur(18px) saturate(1.08) brightness(1.03)",
            background:
              "radial-gradient(ellipse at center, rgba(250, 248, 245, 0.18) 0%, rgba(244, 242, 238, 0.07) 55%, transparent 100%)",
            borderRadius: "50%",
            /* Feather the glass edges so there's no hard disc boundary */
            maskImage:
              "radial-gradient(ellipse at center, black 0%, black 32%, transparent 68%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, black 32%, transparent 68%)",
            opacity: hovered ? 0.88 : 0,
            pointerEvents: "none",
            transition: [
              "opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "left 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "top 0.18s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            ].join(", "),
          }}
        />
      </div>
    </div>
  );
}
