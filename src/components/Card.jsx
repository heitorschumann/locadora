import React from "react";
import "./card.css";
const Card = (props) => {
	return (
		<div className="card">
			<img src={props.info.Poster} alt={props.info.Title} />
			<div>
				<h2>{props.info.Title}</h2>
				<p>{props.info.Plot}</p>
			</div>
		</div>
	);
};

export default Card;
