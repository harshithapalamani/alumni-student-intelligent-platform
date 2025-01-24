import React from "react";
import "../styles/Header.css";
import bgwomandef from "../assets/bgwomandef.jpg";
import { useAuthentication } from "../auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { isAuthorized } = useAuthentication();
    const navigate = useNavigate();  // Corrected this line

    const handleStartConnecting = () => {
        if (isAuthorized) {
            navigate('/dashboard'); // Use navigate for redirection
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="header">
            <img src={bgwomandef} alt="bgwoman" className="header-bg" />
            <div className="header-content">
                <h1>Connecting past, present, and future!</h1>
                <h3>Where alumni and students reconnect!</h3>
                <button onClick={handleStartConnecting}>Start Connecting</button>
            </div>
        </header>
    );
};

export default Header;
