import React, {Component} from 'react';
import './RelatedVideo.css';

class RelatedVideo extends Component {
	render() {
		return (
			<div className="related-video">
				<h2>{this.props.video.title}</h2>
				<p>{this.props.video.description}</p>
			</div>
		);
	}
}

export default RelatedVideo;
