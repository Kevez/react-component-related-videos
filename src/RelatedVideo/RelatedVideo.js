import React, {Component} from 'react';
import './RelatedVideo.css';

class RelatedVideo extends Component {
	handlePress() {
		this.props.onVideoLinkPress(this.props.video.id);
	}

	render() {
		return (
			<div className="related-video">
				<h2>{this.props.video.title}</h2>
				<p><a href="#" onClick={this.handlePress.bind(this)}>Link</a></p>
				<p>{this.props.video.description}</p>
			</div>
		);
	}
}

export default RelatedVideo;
