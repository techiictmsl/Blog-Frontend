import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { sampleData } from "./sampleData";
import "./articlepage.css";
import like from "./like.svg";
import comment from "./comment.svg";
import facebookIcon from "./facebook.svg";
import twitterIcon from "./twitter.svg";
import LinkedinIcon from "./linkedin.svg";

const DataProvider = React.createContext();

const Articleview = () => {
	//const { id } = useParams();
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
		<div className='article-body'>
			<Likesection />
			<Mainarticle />
		</div>
	);
};

const Likesection = () => {
	const { sampleData } = useContext(DataProvider);
	return <h2>{sampleData.author.name}</h2>;
};

const Mainarticle = () => {
	return null;
};

const Author = () => {
	const { sampleData } = useContext(DataProvider);
	return (
		<div className='about-author'>
			<div className='author-face'>
				<img
					src={sampleData.author.avatar}
					alt='face'
					className='author-avatar'
				/>
			</div>
			<div className='author-name-div'>
				<p className='author-name'>{sampleData.author.name}</p>
				<p className='author-designation'>
					{sampleData.author.designation}
				</p>
			</div>
			<div className='author-social-link'>
				<a href={sampleData.author.socialLinks.facebook}>
					<img
						src={facebookIcon}
						alt='facebook'
						className='social-icons'
					/>
				</a>
				<a href={sampleData.author.socialLinks.twitter}>
					<img
						src={twitterIcon}
						alt='facebooktwitter'
						className='social-icons'
					/>
				</a>
				<a href={sampleData.author.socialLinks.linkedin}>
					<img
						src={LinkedinIcon}
						alt='linkedin'
						className='social-icons'
					/>
				</a>
			</div>
		</div>
	);
};

export default Articleview;
