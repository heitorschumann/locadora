import React from "react";
import "./card.css";
const Card = (props) => {
	// let poster = props.info[props.index].Poster;
	// let title = props.info[props.index].Title;
	// let plot = props.info[props.index].Plot;

	return (
		<div className="card">
			<img src={props.poster} alt={props.title} />
			<div>
				<p>{console.log(props)}</p>
				<h2>{props.title} </h2>
				<p>{props.plot}</p>
			</div>
		</div>
	);
};

export default Card;
