import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { sampleData } from "./sampleData";
import "./articlepage.css";
import like from "./like.svg";
import unlike from "./unlike.svg";
import comment from "./comment.svg";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import LinkedinIcon from "./linkedin.svg";
import CommentImageWrite from "./addCommentImage.svg";

const DataProvider = React.createContext();

const Articleview = () => {
  //const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <DataProvider.Provider value={{ sampleData }}>
        <Articlebody />
      </DataProvider.Provider>
    </>
  );
};

const Articlebody = () => {
  return (
    <div className="article-body">
      <Likesection />
      <Mainarticle />
    </div>
  );
};

const Likesection = () => {
  const { sampleData } = useContext(DataProvider);
  const [liked, setLiked] = useState(false);
  const LikeHandler = () => {
    // like handler
    setLiked(!liked);
    /*
		if (liked) {
			// liked
		} else {
			// not liked
            
		}
        */
  };
  return (
    <div className="like-comment-holder">
      <div className="like-comment-box">
        <div className="like-box">
          <div className="like-image" onClick={LikeHandler}>
            <img
              src={liked ? like : unlike}
              alt="like"
              className="like-icon-img"
            />
          </div>
          <div className="like-counter">{sampleData.like.count}</div>
        </div>
        <div className="comment-box">
          <div className="comment-image">
            <img src={comment} alt="comment" className="comment-icon-img" />
          </div>
          <div className="comment-counter">{sampleData.comment.count}</div>
        </div>
      </div>
    </div>
  );
};

const Mainarticle = () => {
  return (
    <div className="main-article-body">
      <Author />
      <Title />
      <Articletext />
      <div className="comment-divider"></div>
      <Commentsection />
    </div>
  );
};

const Author = () => {
  const { sampleData } = useContext(DataProvider);
  return (
    <div className="about-author">
      <div className="author-face">
        <img
          src={sampleData.author.avatar}
          alt="face"
          className="author-avatar"
        />
      </div>
      <div className="author-name-div">
        <p className="author-name">{sampleData.author.name}</p>
        <p className="author-designation">{sampleData.author.designation}</p>
      </div>
      <div className="author-social-link">
        <a href={sampleData.author.socialLinks.facebook}>
          <img src={facebookIcon} alt="facebook" className="social-icons" />
        </a>
        <a href={sampleData.author.socialLinks.twitter}>
          <img
            src={twitterIcon}
            alt="facebooktwitter"
            className="social-icons"
          />
        </a>
        <a href={sampleData.author.socialLinks.linkedin}>
          <img src={LinkedinIcon} alt="linkedin" className="social-icons" />
        </a>
      </div>
    </div>
  );
};

const Title = () => {
  const { sampleData } = useContext(DataProvider);
  return <div className="article-title">{sampleData.heading}</div>;
};

const Articletext = () => {
  const { sampleData } = useContext(DataProvider);
  return (
    <div className="body-smallar">
      <div className="article-text-body">
        <div className="article-image-box">
          <img src={sampleData.image} alt="image1" className="article-image" />
        </div>
        <div className="article-text">
          {sampleData.body.map((body) => (
            <p className="article-bodyparts">
              {body}
              <br />
            </p>
          ))}
        </div>
      </div>
      <div className="other-articles">
        <p className="similar-article-head">Similar article</p>
        <div className="similar-card-section">
          {sampleData.similarArticle.map((article, index) => (
            <Cardsection key={index} {...article} />
          ))}
        </div>
        <p className="similar-article-head">More from the same author</p>
        <div className="similar-card-section">
          {sampleData.morefromAuthor.map((article, index) => (
            <Cardsection key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Cardsection = ({ Articleid, heading, image, body }) => {
  console.log(Articleid);
  return (
    <div className="similar-article-card">
      <div className="similar-article-image-holder">
        <img src={image} alt="image1" className="similar-article-image" />
      </div>
      <div className="similar-article-text">
        <p className="similer-article-heading">{heading}</p>
        <p className="similer-article-body">{body}</p>
      </div>
      <div className="learn-more-similar-article">
        <div className="learn-more-holder">
          <span className="similar-top-hover"></span>
          <Link
            to={`/article/${Articleid}`}
            className="learn-more-similar-button"
          >
            Learn More
          </Link>
          <span className="similar-bottom-hover"></span>
        </div>
      </div>
    </div>
  );
};

const Commentsection = () => {
  const { sampleData } = useContext(DataProvider);
  const [addingComment, setAddingComment] = useState(false);
  const [commentText, SetcommentText] = useState("");
  const OnPost = () => {
    console.log(commentText);
    setAddingComment(!addingComment);
    // comment post handler
  };

  return (
    <div className="comment-holder">
      <div className="comment-count-holder">
        <p className="comment-count" onClick={(e) => console.log(commentText)}>
          Comments ({sampleData.comment.count})
        </p>
        <div
          className="add-comment-section"
          onClick={(e) => setAddingComment(!addingComment)}
        >
          <div className="add-comment-image-holder">
            <img
              src={CommentImageWrite}
              alt="add comment"
              className="add-comment-image"
            />
          </div>
          <p className="add-comment">Add a comment</p>
        </div>
      </div>
      {addingComment && (
        <Addcomment
          onTextChange={SetcommentText}
          tempComment={commentText}
          onPost={OnPost}
        />
      )}
      {sampleData.comment.topComments.map((comment, index) => (
        <Comments key={index} comment={comment} />
      ))}
    </div>
  );
};

const Addcomment = ({ onTextChange, tempComment, onPost }) => {
  return (
    <div className="temporary-comment">
      <textarea
        className="temporary-comment-text"
        placeHolder="Add your comment here"
        maxLength="400"
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div className="post-comment" onClick={onPost}>
        post
      </div>
    </div>
  );
};

const Comments = ({ comment }) => {
  //console.log(comment.author.name);
  return (
    <div className="comment-card">
      <div className="comment-header">
        <div className="comment-author-image">
          <img
            src={comment.author.avatar}
            alt="username"
            className="comment-author-img"
          />
        </div>
        <div className="comment-author-username">{comment.author.name}</div>
      </div>
      <div className="comment-body">{comment.body}</div>
    </div>
  );
};

export default Articleview;
