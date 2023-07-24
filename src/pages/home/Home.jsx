import React, { useEffect } from "react";
import { publish } from "../../app/utils/customEvents";
import { Container } from "../../styles/Container";
import InputIngredients from "../../components/inputIngredients/InputIngredients";

const Home = () => {
    useEffect(() => publish("homeClick"), []);
        return(<Container>
         
          <h2>Welcome</h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           <InputIngredients/>        
            </Container>)
}

export default Home;

