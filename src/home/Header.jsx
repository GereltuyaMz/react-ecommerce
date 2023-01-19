import React, { useState } from "react";
import "./home.css";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Top = () => {
	return (
		<div className="top">
			<div className="help">
				<p>Need help? Call us: (+98) 0234 456 789</p>
			</div>
			<div className="top-content">
				<div className="store">
					<img src="/icons/location.svg" alt="location" />
					<p>Our store</p>
				</div>
				<div className="order">
					<img src="/icons/truck.svg" alt="truck" />
					<p>Track your order</p>
				</div>
			</div>
		</div>
	);
};

const WishList = ({ addWishList, setAddWishList }) => {
	const removeWishList = (productId) => {
		setAddWishList(addWishList.filter((p) => p.id !== productId));
	};

	return (
		<div className="wishlist">
			<h3>Wishlist</h3>
			{addWishList.length === 0 ? (
				<h4>Your wishlist is empty</h4>
			) : (
				addWishList.map((wish) => {
					return (
						<div className="wishlist-product" key={wish.id}>
							<img src={wish.img} alt={wish.name} />
							<div className="product-content">
								<p className="product-name">{wish.name}</p>
								<p className="product-price">${wish.price}</p>
							</div>
							<div className="delete" onClick={() => removeWishList(wish.id)}>
								<AiOutlineDelete />
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};

const Header = ({ addWishList, setAddWishList, cart }) => {
	const [wishlist, setWishlist] = useState(false);
	// console.log("cart wishlist", cart);
	return (
		<header className="header-container">
			<Top />
			<div className="header">
				<div className="left-side">
					<img src="/icons/logo.svg" alt="logo" />
					<div className="search-input">
						<input type="text" id="search" placeholder="Search any things" />
						<button className="search-btn">Search</button>
					</div>
				</div>
				<div className="personal-status">
					<div className="sign-in align-center">
						<img src="/icons/user.svg" alt="user" />
						<p>Sign in</p>
					</div>
					<div className="hearts align-center">
						<img
							src="/icons/heart.svg"
							alt="heart"
							onClick={() => setWishlist(!wishlist)}
						/>
						<p>{addWishList.length}</p>
					</div>
					{wishlist && (
						<WishList
							addWishList={addWishList}
							setAddWishList={setAddWishList}
						/>
					)}
					<div className="cart align-center">
						<Link to="/cart">
							<img src="/icons/shopping-cart.svg" alt="cart" />
						</Link>
						<p>{cart.length}</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
