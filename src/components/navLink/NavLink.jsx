import { Link } from "react-router-dom";

const NavLink = ({to, ...props}) => 

<Link {...props} to ={process.env.PUBLIC_URL + to}/>


export default NavLink;
