import type { CSSProperties } from "styled-components";

export const projectsSummaryStyles: Record<
  | "projectsSummaryContainer"
  | "sectionTitle"
  | "inner"
  | "projectCard"
  | "projectImage"
  | "projectBody"
  | "projectTitle"
  | "projectDescription"
  | "ctaRow"
  | "ctaButton",
  CSSProperties
> = {
  projectsSummaryContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--bg-color)",
    minHeight: "100vh",
    paddingTop: "100px",
    color: "var(--text-color)",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  sectionTitle: {
    margin: "0 0 24px",
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(500px, 280px))",
    justifyContent: "center",
    columnGap: "48px",
    rowGap: "36px",
    width: "100%",
  },
  projectCard: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid color-mix(in srgb, var(--text-color) 16%, transparent)",
    borderRadius: "5px",
    backgroundColor: "color-mix(in srgb, var(--bg-color) 92%, #fff 8%)",
  },
  projectImage: {
    width: "100%",
    aspectRatio: "1 / 1",
    height: "auto",
    objectFit: "cover",
    display: "block",
  },
  projectBody: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "16px",
  },
  projectTitle: {
    margin: 0,
    fontSize: "1.1rem",
    lineHeight: 1.2,
  },
  projectDescription: {
    margin: 0,
    lineHeight: 1.6,
    opacity: 0.86,
  },
  ctaRow: {
    display: "flex",
    justifyContent: "center",
    marginTop: "36px",
    marginBottom: "24px",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: 600,
    backgroundColor: "var(--active-color)",
    color: "#fff",
    boxShadow: "0 10px 25px rgba(217, 131, 36, 0.2)",
  },
};
