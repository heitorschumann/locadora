import React from "react";
import "./card.css";
const Card = (props) => {
	let poster = props.info[props.index].Poster;
	let title = props.info[props.index].Title;
	let plot = props.info[props.index].Plot;

	return (
		<div className="card">
			<img src={poster} alt={title} />
			<div>
				<p>{console.log(props, poster, plot, title)}</p>
				<h2>{title} </h2>
				<p>{plot}</p>
			</div>
		</div>
	);
};

export default Card;
