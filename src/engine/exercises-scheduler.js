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

	get currentExerciseData() {
		if (this._exercises == null)
			return null;

		return this._exercises[this._currentExercise];
	}

	next(callback) {
		if (this.exercises == null) {
			this._currentExercise = 0;
			return;
		}

		if (this.exercises.length >= this._currentExercise + 1)
			return;

		this._currentExercise++;

		callback();
	}

	previous(callback) {
		this._currentExercise--;

		if (this._currentExercise < 0)
			this._currentExercise = 0;

		callback();
	}
}
