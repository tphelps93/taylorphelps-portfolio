import type { CSSProperties } from "styled-components";

export const aboutStyles: Record<
  | "aboutContainer"
  | "inner"
  | "header"
  | "title"
  | "accent"
  | "content"
  | "leftColumn"
  | "headline"
  | "paragraph"
  | "actions"
  | "primaryButton"
  | "secondaryButton"
  | "rightColumn"
  | "image",
  CSSProperties
> = {
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    color: "var(--text-color)",
  },
  inner: {
    width: "100%",
    maxWidth: "1300px",
    display: "flex",
    flexDirection: "column",
    gap: "48px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
    lineHeight: 1.02,
    margin: 0,
  },
  accent: {
    color: "var(--active-color)",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "32px",
    alignItems: "center",
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  headline: {
    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
    margin: 0,
    lineHeight: 1.1,
  },
  paragraph: {
    margin: 0,
    color: "var(--text-color)",
    opacity: 0.9,
    lineHeight: 1.75,
  },
  actions: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--active-color)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    minWidth: "170px",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px 26px",
    border: "1px solid var(--active-color)",
    color: "var(--active-color)",
    textDecoration: "none",
    fontWeight: 600,
    minWidth: "170px",
  },
  rightColumn: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    minHeight: "420px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
  },
};
