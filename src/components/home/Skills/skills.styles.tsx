import type { CSSProperties } from "react";

const ACCENT = "#4682B4"; // steelblue
const ACCENT_SOFT = "rgba(70, 130, 180, 0.16)";
const ACCENT_BORDER = "rgba(70, 130, 180, 0.4)";

export const skillsStyles: Record<string, CSSProperties> = {
  skillsContainer: {
    width: "100%",
    padding: "96px 24px",
    backgroundColor: "var(--skills-panel-bg-color)",
    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
    color: "var(--text-color)",
  },
  inner: {
    maxWidth: 960,
    margin: "0 auto",
  },
  eyebrow: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 20,
    letterSpacing: "0.08em",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 600,
    marginBottom: 56,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "40px 32px",
  },
  categoryBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  categoryLabel: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 15,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    fontSize: 13,
    padding: "6px 12px",
    borderRadius: 6,
    border: `1px solid ${ACCENT_BORDER}`,
    backgroundColor: ACCENT_SOFT,
    cursor: "default",
    transition: "background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease",
  },
};