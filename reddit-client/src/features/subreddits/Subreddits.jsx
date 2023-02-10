import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Subreddits.css';

const Subreddits = () => {
    // un array de obiecte in care sa am numele subdredditului (vreo 2-3), fa si map-ul aici, sa le pun una sub alta
    return (
        <div className="subredditBox">
            <SearchBar />
        </div>
    )
}

export default Subreddits;