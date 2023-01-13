import React from "react";
import "./modal.css";

export const Modal = ({ show, onClose, product }) => {
	if (!show) {
		return null;
	}
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">{product.name}</h4>
				</div>
				<div className="modal-body">
					<p>modal content</p>
				</div>
				<div className="modal-footer">
					<button className="close" onClick={onClose}>
						close
					</button>
				</div>
			</div>
		</div>
	);
};
