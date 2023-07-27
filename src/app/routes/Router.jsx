import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Recipes from "../../pages/recipes/Recipes";
import RecipeInfo from "../../pages/recipeInfo/recipeInfo";
import Error from "../../pages/error/Error";
import Auth from "../../pages/Auth/Auth";




const Router = () => {
    return( <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/RecipeInfo" element={<RecipeInfo/>} />
        <Route path="/Auth" element={<Auth/>} />
        <Route path="*" element={<Error />} />
    </Routes>)
}

export default Router;