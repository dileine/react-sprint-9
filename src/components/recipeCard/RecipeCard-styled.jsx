import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RecipeTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
`;
