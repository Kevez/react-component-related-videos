import React, {Component} from 'react';
import './RelatedVideos.css';
import RelatedVideo from "../RelatedVideo/RelatedVideo";

class RelatedVideos extends Component {
	render() {
		var relatedVideos = this.props.videoData.map((video) => {
			return <RelatedVideo key={video.id} video={video} onVideoLinkPress={this.props.onVideoLinkPress}/>
		});

		return (
			<div className="related-videos">
				{relatedVideos}
			</div>
		);
	}
}

export default RelatedVideos;
