import React, {useEffect} from "react";
import { publish } from "../../app/utils/customEvents";
import { Container } from "../../styles/Container"
import RecipeList from "../../components/recipeList/RecipeList";

const Recipes = ()=>{
    useEffect(()=> publish("recipesClick"), []);
    return(<Container>
        <RecipeList/>
    </Container>)
}

export default Recipes;