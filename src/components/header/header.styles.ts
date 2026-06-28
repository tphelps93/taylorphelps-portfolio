import styled, { type CSSProperties } from 'styled-components';

const hoveredColor = '#0070f3';

export const StyledLink = styled.a`
        text-decoration: none;
        color: inherit;
        
        &:hover {
            color: ${hoveredColor};
        }
`;

export const StyledNavLink = styled.a`
        text-decoration: none;
        color: #ffffffe1;
        
        &:hover {
            color: ${hoveredColor};
        }
`;

export const headerStyles: Record<'header' | 'nav' | 'navLinks' | 'contactButton' | 'contactLink', CSSProperties> = {
    header: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
        right: 0,
        padding: '40px',
        color: 'white',
        height: '60px',
        backgroundColor: '#333',
        zIndex: 50,
        borderBottom: '1px solid tranparent',
    },
    nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    navLinks: {
        display: 'flex',
        gap: '30px'
    },
    contactButton: {
        background: 'none',
        padding: '5px',
        color: 'red'
    },
    contactLink: {
        color: '#ffffffe1',
        textDecoration: 'none'
    }
}