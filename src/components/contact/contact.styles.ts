import type { CSSProperties } from "styled-components";

export const contactStyles: Record<"contactContainer", CSSProperties> = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--bg-color)",
    height: "100vh",
    paddingTop: "100px",
    color: "var(--text-color)",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
};
