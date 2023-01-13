import React from "react";

const Navigation = () => {
	return (
		<nav className="navigation">
			<ul className="navigation-bar">
				<li className="categories">
					<a href="#">Browse categories</a>
					<img src="icons/arrow-down.svg" alt="arrow-down" />
				</li>
				<li>
					<a href="#">Home</a>
					<img src="icons/arrow-down-black.svg" alt="arrow-down" />
				</li>
				<li>
					<a href="#">Catalog</a>
					<img src="icons/arrow-down-black.svg" alt="arrow-down" />
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Pages</a>
					<img src="icons/arrow-down-black.svg" alt="arrow-down" />
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
