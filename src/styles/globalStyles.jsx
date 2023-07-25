import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  font-size: "62.5%";
}
body {
  font-family: "Handlee", cursiva;
  color:"#111";
  background-color: ${({ theme }) => theme.colors.background};
}

h1, h2 { 
    color: ${({ theme }) => theme.colors.primary};
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
  }
  button:hover {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;