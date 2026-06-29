import type { CSSProperties } from "styled-components";

export const projectsStyles: Record<'projectsContainer' | 'title', CSSProperties> = {
    projectsContainer: {
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