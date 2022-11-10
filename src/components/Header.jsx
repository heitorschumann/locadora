import React from "react";
import "./header.css";

const Header = () => {
	return (
		<header>
			<h1>React Video</h1>

			<ul>
				<li>
					<a href="google.com">Home</a>
				</li>
				<li>
					<a href="google.com">Sobre</a>
				</li>
				<li>
					<a href="google.com">Cadastro</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
