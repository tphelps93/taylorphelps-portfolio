import type { CSSProperties } from "styled-components";

export const projectsStyles: Record<"projectsContainer", CSSProperties> = {
  projectsContainer: {
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
