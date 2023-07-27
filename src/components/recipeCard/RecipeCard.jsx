import React from "react";
import { RecipeTitle, RecipeImage, RecipeCardContainer } from "./RecipeCard-styled";

const RecipeCard = ({ recipe }) => {
  return (
    <RecipeCardContainer>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImage
        src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`}
        alt={recipe.title}
      />
    </RecipeCardContainer>
  );
};

export default RecipeCard;
