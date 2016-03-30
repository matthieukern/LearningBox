export default class Scheduler {
	constructor(exercises = null) {
		this._exercises = exercises;
		this._currentExercise = 0;

		return this;
	}

	set exercises(exercises) {
		this._exercises = exercises;
		this._currentExercise = 0;
	}

	get exercises() {
		return this._exercises;
	}

	next() {
		if (this.exercises == null) {
			this._currentExercise = 0;
			return;
		}

		if (this.exercises.length >= this._currentExercise + 1)
			return;

		this._currentExercise++;
	}

	previous() {
		this._currentExercise--;

		if (this._currentExercise < 0)
			this._currentExercise = 0;
	}
}
