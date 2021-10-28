import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    NavMenu,
} from "./styling";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/home">
                SeaLife at a Glance
            </NavLogo>
            <NavMenu>
                <NavLink to="/home" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;