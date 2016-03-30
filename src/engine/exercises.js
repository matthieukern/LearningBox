import ExAssociationOneToOne from './exercises/exAssociationOneToOne'

export default class Exercises {
    constructor(stage, dataExo) {
        this.stage = stage;
        this.dataExo = dataExo;
        this.exercises = null;
        this.checkExercises();
    }

    checkExercises () {
        console.log(this.dataExo.type);
        switch (this.dataExo.type)
        {
            case "associateonetoone":
                console.log("Association");
                this.exercises = new ExAssociationOneToOne(this.stage, this.dataExo);
                break;
        }
    }

    dispose() {
        // TODO: dispose all data
    }
}
