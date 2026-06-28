import { headerStyles, StyledLink, StyledNavLink } from "./header.styles";

export const Header = () => {
  return (
    <div style={headerStyles.header}> 
      <nav style={headerStyles.nav}>
        <StyledLink href='#'> <h2> Taylor Phelps </h2> </StyledLink>
        <div style={headerStyles.navLinks}>
          <StyledNavLink href='#'>About</StyledNavLink>
          <StyledNavLink href='#'>Projects</StyledNavLink>
          <button style={headerStyles.contactButton}>
            <a style={headerStyles.contactLink} href='#'>Contact</a>
          </button>
        </div>
      </nav>
    </div>
  )
}