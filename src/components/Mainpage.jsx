import React, { useState } from "react";
import "./mainpage.css";
import Card from "./Card";

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
	"tt0851578", // Paprika;
	"tt0107290", // Jurassic Park;
	"tt0088247", // The Terminator;
	"tt0113568", // Ghost in the Shell;
	"tt0437086", // Alita: Battle Angel;
	"tt0470752", // Ex Machina;
	"tt1375666", // Inception;
	"tt0118884", // Contact;
	"tt0113243", // Hackers;
	"tt0246578", // Donnie Darko;
	"tt0094625", // Akira;
];

const Mainpage = () => {
	let [movieObjs, setMovieObjs] = useState([]);

	function requisitaApi(id) {
		var requisicao = new XMLHttpRequest();

		requisicao.open(
			"GET",
			`http://www.omdbapi.com/?i=${id}&apikey=4867be78`
		);

		requisicao.onload = function () {
			if (requisicao.status === 200) {
				const movieObj = JSON.parse(requisicao.response);
				setMovieObjs([...movieObjs, movieObj]);
			} else {
				console.log("erro");
			}
		};

		requisicao.send();
	}

	ids.forEach((id) => requisitaApi(id));

	return (
		<main>
			{movieObjs
				? movieObjs.map((data, i) => <Card info={data} key={i} />)
				: null}
		</main>
	);
};

export default Mainpage;
