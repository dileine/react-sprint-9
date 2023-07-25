import React from "react";
import { ContainerInput } from "./InputIngredients-styled";
import { NavLink } from "react-router-dom";

const InputIngredients = () => {
    return(<>
    <ContainerInput>
        <label htmlFor="ingredients">
            What's on your fridge?
        <input 
        type="text" 
        placeholder="introduce el ingrediente principal"/>
        </label>
    </ContainerInput> 
    <NavLink to="/RecipeList">    
    <button>Let's cook</button>
    </NavLink>  
    </>     
    )
}

export default InputIngredients;