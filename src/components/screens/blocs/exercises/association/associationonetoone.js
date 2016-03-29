Blockly.Blocks['associateonetoone'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Associer un élément à une possibilité");
		this.appendStatementInput("Element")
			.setCheck("Value")
			.appendField("L'élément est ");
		this.appendStatementInput("Possibility")
			.setCheck("Value")
			.appendField("La possibilité est");
		this.appendStatementInput("Errors")
			.setCheck("Value")
			.appendField("Les erreurs sont");
		this.setPreviousStatement(true, "Exercise");
		this.setNextStatement(true, "Exercise");
		this.setColour(120);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};
Blockly.JavaScript['associateonetoone'] = function(block) {
	var statements_element = Blockly.JavaScript.statementToCode(block, 'Element');
	var statements_possibility = Blockly.JavaScript.statementToCode(block, 'Possibility');
	var statements_errors = Blockly.JavaScript.statementToCode(block, 'Errors');
	// TODO: Assemble JavaScript into code variable.
	var code =
		'{\n' +
		'"type": associateonetoone",\n' +
		'"element": "' + statements_element + '",\n' +
		'"possibility": "' + statements_possibility + '",\n' +
		'"errors":  [\n' + statements_errors + '\n]' +
		'},\n';
	return code;
};
