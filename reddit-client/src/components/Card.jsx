import React from 'react';
import './Card.css';

const Card = ({ post }) => {
  console.log(post.data.url);

  return (
    <div className="individualCard">
      <h2 className="cardTitle">{post.data.title}</h2>
      {post.data.url.endsWith('.png') &&
        <div className="cardImage">
          <img src={post.data.url} alt="" className="cardImage"></img>
        </div>
      }

      {post.data.url.endsWith('.jpg') &&
        <div className="cardImage">
          <img src={post.data.url} alt="" className="cardImage"></img>
        </div>
      }

      {!post.data.url.endsWith('.jpg') && !post.data.url.endsWith('.png') && (
        <div className="cardText">
          <a href={post.data.url} className="cardLink">{post.data.url}</a>
        </div>
      )}
    </div>
  )
};

export default Card;
