import { NavLink } from "react-router-dom";
import styled, { type CSSProperties } from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--text-color);

  &:hover {
    color: var(--hover-color);
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: var(--text-color);
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: background-color 1s ease;
  }

  &:hover {
    color: var(--hover-color);
  }

  &.active {
    color: var(--active-color);
  }

  &:hover::after,
  &.active::after {
    background-color: var(--hover-color);
  }
`;

export const StyledThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    background: var(--hover-color);
  }
`;

export const StyledContactButton = styled(NavLink)`
  color: #f5f1eaeb;
  padding: 10px;
  width: 100px;
  cursor: pointer;
  background: #d98324;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(217, 131, 36, 0.2);

  &:hover {
    transform: translateY(-2px);
  }
`;

export const headerStyles: Record<
  | "headerRoot"
  | "titleDiv"
  | "titleLogo"
  | "titleName"
  | "subtitle"
  | "nav"
  | "navLinks"
  | "headerRight",
  CSSProperties
> = {
  headerRoot: {
    display: "flex",
    position: "fixed",
    left: 0,
    right: 0,
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "30px",
    paddingRight: "50px",
    height: "60px",
    zIndex: 50,
    borderBottom: "1px solid transparent",
    transition: "background-color 0.3s ease, border-bottom-color 0.2s ease",
    color: "var(--text-color)",
  },
  titleDiv: {
    display: "flex",
    alignItems: "center",
  },
  titleLogo: {
    padding: "10px",
    background: "#171738",
    color: "#F5F1EAEB",
    border: "2px solid var(--header-logo-outline-color)",
    borderRadius: "15px",
  },
  titleName: {
    padding: "5px",
  },
  subtitle: {
    paddingLeft: "10px",
    paddingTop: "4px",
    fontSize: "12px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100vw",
  },
  navLinks: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    gap: "30px",
  },
  headerRight: {
    display: "flex",
    gap: "5px",
  },
};
