import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
    <ul>
        <li><Link to={"/main"}>Color Wheel</Link></li>
        <li><Link to={"/saved"}>Saved Images</Link></li>
    </ul>
);

export default Nav;