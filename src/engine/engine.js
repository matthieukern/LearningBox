import Scheduler from './exercises-scheduler'

let instance = null;

class Engine {
	constructor() {
		if (instance)
			return instance;

		instance = this;

		this._exercises = null;
		this._scheduler = new Scheduler();
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

		this.scheduler.exercises = this.gameData;
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
}

export default new Engine();
