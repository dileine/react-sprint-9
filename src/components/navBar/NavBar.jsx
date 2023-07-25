import React, {useReducer} from "react";
import NavLink from "../navLink/NavLink"
import { HandleClick } from "../../app/utils/HandleClick";
import { Container } from "./NavBar-styled";

const NavBar = () => {

    const [state, dispatch] = useReducer(HandleClick, { home: false, recipes: false });
    const { home, recipes } = state;

    
    return(<Container>
    <ul>
        <li
          onClick={() => dispatch({type: "homeClick"})}
          className={home ? "active" : ""}>
          <NavLink className="link" to="">Home</NavLink>
        </li>
        <li
          onClick={() => dispatch({type: "recipesClick"})}
          className={recipes ? "active" : ""}>
          <NavLink className="link" to="/recipes">Recipes</NavLink>
        </li>
      </ul>
    </Container>
   )
}


export default NavBar;