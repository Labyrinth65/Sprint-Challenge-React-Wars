import React, { Component } from "react";
import "./App.css";
import CharList from "./components/CharList";

class App extends Component {
	constructor() {
		super();
		this.state = {
			starwarsChars: []
		};
	}

	componentDidMount() {
		this.getCharacters("https://swapi.co/api/people/");
	}

	nextPage = () => {
		this.state.next === null
			? this.getCharacters([this.state.current])
			: this.getCharacters([this.state.next]);
	};

	prevPage = () => {
		this.state.prev === null
			? this.getCharacters([this.state.current])
			: this.getCharacters([this.state.prev]);
	};

	firstPage = () => {
		this.getCharacters("https://swapi.co/api/people/");
	};

	lastPage = () => {
		this.getCharacters("https://swapi.co/api/people/?page=9");
	};

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({
					starwarsChars: data.results,
					next: data.next,
					prev: data.previous,
					current: URL
				});
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<div className="buttons">
					<button onClick={this.firstPage} className="button">
						First
					</button>
					<button onClick={this.lastPage} className="button">
						Last
					</button>
				</div>
				<div className="buttons">
					<button onClick={this.prevPage} className="button">
						Prev
					</button>
					<button onClick={this.nextPage} className="button">
						Next
					</button>
				</div>
				<CharList charArr={this.state.starwarsChars} />
			</div>
		);
	}
}

export default App;
