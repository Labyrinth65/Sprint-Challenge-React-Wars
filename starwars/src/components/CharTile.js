import React from "react";
import "../App.css";

const CharTile = props => {
	return (
		<div className="charTile" id={props.char.name}>
			<p className="name">{props.char.name}</p>
			<div className="charInfo">
				<p className="birthYear">{props.char.birth_year}</p>
				<p className="gender">{props.char.gender}</p>
			</div>
		</div>
	);
};

export default CharTile;
