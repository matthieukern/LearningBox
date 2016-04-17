Blockly.Blocks['exercises'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Liste des exercices");
		this.appendDummyInput()
			.appendField("Nom :")
			.appendField(new Blockly.FieldTextInput("Nom de la liste"), "ExercisesListName");
		this.appendStatementInput("Exercices")
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
		this.START_HAT = true;
	}
};

Blockly.JavaScript['exercises'] = function(block) {
	var statements_exerciceslistname = block.getFieldValue('ExercicesListName');
	var statements_exercices = Blockly.JavaScript.statementToCode(block, 'Exercices');
	statements_exercices = statements_exercices.slice(0, statements_exercices.length - 2);
	// TODO: Assemble JavaScript into code variable.
	var code =
		'{\n' +
		'"exercisesListName": "' + statements_exerciceslistname + '",' +
		'"exercises": [\n' + statements_exercices + '\n]' +
		'}\n';
	return code;
};