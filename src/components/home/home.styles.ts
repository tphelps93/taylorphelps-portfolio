import type { CSSProperties } from "styled-components";

export const homeStyles: Record<'homeContainer' | 'title', CSSProperties> = {
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '80px',
        backgroundColor: '#1B1815',
        height: '100vh'
    },
    title: {
        color: 'red'
    }
}