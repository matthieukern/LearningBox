Blockly.Blocks['defih_association_game'] = {
	init: function() {
		this.appendValueInput("LEFT_NUMBER")
			.setCheck("Number")
			.appendField("Associer");
		this.appendValueInput("RIGHT_NUMBER")
			.setCheck("Number")
			.appendField("éléments de gauche à");
		this.appendDummyInput()
			.appendField("de droite");
		this.appendStatementInput("ASSOCIATIONS")
			.setCheck("DEFIH_ASSOCIATE")
			.appendField("parmi");
		this.setInputsInline(true);
		this.setColour(120);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['defih_association_game'] = function(block) {
	var value_left_number = Blockly.JavaScript.valueToCode(block, 'LEFT_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
	var value_right_number = Blockly.JavaScript.valueToCode(block, 'RIGHT_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_associations = Blockly.JavaScript.statementToCode(block, 'ASSOCIATIONS');
	// TODO: Assemble JavaScript into code variable.
	statements_associations = statements_associations.slice(0, statements_associations.length - 2);
	var code =
		'{\n' +
		'"leftNumber": ' + value_left_number + ',\n' +
		'"rightNumber": ' + value_right_number + ',\n' +
		'"associations": [\n' +
		statements_associations + '\n' +
		']\n' +
		'}';
	return code;
};
