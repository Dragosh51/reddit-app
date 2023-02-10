import React from "react";
import './Panel.css';
import Card from '../../components/Card'

const Panel = () => {
    const api = [
        {
            title: "post 1",
            body: "image 1",
            description: "If you're a person who creates a whole new character and a whole new world just to help your buddy get into Valheim"
        },
        {
            title: "post 2",
            body: "image 2",
            description: "If you're a person who creates a whole new character and a whole new world just to help your buddy get into Valheim"
        },
        {
            title: "post 3",
            body: "image 3",
            description: "If you're a person who creates a whole new character and a whole new world just to help your buddy get into Valheim"
        },

    ];
    return (
        <>
        <div className="postPanel">
            {api.map((obj, i)=>
            <Card key={i} obj={obj}/>
                
            )}
        </div>
        </>
    )
};

export default Panel;