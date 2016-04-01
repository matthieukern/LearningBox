import Engine from '../engine'

export default class ExAssociationOneToOne {
    constructor(stage, data) {
        this.stage = stage;
        this.data = data;
		this.elementSprite = null;
		this.possibilitySprite = null;
		this.errorsSprites = [];
        this.success = false;
		this.loadData();
    }

	set data(data) {
		if (data.element == null ||
			data.possibility == null) {
			throw {
				message: 'Data not reliable.'
			};
		}

		this._data = data;
	}

	get data() {
		return this._data;
	}

	loadData() {
		console.log("loaddata");
		createjs.Sound.registerSound('incorrectAnswer.mp3', 'incorrectAnswer');
		createjs.Sound.registerSound('correctAnswer.mp3', 'correctAnswer');
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
		console.log(manifest);
		this.loader.loadManifest(manifest);
	}

	init() {
		console.log("init");
		this.width = this.stage.canvas.width;
		this.height = this.stage.canvas.height;

		this.drawDelimiter();

		console.log(this.data);
		this.elementSprite = this.drawElement(this.data.element, this.width / 4, this.height / 2);
		this.displayPossibilities();

		this.stage.update();
	}

	onPossibilityClick(event) {
        if (this.success)
            return;
        this.success = true;
		createjs.Sound.play('correctAnswer');
        event.target.color = "green";
        this.stage.update();
        setTimeout(() => {
            event.target.color = "black";
            this.stage.update();
            this.completeExercise();
        }, 3000);
		console.log('ok');
	}

	onErrorClicked(event) {
        if (this.success)
            return;
        createjs.Sound.play('incorrectAnswer');
        event.target.color = "red";
        this.stage.update();
        setTimeout(() => {
            event.target.color = "black";
            this.stage.update();
        }, 3000);
        console.log('ko');
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
				this.drawHitArea(this.possibilitySprite);
				this.possibilitySprite.addEventListener('click', this.onPossibilityClick.bind(this));

				this.stage.addChild(this.possibilitySprite);
			} else {
				console.log(i + ', ' + max);
				var newElem = this.drawElement(this.data.errors[i - (i > possibilityIndex ? 1 : 0)], this.width * 3 / 4, (this.height / (max + 1)) * (i + 1));
				this.drawHitArea(newElem);
				newElem.addEventListener('click', this.onErrorClicked.bind(this));

				this.stage.addChild(newElem);
				this.errorsSprites.push(newElem);
			}
		}
	}

	drawHitArea(object) {
		var hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, object.getMeasuredWidth(), object.getMeasuredHeight());
		object.hitArea = hit;
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
		this.stage.addChild(bitmap);
		return bitmap;
	}

	drawImageByURL(url, x, y) {
		var bitmap = new createjs.Bitmap(this.loader.getResult(url));

		var scalex = (this.width / 8 * 3) / bitmap.getBounds().width;
		var scaley = (this.height / 5) / bitmap.getBounds().height;
		var scale = scalex > scaley ? scaley : scalex;

		bitmap.setTransform(x - (bitmap.getBounds().width * scale) / 2, y - (bitmap.getBounds().height * scale) / 2, scale, scale);
		this.stage.addChild(bitmap);
		return bitmap;
	}

	dispose() {
		this.stage.removeAllChildren();
	}
}
