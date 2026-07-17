import type { CSSProperties } from "styled-components";

export const homeStyles: Record<
  "homeContainer" | "sectionDivider" | "sectionDividerLine",
  CSSProperties
> = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  sectionDivider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "min(90%, 2000px)",
    margin: "0 auto 12px",
    gap: "12px",
  },
  sectionDividerLine: {
    flex: 1,
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, var(--active-color), transparent)",
    boxShadow: "0 0 12px rgba(217, 131, 36, 0.24)",
  },
};
