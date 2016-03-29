import React from 'react'

var GameScene = React.createClass({
	render: function() {
		return (
			<canvas style={{width: '100%', height: '100%'}} {...this.props}></canvas>
		);
	}
});

export default GameScene