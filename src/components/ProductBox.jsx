import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Modal } from "./Modal";

export const ProductBox = ({ product, handleWishlist }) => {
	const [heart, setHeart] = useState(false);
	const [show, setShow] = useState(false);

	const handleProduct = (productId) => {
		setShow(true);
		if (productId === product.id) {
			return product;
		}
	};

	return (
		<div className="popular-product">
			<div className="heart-icon" onClick={() => handleWishlist(product.id)}>
				<div className="heart" onClick={() => setHeart(!heart)}>
					{heart ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
				</div>
			</div>
			<img
				src={product.img}
				alt="camera"
				onClick={() => handleProduct(product.id)}
			/>
			<div className="content">
				<div className="review">
					<p>{product.name}</p>
					<p className="price">${product.price}</p>
					<img src="img/stars.svg" alt="stars" />
				</div>
				<img src="img/cart.svg" alt="cart" />
			</div>
			<Modal show={show} onClose={() => setShow(false)} product={product} />
		</div>
	);
};
