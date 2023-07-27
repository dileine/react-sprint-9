import React from "react";
import useApiData from "../../app/hooks/useApiData";
import SearchForm from "../searchForm/SearchForm";
import RecipeCard from "../recipeCard/RecipeCard";
import NavLink from "../navLink/NavLink"


const RecipeList = () => {
   
    const { 
        recipeData, 
        loading, 
        error, 
        searchRecipeByName, 
        searchRecipeByIngredient 
    } = useApiData();

    const handleSearchByName = (searchItem) => {
      searchRecipeByName(searchItem);
    };
  
    const handleSearchByIngredient = (searchItem) => {
      searchRecipeByIngredient(searchItem);
    };

    const recipesArray = Object.values(recipeData);
   
    return(<div>
        <SearchForm
        onSearchByName={handleSearchByName}
        onSearchByIngredient={handleSearchByIngredient}
        />
        {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
        {recipesArray.map((recipe) => (
          <NavLink to={`/recipeDetails/${recipe.id}`} key={recipe.id}>
            More details...
          <RecipeCard recipe={recipe} />
        </NavLink>
        ))}
      </div>
      )}
    </div>)
}

export default RecipeList;
