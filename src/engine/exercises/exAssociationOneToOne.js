import Engine from "../engine"

export default class ExAssociationOneToOne {
	constructor(stage, data) {
		this.stage = stage;
		this.data = data;
		this.elementSprite = null;
		this.possibilitySprite = null;
		this.errorsSprites = [];
		this.success = false;
		this.lastClick = null;
		this.wrongFilter = new createjs.ColorFilter(0.25, 0.75, 1, 1);
		this.rightFilter = new createjs.ColorFilter(0.25, 0.75, 1, 1);
		this.loadData();
	}

	set data(data) {
		if (data.element == null ||
			data.possibility == null) {
			throw {
				message: "Data not reliable."
			};
		}

		this._data = data;
	}

	get data() {
		return this._data;
	}

	loadData() {
		createjs.Sound.registerSound("incorrectAnswer.mp3", "incorrectAnswer");
		createjs.Sound.registerSound("correctAnswer.mp3", "correctAnswer");
		this.loader = new createjs.LoadQueue(false);
		this.loader.addEventListener("complete", this.init.bind(this));
		var manifest = [];
		if (this.data.element.type == "image_url")
			manifest.push(this.data.element.value);
		if (this.data.possibility.type == "image_url")
			manifest.push(this.data.possibility.value);
		for (var i = 0; i < this.data.errors.length; ++i)
		{
			if (this.data.errors[i].type == "image_url")
				manifest.push(this.data.errors[i].value);
		}
		this.loader.loadManifest(manifest);
	}

	init() {
		this.width = this.stage.canvas.width;
		this.height = this.stage.canvas.height;

		this.drawDelimiter();

		console.log(this.data);
		this.elementSprite = this.drawElement(this.data.element, this.width / 4, this.height / 2);
		this.displayPossibilities();

		this.stage.update();
	}

	onPossibilityClick(event) {
		if (this.success || this.lastClick == event.target)
			return;
		this.lastClick = event.target;
		this.success = true;
		createjs.Sound.play("correctAnswer");
		this.highlightOnClick(event, "right");
		console.log("ok");
	}

	onErrorClicked(event) {
		if (this.success || this.lastClick == event.target)
			return;
		this.lastClick = event.target;
		createjs.Sound.play("incorrectAnswer");
		this.shakeShape(event.target, 5);
		this.highlightOnClick(event, "wrong");
		console.log("ko");
	}

	shakeShape(object, time) {
		createjs.Tween.get(object)
			.to({ x: object.x + 10 }, 200, createjs.Ease.getBackInOut(time))
			.to({ x: object.x - 10 }, 200, createjs.Ease.getBackInOut(time))
			.to({ x: object.x }, 200, createjs.Ease.getBackInOut(time));
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", this.stage);
	}

	highlightOnClick (event, type) {
		var time = 2000;
		if (event.target instanceof createjs.Bitmap) {
			console.log("filter img");
			var shape = new createjs.Shape();
			shape.graphics.beginFill(type == "wrong" ? "red" : "green").drawRect(event.target.x, event.target.y, event.target.getBounds().width * event.target.scaleX, event.target.getBounds().height * event.target.scaleY);
			shape.alpha = 0.3;
			this.stage.addChild(shape);
			if (type == "wrong")
				this.shakeShape(shape, 5);
			this.stage.update();
			setTimeout(() => {
				this.lastClick = null;
				this.stage.removeChild(shape);
				this.stage.update();
				if (type == "right")
					this.completeExercise();
			}, 2000);
		} else if (event.target instanceof createjs.Text) {
			event.target.color = type == "wrong" ? "red" : "green";
			this.stage.update();
			setTimeout(() => {
				this.lastClick = null;
				event.target.color = "black";
				this.stage.update();
				if (type == "right")
					this.completeExercise();
			}, 2000);
		}
	}


	completeExercise() {
		this.stage.removeAllChildren();
		this.drawText("Fin", this.width / 2, this.height / 2);
		this.stage.update();
		Engine.nextExercise();
	}


	displayPossibilities() {
		var max = this.data.errors.length + 1;
		var possibilityIndex = Math.floor(Math.random() * max);

		for (var i = 0 ; i < max ; ++i) {
			if (i == possibilityIndex) {
				this.possibilitySprite = this.drawElement(this.data.possibility, this.width * 3 / 4, (this.height / (max + 1)) * (i + 1));
				this.possibilitySprite.addEventListener("click", this.onPossibilityClick.bind(this));

				this.stage.addChild(this.possibilitySprite);
			} else {
				console.log(i + ", " + max);
				var newElem = this.drawElement(this.data.errors[i - (i > possibilityIndex ? 1 : 0)], this.width * 3 / 4, (this.height / (max + 1)) * (i + 1));
				newElem.addEventListener("click", this.onErrorClicked.bind(this));

				this.stage.addChild(newElem);
				this.errorsSprites.push(newElem);
			}
		}
	}

	drawDelimiter() {
		var delimiter = new createjs.Shape();
		delimiter.graphics.beginFill("black").drawRect(this.width / 2 - 2, 0, 4, this.height);
		this.stage.addChild(delimiter);
	}

	drawElement(elem, x, y) {
		console.log(elem);
		if (elem.type == "text")
			return this.drawText(elem.value, x, y);
		if (elem.type == "image_url")
			return this.drawImageByURL(elem.value, x, y);
	}

	drawText(text, x, y) {
		var bitmap = new createjs.Text(text, "bold 36pt Arial");
		bitmap.setTransform(x - bitmap.getBounds().width / 2, y - bitmap.getBounds().height);
		var hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, bitmap.getMeasuredWidth(), bitmap.getMeasuredHeight());
		bitmap.hitArea = hit;
		this.stage.addChild(bitmap);
		return bitmap;
	}

	drawImageByURL(url, x, y) {
		var bitmap = new createjs.Bitmap(this.loader.getResult(url));

		var scalex = (this.width / 8 * 3) / bitmap.getBounds().width;
		var scaley = (this.height / 5) / bitmap.getBounds().height;
		var scale = scalex > scaley ? scaley : scalex;

		bitmap.setTransform(x - (bitmap.getBounds().width * scale) / 2, y - (bitmap.getBounds().height * scale) / 2, scale, scale);
		var hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, bitmap.getBounds().width, bitmap.getBounds().height);
		bitmap.hitArea = hit;
		this.stage.addChild(bitmap);
		return bitmap;
	}

	dispose() {
		this.stage.removeAllChildren();
		this.loader.destroy();
		createjs.Sound.removeAllSounds();
	}
}
