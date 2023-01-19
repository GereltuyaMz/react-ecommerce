import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Detail = ({ cart, setCart }) => {
	const [count, setCount] = useState(0);
	const location = useLocation();
	console.log("location", location);
	const detail = location.state;

	const handleCart = () => {
		if (count !== 0) {
			setCart([...cart, { ...detail, number: count }]);
		}
	};

	return (
		<div className="detail-container">
			<img src={`/${detail.img}`} alt={detail.name} className="detail-img" />
			<div className="detail-content">
				<div className="first-section">
					<h3>{detail.name}</h3>
					<h4>${detail.price}</h4>
					<img src="/img/detail-stars.svg" alt="stars" className="star-img" />
					<p className="available">
						Availability: <img src="/icons/right.svg" alt="right" />
						<span className="in-stock">In stock</span>
					</p>
					<p className="stock">Hurry up! only 34 product left in stock!</p>
				</div>
				<div className="second-section">
					<div className="color flex-center">
						<p>Color :</p>
						<div className="first-color" />
						<div className="second-color" />
					</div>
					<div className="sizes flex-center">
						<p>Size: </p>
						<p className="size">30</p>
						<p className="size">42</p>
						<p className="size">48</p>
						<p className="size">56</p>
					</div>
					<div className="quantity flex-center">
						<p>Quantity :</p>
						<div className="quantity-metric flex-center">
							<button
								className="decrease"
								onClick={() => (count > 0 ? setCount(count - 1) : 0)}
							>
								-
							</button>
							<p className="number">{count}</p>
							<button className="increase" onClick={() => setCount(count + 1)}>
								+
							</button>
						</div>
					</div>
					<div className="buttons flex-center">
						<button className="add" onClick={() => handleCart()}>
							Add to cart
						</button>
						<button className="buy">Buy it now</button>
						<div className="heart">
							<AiOutlineHeart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
