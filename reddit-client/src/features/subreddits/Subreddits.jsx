import React, { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Subreddits.css';
import redditLogo from "../../assets/reddit-logo.png"; 

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../../store/Action/apiActions";

const api = [
    { title: "post 1" },
    { title: "post 2" },
    { title: "post 3" },
];

const Subreddits = () => {
    const dispatch = useDispatch();
    const allSubreddits = useSelector(({ api }) => api.allSubreddits);
    console.log(allSubreddits);
    useEffect(() => {
        dispatch(getSubreddits())
    }, [dispatch])

    return (
            <div className="subredditContainer2">
            <SearchBar />
            <div className="subredditBox">
                
                {allSubreddits !== undefined &&
                    allSubreddits.children.map((child, index) =>
                    <button key={index}>
                        <img className="subreddit-logo" src={child.data.icon_img === "" ? redditLogo : child.data.icon_img} alt=""></img>
                        <h3>{child.data.title.slice(0, 20)}..</h3>
                    </button>
                    )}
            </div>
            </div>
    )
}

export default Subreddits;