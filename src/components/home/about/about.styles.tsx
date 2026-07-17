import type { CSSProperties } from "styled-components";

export const aboutStyles: Record<"aboutContainer", CSSProperties> = {
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "120px 30px 60px",
    color: "var(--text-color)",
    backgroundColor: "rgba(70, 130, 180, 0.16)",
    clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
  }
};