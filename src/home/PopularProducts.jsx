import React from "react";
import { ProductBox } from "../components/ProductBox";
import { popularProducts } from "../data/products";

const PopularProducts = ({ handleWishlist }) => {
	return (
		<div className="popular-container">
			<div className="popular-header">
				<h2>Popular products</h2>
				<div className="filter">
					<span>Cameras</span>
					<span>Laptops</span>
					<span>Tablets</span>
					<span>Mouse</span>
				</div>
			</div>
			<div className="popular-products">
				{popularProducts.map((product) => {
					return (
						<ProductBox
							product={product}
							key={product.id}
							handleWishlist={handleWishlist}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default PopularProducts;
