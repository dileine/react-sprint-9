import React, {useEffect} from "react";
import { publish } from "../../app/utils/customEvents";
import { Container } from "../../styles/Container"

const Recipes = ()=>{
    useEffect(()=> publish("recipesClick"), []);
    return(<Container>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Minima, quibusdam deserunt quo molestiae vitae iusto 
    dolorum nemo dolores rem voluptatibus, harum modi vero. 
    Non eaque qui labore nostrum dolorum soluta.</p>
    </Container>)
}

export default Recipes;