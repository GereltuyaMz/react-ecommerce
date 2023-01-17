import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
	const { id } = useParams();
	const location = useLocation();
	const detail = location.state;
	return (
		<div>
			<p>{detail.name}</p>
			<img src={`/${detail.img}`} alt="" className="detail-img" />
			<p>{detail.price}</p>
		</div>
	);
};

export default Detail;
