import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
   background-color: ${({ theme }) => theme.colors.background};
  div:nth-of-type(1) {
    width: 100%;
    display: block;
    text-align: center;
  }
  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin-left: -18rem;
    margin-right: 2rem;
  }
  img {
    max-height: 15rem;
    min-height: 5rem;
    max-width: 60%;
    height: auto;
  }
  button {
    width: 8rem;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.font};
    border: 0.1rem solid transparent;
    border-radius: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;