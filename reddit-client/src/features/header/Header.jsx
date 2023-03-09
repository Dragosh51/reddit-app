import React from "react";
import './Header.css';
import settingsLogo from '../../assets/settingsLogo.png';
import { useState } from "react";
import searchLogo from '../../assets/searchLogo.png';
import Subreddits from "../Subreddits/Subreddits";
import { handleToggle } from "../../store/Action/otherActions";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [showSubreddits, setShowSubreddits] = useState(false);
  const dispatch = useDispatch();
  const showSubreddits = useSelector(({ other }) => other.openSidebar);

  const toggleSubreddits = () => {
    // setShowSubreddits(!showSubreddits);
    dispatch(handleToggle(!showSubreddits))
  };

  return (
    <header>
      <div className="logo">
        <p>
          Mini<span>Reddit</span>
        </p>
      </div>
      <div className="searchDiv">
        <button className="searchButton" onClick={() => toggleSubreddits()}>
          <img className="searchImage" src={searchLogo} alt="Search"></img>
        </button>
      </div>
      <div className="settingsDiv">
        <button
          className="settings"
          type="button"
          aria-label="Settings"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img
            className="settingsLogo"
            src={settingsLogo}
            alt="Settings"
          ></img>
        </button>
        {showDropdown ? (
          <div className="dropdown">
            <ul>
              <li>Account</li>
              <li>Options</li>
              <li>Sign in</li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;