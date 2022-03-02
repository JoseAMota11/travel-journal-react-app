import React from "react";
import world from "../Image/world.svg";

export default function Navbar(){
    return (
        <nav>
            <img src={world} alt="A world logo" />
            <p>my travel journal.</p>
        </nav>
    );
}