import React, { useEffect } from "react";
import { publish } from "../../app/utils/customEvents";
import { Container } from "../../styles/Container";
import { WelcomeText } from "./Home-styled";
import { NavLink } from "react-router-dom";

const Home = () => {
    useEffect(() => publish("homeClick"), []);
        return(<Container>
          <h1>Welcome</h1>
          <WelcomeText>
            <p>
            Discover a world of delicious recipes that will tantalize your taste buds and impress your loved ones. 
            Whether you're an experienced chef or a cooking enthusiast, our vast collection of recipes has something to offer for everyone.
            </p>

            <p> 
            Search for recipes by name or ingredients, and explore a diverse range of culinary delights. 
            From mouthwatering desserts to hearty main courses, our app has it all. Get started by entering your desired recipe name or ingredient in the 
            search bar above and hit the corresponding button to find your perfect recipe match. 
            You'll be amazed by the variety and creativity of dishes you can create right in your own kitchen.
            </p>

            <p>
            For those looking to whip up a quick meal with whatever ingredients you have on hand, simply search by ingredient to find the perfect recipe to suit your pantry.
            Join our community of food lovers and share your culinary masterpieces with others. 
            You can also save your favorite recipes for easy access whenever you need them.
           </p>

           <p>
            Cooking has never been more enjoyable, so let's get started on this delightful culinary adventure together. 
          </p>
          </WelcomeText>
          <NavLink to="/Recipes"> 
            <button >Let's cook!</button>
            </NavLink>
            </Container>)
}

export default Home;

