import type { CSSProperties } from "styled-components";

export const aboutStyles: Record<"aboutContainer", CSSProperties> = {
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "120px 30px 60px",
    color: "var(--text-color)",
  },
};