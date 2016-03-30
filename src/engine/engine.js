import events from 'events'
var emitter = new events.EventEmitter();

import Scheduler from './exercises-scheduler'
var scheduler = new Scheduler();

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

		scheduler.exercises = JsonCode.exercises;
	});
}
