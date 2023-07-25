import { styled } from "styled-components";

export const ContainerInput = styled.div `
display: flex;
background-color: ${({ theme }) => theme.colors.background};
width: 30%;
padding: 20px;
border: 0.1rem solid ${({ theme }) => theme.colors.primary};
border-radius: 0.5rem;

    input{
        border: none;
        outline: none;
    }

`