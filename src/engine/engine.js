import Scheduler from './exercises-scheduler'
import Exercise from './exercises'

let instance = null;

class Engine {
	constructor() {
		if (instance)
			return instance;

		instance = this;

		this._exercises = null;
		this._scheduler = new Scheduler();
		this._currentExercise = null;
	}

	get scheduler() {
		return this._scheduler;
	}

	set gameData(exercises) {
		try {
			var json = JSON.parse(exercises);
			this._exercises = json.exercises;
		} catch(e) {
			this._exercises = null;
		}

		if (this._exercises && this._exercises.length > 0) {
			this.scheduler.exercises = this.gameData;
			this.run();
		} else {
			this.scheduler.exercises = null;
			this.stop();
		}
	}

	get gameData() {
		return this._exercises;
	}

	set stage(stage) {
		this._stage = stage;
	}

	get stage() {
		return this._stage;
	}

	run() {
		console.log(this.scheduler.currentExerciseData);
		this.stop();
		this._currentExercise = new Exercise(this.stage, this.scheduler.currentExerciseData, this);
	}

	stop() {
		if (this._currentExercise) {
			this._currentExercise.dispose();
			this._currentExercise = null;
		}

		this.stage.clear();
	}

	nextExercise() {
		console.log("nedxt");
		this.scheduler.next(this.run.bind(this));
	}

	previousExercise() {
		this.scheduler.prev(this.run.bind(this));
	}
}

export default new Engine();
