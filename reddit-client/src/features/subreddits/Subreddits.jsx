import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Subreddits.css';
import redditLogo from "../../assets/reddit-logo.png"; 

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits, getSubredditPosts } from "../../store/Action/apiActions";

const api = [
    { title: "post 1" },
    { title: "post 2" },
    { title: "post 3" },
];

const Subreddits = () => {
    const dispatch = useDispatch();
    const allSubreddits = useSelector(({ api }) => api.allSubreddits);
    // console.log(allSubreddits);
    const [results, setResults] = useState();
    console.log(results);

    useEffect(() => {
        dispatch(getSubreddits())
    }, [dispatch])

    useEffect(() => {
        if(allSubreddits !== undefined) {
        dispatch(getSubredditPosts(allSubreddits.children[0].data))
        }
    }, [dispatch, allSubreddits])

    const getAllPosts = (child) => {
        // console.log('child', child);
        dispatch(getSubredditPosts(child))
    };


    return (
            <div className="subredditContainer2">
            <SearchBar searchSubreddits={allSubreddits} setResults={setResults}/>
            <div className="subredditBox">
                
                {results !== undefined &&
                    results.map((child, index) =>
                    <button key={index} onClick={() => getAllPosts(child.data) }>
                        <img className="subreddit-logo" src={child.data.icon_img === "" ? redditLogo : child.data.icon_img} alt=""></img>
                        <h3>{child.data.title.slice(0, 20)}..</h3>
                    </button>
                    )}
            </div>
            </div>
    )
}

export default Subreddits;