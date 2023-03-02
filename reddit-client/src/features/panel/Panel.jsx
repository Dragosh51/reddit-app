import React, { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';
import './Panel.css';
import Card from '../../components/Card'

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getSubreddits } from "../../store/Action/apiActions";

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



const Panel = () => {
    const posts = useSelector(({ api }) => api.allPosts);
    // console.log(posts);
    // const [selectedPost, setSelectedPost] = useState(null);
    // // console.log(selectedPost);
    
    // const handlePostClick = async (postId) => {
    //   const response = await axios.get(`https://www.reddit.com/api/info.json?id=${postId}`);
    //   const post = response.data.data.children[0].data;
    //   setSelectedPost(post);
    // }
  
    return (
      <>
        <div className="postPanel">
          {posts !== undefined && posts.children.map((post, index) => (
            // <Card key={index} post={post} onClick={() => handlePostClick(post.id)} />
            <Card key={index} post={post} />
          ))}
        </div>
        {/* {selectedPost && (
          <div className="postContent">
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.selftext}</p>
          </div>
        )} */}
      </>
    );
  };

export default Panel;