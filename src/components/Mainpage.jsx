import React from "react";
import "./mainpage.css";
import Card from "./Card";
import { useEffect } from "react";
import { ApiKey } from "../config/key";
import { useState } from "react";

const Mainpage = () => {
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US&page=1`;
	let [movies, setMovies] = useState([]);
	const img_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((res) => setMovies(res.results))
			.catch((e) => console.log(e));
	}, [url]);
	return (
		<>
			<span>Conheça nosso catálogo</span>
			<main>
				{movies.map((movie) => {
					return (
						<Card
							title={movie.title}
							poster={`${img_path}${movie.poster_path}`}
							key={movie.id}
						/>
					);
				})}
			</main>
		</>
	);
};

export default Mainpage;
