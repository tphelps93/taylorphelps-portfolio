import type { CSSProperties } from "styled-components";

export const contactStyles: Record<'contactContainer' | 'title', CSSProperties> = {
    contactContainer: {
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