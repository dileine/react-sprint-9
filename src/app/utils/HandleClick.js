export const HandleClick = (state, { type }) => {
  switch (type) {
    case "homeClick":
      return { home: true, recipes: false };
    case "recipesClick":
      return { home: false, recipes: true };
    case "none":
      return { home: false, recipes: false };
    default:
      return state;
  }
};
