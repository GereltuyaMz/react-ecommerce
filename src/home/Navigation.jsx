import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation-bar">
				<li className="categories">
					<a href="#">Browse categories</a>
					<img src="/icons/arrow-down.svg" alt="arrow-down" />
				</li>
				<li>
					<Link to="/">Home</Link>
					<img src="/icons/arrow-down-black.svg" alt="arrow-down" />
				</li>
				<li>
					<Link to="/signIn">Sign in</Link>
					<img src="/icons/arrow-down-black.svg" alt="arrow-down" />
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<a href="#">Pages</a>
					<img src="/icons/arrow-down-black.svg" alt="arrow-down" />
				</li>
				<li>
					<a href="#">About Us</a>
				</li>
			</ul>
			<div className="days">
				<p>30 Days Free Return</p>
			</div>
		</nav>
	);
};

export default Navigation;
