import React from "react";
import "../App.css";
import { pics } from "./CharPic";

const CharTile = props => {
	return (
		<div className="charTile">
			<div className="namePic">
				<p className="name">{props.char.name.toUpperCase()}</p>
				<div className="pic">
					<img
						src={pics.filter(el => el.name === props.char.name)[0].img}
						alt=""
					/>
					{/* <img src={require("../assets/Luke.jpg")} alt="" /> */}
				</div>
			</div>
			<div className="charInfo">
				<p className="birthYear">Born: {props.char.birth_year}</p>
				<p className="gender">
					Gender:{" "}
					{props.char.gender.charAt(0).toUpperCase() +
						props.char.gender.slice(1)}
				</p>
			</div>
		</div>
	);
};

export default CharTile;
