import { useEffect, useState } from "react";
import {
  headerStyles,
  StyledContactButton,
  StyledLink,
  StyledNavLink,
  StyledThemeToggle,
} from "./header.styles";
import { useTheme } from "../common/Theme/ThemeContext";
import { Theme } from "../common/Theme/theme";
import sun from "../../assets/sun.png";
import crescentMoon from "../../assets/crescent-moon.png";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        ...headerStyles.headerRoot,
        backgroundColor: scrolled ? "var(--header-bg-color)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : undefined, 
      }}
    >
      <nav style={headerStyles.nav}>
        <div style={headerStyles.titleDiv}>
          <h3 style={headerStyles.titleLogo}> TP </h3>{" "}
          <StyledLink to="/">
            {" "}
            <h3 style={headerStyles.titleName}> Taylor Phelps </h3>{" "}
          </StyledLink>
          <p style={headerStyles.subtitle}> Software Development Engineer </p>
        </div>
        <div style={headerStyles.navLinks}>
          <StyledNavLink to="/"> Home </StyledNavLink>
          <StyledNavLink to="/about"> About </StyledNavLink>
          <StyledNavLink to="/projects"> Projects </StyledNavLink>
        </div>
        <div style={headerStyles.headerRight}>
          <StyledThemeToggle onClick={toggleTheme}>
            {theme === Theme.Dark ? (
              <img src={sun} alt="Light mode" width={20} height={20} />
            ) : (
              <img src={crescentMoon} alt="Dark mode" width={20} height={20} />
            )}
          </StyledThemeToggle>
          <StyledContactButton to="/contact"> Contact → </StyledContactButton>
        </div>
      </nav>
    </div>
  );
};
