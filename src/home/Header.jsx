import React, { useState } from "react";
import "./home.css";

const Top = () => {
	return (
		<div className="top">
			<div className="help">
				<p>Need help? Call us: (+98) 0234 456 789</p>
			</div>
			<div className="top-content">
				<div className="store">
					<img src="icons/location.svg" alt="location" />
					<p>Our store</p>
				</div>
				<div className="order">
					<img src="icons/truck.svg" alt="truck" />
					<p>Track your order</p>
				</div>
			</div>
		</div>
	);
};

const WishList = ({ addWishlist }) => {
	return (
		<div className="wishlist">
			<h3>Wishlist</h3>
			{addWishlist.length === 0 && <h4>Your wishlist is empty</h4>}
			{addWishlist.map((wish) => {
				return (
					<div className="wishlist-product" key={wish.id}>
						<img src={wish.img} alt={wish.name} />
						<div className="product-content">
							<p className="product-name">{wish.name}</p>
							<p className="product-price">${wish.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const Header = ({ addWishlist }) => {
	const [wishlist, setWishlist] = useState(false);

	return (
		<header className="header-container">
			<Top />
			<div className="header">
				<div className="left-side">
					<img src="icons/logo.svg" alt="logo" />
					<div className="search-input">
						<input type="text" id="search" placeholder="Search any things" />
						<button className="search-btn">Search</button>
					</div>
				</div>
				<div className="personal-status">
					<div className="sign-in align-center">
						<img src="icons/user.svg" alt="user" />
						<p>Sign in</p>
					</div>
					<div className="hearts align-center">
						<img
							src="icons/heart.svg"
							alt="heart"
							onClick={() => setWishlist(!wishlist)} 
						/>
						<p>{addWishlist.length}</p>
					</div>
					{wishlist && <WishList addWishlist={addWishlist} />}
					<div className="cart align-center">
						<img src="icons/shopping-cart.svg" alt="cart" />
						<p>0</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
