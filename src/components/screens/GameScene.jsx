import React from 'react'
import Engine from '../../engine/engine'

var GameScene = React.createClass({
	stage: null,

	componentDidMount: function() {
		var gameSceneCanvas = document.getElementById('gameSceneCanvas');
		gameSceneCanvas.width = document.getElementById('gameScene').clientWidth;
		gameSceneCanvas.height = document.getElementById('gameScene').clientHeight;

		this.stage = new createjs.Stage('gameSceneCanvas');
		Engine.stage = this.stage;
	},

	render: function() {
		return (
			<canvas id="gameSceneCanvas" {...this.props} />
		);
	}
});

export default GameScene