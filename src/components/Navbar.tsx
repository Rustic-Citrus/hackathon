import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <h2>4lgorithm</h2>
            <Link to="/"><h4>Catalogue</h4></Link>
            <Link to="/Matrix"><h4>Matrix</h4></Link>
        </nav>
    )
}