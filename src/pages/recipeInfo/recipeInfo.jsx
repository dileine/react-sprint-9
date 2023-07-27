import React, { useEffect, useParams } from "react";
import { publish } from "../../app/utils/customEvents";
import { Container } from "../../styles/Container";
import { NavLink } from "react-router-dom";
import RecipeDetails from "../../components/recipeDetails/RecipeDetails";

const RecipeInfo = () =>{
    const { recipeId } = useParams();
    useEffect(() => publish("recipeInfoClick"), []);
    return(<Container>
        <RecipeDetails id={recipeId}/>
         <NavLink to="/Recipes"> 
            <button >Go back to recipes</button>
        </NavLink>
    </Container>)
}

export default RecipeInfo;