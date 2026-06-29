import type { CSSProperties } from "styled-components";

export const aboutStyles: Record<'aboutContainer' | 'title', CSSProperties> = {
    aboutContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '80px',
        backgroundColor: '#fff',
        height: '100vh'
    },
    title: {
        color: 'red'
    }
}