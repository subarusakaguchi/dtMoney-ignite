import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    /* Forma alternativa usando grid */
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem; */
    margin-top: -8rem;

    div {
        width: 20rem;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-tittle);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background-red {
            background: var(--red);
            color: #FFFFFF;
        }

        &.highlight-background-green {
            background: var(--green);
            color: #FFFFFF;
        }
    }
`