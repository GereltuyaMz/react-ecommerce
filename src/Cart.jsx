import React from "react";

const Cart = ({ cart }) => {
	return (
		<div className="cart-container">
			<h2>Shopping Cart</h2>
			{cart.length === 0 ? (
				<h4>please add product to the cart</h4>
			) : (
				cart.map((product) => {
					return (
						<div className="product-box" key={product.id}>
							<p>{product.name}</p>
							<p>{product.number}</p>
						</div>
					);
				})
			)}
		</div>
	);
};

export default Cart;
