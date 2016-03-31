import ExAssociationOneToOne from './exercises/exAssociationOneToOne'

export default class Exercises {
    constructor(stage, dataExo) {
        this.stage = stage;
        this.dataExo = dataExo;
        this.exercises = null;
		try {
			this.checkExercises();
		} catch(e) {
			console.log(e.message);
		}
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
		if (this.exercises)
			this.exercises.dispose();
    }
}
