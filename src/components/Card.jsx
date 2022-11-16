import React from "react";

import "./card.css";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.poster} alt={props.title} />
			<div>
				<h2>{props.title} </h2>
			</div>
		</div>
	);
};

export default Card;
