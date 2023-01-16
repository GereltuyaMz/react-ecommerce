import React from "react";

const Sale = () => {
	return (
		<div className="sale">
			<div
				className="sale-background"
				style={{ backgroundImage: "url(img/background-laptop.svg)" }}
			>
				<div className="sale-content">
					<button className="sale-btn">New laptop</button>
					<h1>Sale up to 50% off</h1>
					<p>12 inch hd display</p>
					<button className="sale-btn">Shop now</button>
				</div>
			</div>
		</div>
	);
};

export default Sale;
