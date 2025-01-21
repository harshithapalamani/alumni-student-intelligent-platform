import React from "react";
import "../styles/Header.css";
import bgwomandef from "../assets/bgwomandef.jpg";


const Header = () => {
    return (
        <header className="header">
            <img src={bgwomandef} alt="bgwoman" className="header-bg" />
            <div className="header-content">
                <h1 >Connecting past, present, and future!</h1>
                <h3>Where alumni and students reconnect!</h3>
                <button>Start Connecting</button>
            </div>
        </header>
    )
}


export default Header;
