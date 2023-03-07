import React from "react";
import './Header.css';
import settingsLogo from '../../assets/settingsLogo.png'
import { useState } from "react";


const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <div className="logo">
                <p>
                    Mini<span>Reddit</span>
                </p>
            </div>
            <div className="settingsDiv">
                <button className="settings" type="button" aria-label="Settings" onClick={() => setShowDropdown(!showDropdown)}>
                    <img className="settingsLogo" src={settingsLogo} alt="Settings"></img>
                </button>
                {showDropdown ? (
                    <div className="dropdown">
                    <ul >
                        <li>Account</li>
                        <li>Options</li>
                        <li>Sign in</li>
                    </ul>
                    </div>
                ) : null}
            </div>
        </header>
    )

};


export default Header;