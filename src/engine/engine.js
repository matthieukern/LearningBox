import events from 'events'
var emitter = new events.EventEmitter();

export let stage = null;
export function setStage(newStage) {
	stage = newStage;
}

export function gameSourceCodeChanged(code) {
	emitter.emit('sourceCodeChanged', code);
}

export function engine() {
	emitter.on('sourceCodeChanged', function(code) {
		// On source code change
        console.log(code);
		var JsonCode = JSON.parse(code);
        console.log(JsonCode);
		if (JsonCode.hasOwnProperty('associations'))
		{
			console.log("Associations");
		    assembly();
		}
	});

	// Engine code...
	function assembly () {


		var graphics = new createjs.Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
		var testShape = new createjs.Shape(graphics);
		stage.addChild(testShape);

		console.log("NEW TEST SHAPE");
		stage.update();
	}



}
