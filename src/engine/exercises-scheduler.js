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
		console.log("a");

		if (this.exercises == null) {
			console.log("b");
			this._currentExercise = 0;
			return;
		}

		console.log(this.exercises);
		console.log(this._currentExercise);

		if (this.exercises.length <= this._currentExercise + 1)
			return;

		console.log("c");
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
