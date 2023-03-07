import React, { useEffect, useState } from "react";
import './SearchBar.css'

const SearchBar = ({searchSubreddits, setResults}) => {
    // console.log(searchSubreddits)

    const [search, setSearch] = useState('')
    // console.log(search)

    useEffect(() => {
        let thisSearch = []
        if (searchSubreddits !== undefined) {
            if(search === '') {
                thisSearch = searchSubreddits.children
            } else {
                thisSearch = searchSubreddits.children.filter((child) => child.data.title.toLowerCase().includes(search.toLowerCase()));
            }
            setResults(thisSearch)
        }
        
    }, [search, searchSubreddits])

    return (
        <div className="inputContainer">
            <input className="searchInput" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}>
            </input>
        </div>
    )
};

export default SearchBar;