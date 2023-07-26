import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import Recipes from "../../pages/recipes/Recipes";
import Error from "../../pages/error/Error";

const Router = () => {
    return( <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home />} />
        <Route path="/Recipes" element={<Recipes/>}/>
        <Route path="*" element={<Error />} />
    </Routes>)
}

export default Router;