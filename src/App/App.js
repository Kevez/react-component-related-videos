import React, {Component} from 'react';
import './App.css';
import RelatedVideos from "../RelatedVideos/RelatedVideos";

class App extends Component {
	render() {
		return (
			<div className="App">
				<RelatedVideos/>
			</div>
		);
	}
}

export default App;
