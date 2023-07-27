  import React from "react";
  import useApiData from "../../app/hooks/useApiData";
  import SearchForm from "../searchForm/SearchForm";
  import RecipeCard from "../recipeCard/RecipeCard";

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
     
      return(<div>
          <h2>You can cook all of these recipes:</h2>
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
          {recipeData.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        )}
      </div>)
  }

  export default RecipeList;