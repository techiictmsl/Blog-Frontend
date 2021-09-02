import React, { useContext, useEffect, useState } from "react";
import reading from "./reading.svg";
import data from "./sample";
import { Link } from "react-router-dom";
import "./home.css";
const DataProvider = React.createContext();

const Home = () => {
	const [sampleData, setsampleData] = useState([]);
	useEffect(() => {
		setsampleData(data);
	}, []);
	return (
		<DataProvider.Provider value={{ sampleData }}>
			<Landingpageheader />
			<Articleviwer />
		</DataProvider.Provider>
	);
};

const Landingpageheader = () => {
	return (
		<div className='landing-header'>
			<div className='landing-image'>
				<img src={reading} alt='reading' className='reading-image' />
			</div>
			<div className='landing-header-text'>
				<div className='landing-text-inner'>
					<p className='we-share landing-head'>We Share</p>
					<p className='knowledge landing-head'>Knowledge</p>
					<p className='text-body'>
						Join our community to learn and
						<br />
						share your knowledge with the rest
						<br />
						of the world
					</p>
					<div className='start-blog-button'>Start a Blog</div>
				</div>
			</div>
		</div>
	);
};

const Articleviwer = () => {
	const { sampleData } = useContext(DataProvider);
	const [count, setCount] = useState(4);
	return (
		<div className='main-article-viewer'>
			{sampleData.map((article, index) => {
				if (index >= count) {
					console.log(index);
					return null;
				} else {
					return <ArticleCard key={index} articleData={article} />;
				}
			})}
			<div
				className='load-more-button'
				onClick={(e) => {
					setCount(count + 4);
				}}>
				load more
			</div>
		</div>
	);
};

const ArticleCard = ({ articleData }) => {
	return (
		<div className='article-card-landing'>
			<div className='article-card-holder'>
				<div className='article-card-back'>
					<img
						src={articleData.fimg_link}
						alt='img'
						className='article-card-image'
					/>
				</div>
				<div className='article-card-face'>
					<h3 className='article-view-title'>{articleData.title}</h3>
					<p className='article-view-body'>
						{articleData.trunc_body}
					</p>
					<Link
						to={`/article/${articleData.article_id}`}
						className='article-landing-link'>
						<p className='article-learn-more'>Learn more</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
