import React from "react";

const Product = ({ name, price, img, button }) => {
	return (
		<div className={`${button ? "first-product" : "product"}`}>
			<img src={img} alt="speakers" />
			<div className="showcase-content">
				<h3>{name}</h3>
				<p>${price}</p>
				<img src="img/stars.svg" alt="stars" />
				{button && (
					<div className="cart-btn">
						<button>
							<span>Add to cart</span>
							<img src="img/cart.svg" alt="cart" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const ProductShowcase = () => {
	return (
		<div className="product-showcase">
			<Product
				name="JBL bar 2.1 deep bass"
				price={11.7}
				img="img/speakers.svg"
				button={true}
			/>
			<div className="right-side">
				<Product name="Play game" price={11.7} img="img/game-hand.svg" />
				<Product name="Laptop" price={11.7} img="img/showcase-laptop.svg" />
			</div>
		</div>
	);
};

export default ProductShowcase;
