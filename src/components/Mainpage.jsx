import React, { useState } from "react";
import axios from "axios";
import "./mainpage.css";
import Card from "./Card";
import { useEffect } from "react";

const ids = [
	"tt0068646",
	"tt0111161",
	"tt0468569",
	"tt0071562",
	"tt0167260",
	"tt0110912",
	"tt0120737",
	"tt0133093",
	"tt0167261",
	"tt0047478",
	"tt0245429",
	"tt0851578",
	"tt0107290",
	"tt0088247",
	"tt0113568",
	"tt0437086",
	"tt0470752",
	"tt1375666",
	"tt0118884",
	"tt0113243",
	"tt0246578",
	"tt0094625",
];

const Mainpage = () => {
	let movieObjs = [];

	function getMovieData(id) {
		let url = `http://www.omdbapi.com/?i=${id}&apikey=4867be78`;

		axios
			.get(url)
			.then((response) => {
				const data = response.data;
				movieObjs.push(data);
			})
			.catch((e) => console.log(e));
	}

	return (
		<main>
			{ids.map((id, i) => {
				let index = i;
				console.log(index);
				console.log(movieObjs);
				getMovieData(id);

				return <Card info={movieObjs} key={i} index={index} />;
			})}
		</main>
	);
};

export default Mainpage;
