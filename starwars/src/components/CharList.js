import React from "react";
import CharTile from "./CharTile";
import "../App.css";

class CharList extends React.Component {
	render() {
		return (
			<div className="charList">
				{this.props.charArr.map(el => (
					<CharTile char={el} />
				))}
			</div>
		);
	}
}

export default CharList;
