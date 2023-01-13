import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { products } from "../data/products";

const Hero = () => {
	return (
		<AliceCarousel
			mouseTracking
			items={products.map((item, i) => {
				return (
					<div className="hero-container" key={i}>
						<div className="left-section">
							<h1>{item.title}</h1>
							<button className="shop">Shop now</button>
							<button className="view">View more</button>
						</div>

						<div className="right-section">
							<img src={item.img} alt="camera" />
						</div>
					</div>
				);
			})}
			disableButtonsControls
		/>
	);
};

export default Hero;
