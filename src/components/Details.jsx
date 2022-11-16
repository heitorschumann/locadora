import { Link, useParams } from "react-router-dom";
import "./details.css";
import { ApiKey } from "../config/key";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const Details = () => {
	let { id } = useParams();
	console.log(id);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?i=${id}&apikey=${ApiKey}`)
			.then((response) => response.json())
			.then((info) => {
				const { Title, Plot, Poster, Released } = info;
				const movieData = {
					Title,
					Plot,
					Poster,
					Released,
				};

				setMovie(movieData);
			})
			.catch((e) => console.log(e));
	}, [id]);

	return (
		<>
			<Header />

			<div className="movie">
				<img src={movie.Poster} alt={movie.Plot} />
				<div className="details">
					<h1>{movie.Title}</h1>
					<span className="plot">Sinopse: {movie.Plot}</span>
					<span className="releaseDate">
						Data de lançamento: {movie.Released}
					</span>

					<Link to="/">
						<button>Voltar</button>
					</Link>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Details;
