Blockly.Blocks['defih_associate'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("association de ces éléments :");
		this.appendStatementInput("LABEL")
			.setCheck("DEFIH_OBJECT");
		this.appendDummyInput()
			.appendField("avec ces éléments :");
		this.appendStatementInput("POSSIBILITIES")
			.setCheck("DEFIH_OBJECT");
		this.setPreviousStatement(true, "DEFIH_ASSOCIATE");
		this.setNextStatement(true, "DEFIH_ASSOCIATE");
		this.setColour(65);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['defih_associate'] = function(block) {
	var statements_label = Blockly.JavaScript.statementToCode(block, 'LABEL');
	var statements_possibilities = Blockly.JavaScript.statementToCode(block, 'POSSIBILITIES');
	// TODO: Assemble JavaScript into code variable.
	statements_label = statements_label.slice(0, statements_label.length - 2);
	statements_possibilities = statements_possibilities.slice(0, statements_possibilities.length - 2);
	var code =
		'{\n' +
		'"labels": [\n' +
		statements_label + '\n' +
		'],\n' +
		'"possibilities": [\n' +
		statements_possibilities + '\n' +
		']\n' +
		'},\n';
	return code;
};
