// recipeDetails.jsx
import React, { useEffect } from "react";
import { Container } from "../../styles/Container";
import useApiData from "../../app/hooks/useApiData";

const RecipeDetails = ({ id }) => {
  const { recipeData, loading, error, getRecipeById } = useApiData();

  useEffect(() => {
    if (id) {
      getRecipeById(id);
    }
  }, [getRecipeById, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!id || !recipeData || Object.keys(recipeData).length === 0) {
    return <p>No recipe details found.</p>;
  }

  console.log("Recipe Data:", recipeData);

  return (
    <Container>
      <h2>Recipe Details</h2>
      <h3>{recipeData.title}</h3>
      <h4>Ingredients:</h4>
      <ul>
        {recipeData.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <ol>
        {recipeData.analyzedInstructions[0]?.steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </ol>
    </Container>
  );
};

export default RecipeDetails;
