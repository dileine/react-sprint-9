import { useState } from "react";
import { fetchRecipeById, searchByName, searchByIngredient } from "../utils/api";

function useApiData() {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (searchFunction, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchFunction(...args);
      setRecipeData(data);
    } catch (error) {
      setError(`Error searching recipes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getRecipeById = async (recipeId) => {
    if (recipeId) {
      searchRecipes(fetchRecipeById, recipeId);
    } else {
      setRecipeData([]);
    }
  };

  const searchRecipeByName = async (recipeName) => {
    await searchRecipes(searchByName, recipeName);
  };

  const searchRecipeByIngredient = async (ingredient) => {
    await searchRecipes(searchByIngredient, ingredient);
  };

  return {
    recipeData,
    loading,
    error,
    getRecipeById,
    searchRecipeByName,
    searchRecipeByIngredient,
  };
}

export default useApiData;
