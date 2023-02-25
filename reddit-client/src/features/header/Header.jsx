import React from "react";
import './Header.css';
import settingsLogo from '../../assets/settingsLogo.png'

const Header = () => {

    return (
        <header>
            <div className="logo">
                <p>
                    Mini<span>Reddit</span>
                </p>
            </div>
            <div className="settingsDiv">
               <button className="settings" type="button" aria-label="Settings">
                    <img className="settingsLogo"src={settingsLogo}></img>
                </button>
            </div>
        </header>
    )
};


export default Header;