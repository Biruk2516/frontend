import React from "react";
import eTech from '/eTech.png';
import { Link } from "react-router-dom";

export default function ServicePage()
{
    return(
        <div>
            <header>
                <Link to='/'><img src={eTech} alt="" title="Homa Page" /></Link>
                Welcome to eTech business directory website
            </header>
            <div>
                profile information
            </div>
            <footer>
                {new Date().getFullYear()}
            </footer>
        </div>
    );
}