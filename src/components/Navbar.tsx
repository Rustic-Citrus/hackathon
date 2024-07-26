import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav id="menu">
                <li><h2>Lighthouse</h2></li>
                <li><Link to="/"><h4>Catalogue</h4></Link></li>
                <li><Link to="/Matrix"><h4>Matrix</h4></Link></li>
        </nav>
    )
}