import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import MediaQuery, { useMediaQuery } from "react-responsive";

const Navbar = () => {
	const [dropped, setDropped] = useState(false);
	const dropHandler = (e) => {
		setDropped(!dropped);
	};
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 845px)" });

	return (
		<div className='navbar-main'>
			<div className='navbar-first'>
				<div className='website-title'>IIC BLOG</div>
				<MediaQuery maxWidth={845}>
					<div className='dropdown' onClick={(e) => dropHandler(e)}>
						<div
							style={
								dropped ? { transform: "rotateZ(50deg)" } : {}
							}
							className='dropdown-line'></div>
						<div
							style={
								dropped ? { transform: "translateX(-1em)" } : {}
							}
							className='dropdown-line'></div>
						<div
							style={
								dropped ? { transform: "rotateZ(-50deg)" } : {}
							}
							className='dropdown-line'></div>
					</div>
				</MediaQuery>
			</div>
			<div
				className='navbar-links'
				style={
					isTabletOrMobile
						? dropped
							? { height: "10em", paddingBottom: "1em" }
							: { height: "0" }
						: {}
				}>
				<Link to='/' className='navbar-link'>
					home
				</Link>
				<Link to='/' className='navbar-link'>
					about
				</Link>
				<Link to='/login' className='navbar-link'>
					login/signup
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
