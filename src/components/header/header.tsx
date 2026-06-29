import { useEffect, useState } from "react";
import { headerStyles, StyledLink, StyledNavLink } from "./header.styles";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  return (
    <div style={{ ...headerStyles.header, backgroundColor: scrolled ? '#ffffff' : 'transparent', transition: 'background-color 0.3s ease', backdropFilter: 'blur(10px)' }}> 
      <nav style={headerStyles.nav}>
        <StyledLink style={{ color: scrolled ? '#333' : 'inherit'}} href='#'> <h2> Taylor Phelps </h2> </StyledLink>
        <div style={headerStyles.navLinks}>
          <StyledNavLink style={{ color: scrolled ? '#333' : '#ffffffe1'}} href='#'>About</StyledNavLink>
          <StyledNavLink style={{ color: scrolled ? '#333' : '#ffffffe1'}} href='#'>Projects</StyledNavLink>
          <StyledNavLink style={{ color: scrolled ? '#333' : '#ffffffe1'}} href='#'>Contact</StyledNavLink>
        </div>
      </nav>
    </div>
  )
}