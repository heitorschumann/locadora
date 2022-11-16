import React from "react";
import "./mainpage.css";
import Card from "./Card";
import { useEffect } from "react";
import { ApiKey } from "../config/key";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const Mainpage = () => {
	let [movie, setMovie] = useState();
	let [movieName, setMovieName] = useState();

	useEffect(() => {
		console.log("useEffect", movie);
	}, [movie]);

	const pegaParametro = (event) => {
		event.preventDefault();
		let queryString = movieName.split(" ");
		queryString = queryString.join("+");
		console.log(queryString);
		fetch(`http://www.omdbapi.com/?t=${queryString}&apikey=${ApiKey}`)
			.then((response) => response.json())
			.then((res) => setMovie(res))
			.catch((e) => console.log(e));
	};

	function handleMovieName(event) {
		setMovieName(event.target.value);
		console.log(movieName);
	}

	return (
		<>
			<Header />
			<span>Explore nosso catálogo</span>
			<main>
				<form className="busca">
					<input
						placeholder="buscar por titulo"
						className="campoBusca"
						value={movieName}
						onChange={handleMovieName}
					/>
					<button
						type="submit"
						className="botaoBusca"
						onClick={pegaParametro}
					>
						Buscar
					</button>
				</form>

				{movie ? (
					<Link to={`/details/${movie.imdbID}`}>
						<Card
							title={movie.Title}
							poster={movie.Poster}
							key={movie.imdbID}
						/>
					</Link>
				) : null}
			</main>
			<Footer />
		</>
	);
};

export default Mainpage;
