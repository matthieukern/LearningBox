Blockly.Blocks['exercises'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Liste des exercices");
		this.appendStatementInput("Exercises")
			.setCheck(null)
			.setAlign(Blockly.ALIGN_RIGHT);
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
		this.START_HAT = true;
	}
};
Blockly.JavaScript['exercises'] = function(block) {
	var statements_exercises = Blockly.JavaScript.statementToCode(block, 'Exercises');
	// TODO: Assemble JavaScript into code variable.
	var code =
		'{\n' +
		'"exercises": [\n' + statements_exercises + '\n]' +
		'}\n';
	return code;
};