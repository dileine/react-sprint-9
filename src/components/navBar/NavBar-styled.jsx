import styled from "styled-components";

export const Container = styled.div `
background-color: ${({ theme }) => theme.colors.background};
display: flex;
justify-content: center;
align-items: center;
border-style: solid;
border-color: ${({ theme }) => theme.colors.font};
border-width: 0.1rem 0;
ul {
  display: flex;
  list-style: none;
  text-transform: uppercase;
}
li {
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  padding: 0 1.75rem;

}
li:nth-child(1) {
  width: 8rem;
}
li:nth-child(2) {
  width: 10.5rem;
}
.link {
  display: inline;
  text-align: center;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.font};
}

.active .link {
  color: ${({ theme }) => theme.colors.primary};
}
`;
