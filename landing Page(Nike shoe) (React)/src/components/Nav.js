import React from "react";
import '../App.css';
export default function Nav(porps){

    return(
        <div className="navBar">
            <div className="logo_container">
                <img src={porps.logo}></img>
            </div>
            <div className="navLinks">
                <ul>
                    <li>Man</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Customize</li>
                    <li>Sales</li>
                    <li>SNKRS</li>
                </ul>
            </div>
            <div>=</div>
        </div>
    )
}