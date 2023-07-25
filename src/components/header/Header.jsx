import React from "react";
import logo  from "../../assets/img/Logo.png";
import { Container } from "./Header-styled";

const Header = () => {
return(
    <Container>
    <img src={logo} alt="logo Ca la Peque"></img>
    </Container>
)

}

export default Header;