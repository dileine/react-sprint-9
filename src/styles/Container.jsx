import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
   background-color: ${({ theme }) => theme.colors.background};

`