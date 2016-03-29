import React from 'react'
import { setStage, engine } from '../../engine/engine'

var GameScene = React.createClass({
	stage: null,

	componentDidMount: function() {
		var gameSceneCanvas = document.getElementById('gameSceneCanvas');
		gameSceneCanvas.width = document.getElementById('gameScene').clientWidth;
		gameSceneCanvas.height = document.getElementById('gameScene').clientHeight;

		this.stage = new createjs.Stage('gameSceneCanvas');
		setStage(this.stage);
		engine();
	},

	render: function() {
		return (
			<canvas id="gameSceneCanvas" {...this.props}></canvas>
		);
	}
});

export default GameScene