import type { CSSProperties } from "styled-components";

export const heroStyles: Record<
  | "heroContainer"
  | "eyebrow"
  | "name"
  | "blurb"
  | "ctaRow"
  | "primaryButton"
  | "secondaryButton"
  | "statsRow"
  | "statsCard"
  | "highlightCard"
  | "panelLabel"
  | "list"
  | "panelFooter",
  CSSProperties
> = {
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "120px 30px 60px",
    color: "var(--text-color)",
  },
  eyebrow: {
    fontSize: "0.95rem",
    letterSpacing: "0.24em",
    textTransform: "uppercase",
    margin: "0 0 8px",
    color: "var(--hover-color)",
    fontWeight: "600",
  },
  name: {
    fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
    lineHeight: "1.1",
    margin: "0 0 12px",
    maxWidth: "720px",
  },
  blurb: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    margin: "0",
    maxWidth: "640px",
    color: "var(--text-color)",
    opacity: 0.9,
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "18px",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    backgroundColor: "var(--active-color)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(217, 131, 36, 0.2)",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 18px",
    border: "1px solid var(--text-color)",
    color: "var(--text-color)",
    textDecoration: "none",
    fontWeight: "600",
    backgroundColor: "transparent",
  },
  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "24px",
  },
  statsCard: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "14px 16px",
    borderRadius: "16px",
    backgroundColor: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    minWidth: "150px",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  highlightCard: {
    padding: "28px",
    borderRadius: "24px",
    background:
      "linear-gradient(145deg, rgba(70,130,180,0.22), rgba(217,131,36,0.16))",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 18px 45px rgba(4, 15, 15, 0.12)",
  },
  panelLabel: {
    margin: "0 0 16px",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "var(--hover-color)",
    fontWeight: "700",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0 0 20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    lineHeight: "1.6",
  },
  panelFooter: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontSize: "0.95rem",
    opacity: 0.8,
  },
};