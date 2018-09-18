import React, {Component} from 'react';
import './App.css';
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const videoData = [
	{ id: 1, title: 'Video 1', description: 'Some description will go here.' },
	{ id: 2, title: 'Video 2', description: 'Some description will go here.' },
	{ id: 3, title: 'Video 3', description: 'Some description will go here.' }
]

class App extends Component {
	render() {
		return (
			<div className="App">
				<RelatedVideos videoData={videoData} />
			</div>
		);
	}
}

export default App;
