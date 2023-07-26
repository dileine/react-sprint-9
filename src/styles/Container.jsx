import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0rem 6rem 0rem 6rem;
  padding: 2rem 0;
   background-color: ${({ theme }) => theme.colors.background};

`