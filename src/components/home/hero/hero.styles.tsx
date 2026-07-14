import type { CSSProperties } from "styled-components";

export const heroStyles: Record<
  | "heroContainer"
  | "eyebrow"
  | "name"
  | "blurb"
  | "ctaRow"
  | "primaryButton"
  | "secondaryButton"
  | "statsCard"
  | "highlightCard",
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
    color: "var(--active-color)",
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
    color: "var(--hero-contact-btn-txt-color)",
    textDecoration: "none",
    fontWeight: "600",
    backgroundColor: "var(--hero-contact-btn-bg-color)",
  },
  statsCard: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "14px 16px",
    borderRadius: "16px",
    backgroundColor: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    minWidth: "150px",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  highlightCard: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.2fr 0.5fr 0.8fr",
    gap: "16px",
    padding: "28px",
    borderRadius: "24px",
    background: "var(--header-bg-color)",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 18px 45px rgba(4, 15, 15, 0.12)",
    color: "#F5F1EAEB"
  }
};