export const HandleClick = (state, { type }) => {
  switch (type) {
    case "homeClick":
      return { home: true, recipes: false, recipeInfo: false };
    case "recipesClick":
      return { home: false, recipes: true, recipeInfo: false };
    case "recipeInfoClick":
      return { home: false, recipes: false, recipeInfo: true };
    case "none":
      return { home: false, recipes: false, recipeInfo: false };
    default:
      return state;
  }
};
