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
		// On source code changed
		console.log(code);
		var JsonCode = JSON.parse(code);
		if (JsonCode.hasOwnProperty('associations'))
		{
			console.log("Associations");
            
		}
	});

	// Engine code...
}
