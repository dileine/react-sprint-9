import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

const fetchRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(
      `${ENDPOINTS.baseURL}/recipes/${recipeId}/information?apiKey=${ENDPOINTS.apiKey}`
    );
    return response.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    return null;
  }
};

const searchByName = async (recipeName) => {
  try {
    const response = await axios.get(
      `${ENDPOINTS.baseURL}/recipes/complexSearch?query=${recipeName}&apiKey=${ENDPOINTS.apiKey}`
    );
    return response.data || [];
  } catch (error) {
    console.error("Error searching recipes by name:", error);
    return [];
  }
};

const searchByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(
      `${ENDPOINTS.baseURL}/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${ENDPOINTS.apiKey}`
    );
    return response.data || [];
  } catch (error) {
    console.error("Error searching recipes by name:", error);
    return [];
  }
};

export { fetchRecipeById, searchByName, searchByIngredient };
