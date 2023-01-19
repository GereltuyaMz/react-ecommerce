import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ProductBox = ({ product, addWishList, setAddWishList }) => {
	const [heart, setHeart] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	const handleWishlist = (productId) => {
		setHeart(!heart);
		if (productId === product.id) {
			setIsLiked(!isLiked);
			setAddWishList([...addWishList, product]);
			if (isLiked) {
				setAddWishList(addWishList.filter((p) => p.id !== productId));
			}
		}
	};

	return (
		<div className="popular-product">
			<div className="heart-icon" onClick={() => handleWishlist(product.id)}>
				{heart ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
			</div>
			<Link to={`/detail/${product.id}`} state={product}>
				<img src={product.img} alt="camera" />
			</Link>
			<div className="content">
				<div className="review">
					<p>{product.name}</p>
					<p className="price">${product.price}</p>
					<img src="img/stars.svg" alt="stars" />
				</div>
				<img src="img/cart.svg" alt="cart" />
			</div>
		</div>
	);
};
