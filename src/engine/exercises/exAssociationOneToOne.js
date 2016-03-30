export default class ExAssociationOneToOne {
    constructor(stage, data) {
        this.stage = stage;
        this.data = data;
        this.elementToFind = null;
        this.possibility = null;
        this.errors = [];
        this.checkData();
        this.test();
        console.log("ExAssociationOneToOne");
    }

    checkData() {
    }

    test() {
        var bitmap = new createjs.Text("TEST");
        this.stage.addChild(bitmap);

        console.log("NEW TEST SHAPE");
        this.stage.update();
    }
}