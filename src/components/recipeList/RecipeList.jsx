  import React from "react";
  import useApiData from "../../app/hooks/useApiData";
  import SearchForm from "../searchForm/SearchForm";

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
          <ul>
            {recipeData.map((recipe, id) => (
              <li key={id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
              </li>
            ))}
          </ul>
        )}
      </div>)
  }

  export default RecipeList;