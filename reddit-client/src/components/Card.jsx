import React from 'react';
import './Card.css';
import commentsLogo from '../assets/commentsLogo.png';
import arrowUp from '../assets/arrowUp.png';
import shareLogo from '../assets/shareLogo.png';
import goToLinkButton from '../assets/goToLink.webp';

const Card = ({ post }) => {
  // console.log(post.data.url);

  

  return (
    <div className="individualCard">
      <h2 className="cardTitle">{post.data.title}</h2>
      {post.data.url.endsWith('.png') &&
        <div className="cardImage">
          <img src={post.data.url} alt="" className="image"></img>
        </div>
      }

      {post.data.url.endsWith('.jpg') &&
        <div className="cardImage">
          <img src={post.data.url} alt="" className="image"></img>
        </div>
      }

      {!post.data.url.endsWith('.jpg') && !post.data.url.endsWith('.png') && (
        <div className="cardText">
          <a href={post.data.url} className="cardLink"> Go to link
            <img src={goToLinkButton} className="linkLogo"></img>
          </a>
        </div>
      )}

      <div className="media">
        <button className="commentsButton" type="button">
          <img className="commentsImage" src={commentsLogo}></img>
        </button>

        <button className="likeButton">
          <img className="likeImage" src={arrowUp}></img>
        </button>

        <button className="dislikeButton">
          <img className="dislikeImage" src={arrowUp}></img>
        </button>

        <button className="shareButton">
          <img className="shareImage" src={shareLogo}></img>
        </button>
      </div>
    </div>
  )
};

export default Card;
