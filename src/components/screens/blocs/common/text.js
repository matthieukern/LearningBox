Blockly.Blocks['defih_text'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Texte");
		this.appendDummyInput()
			.appendField(" ")
			.appendField(new Blockly.FieldTextInput("Tapez votre texte ici..."), "TEXT")
			.appendField(" ");
		this.setPreviousStatement(true, "DEFIH_OBJECT");
		this.setNextStatement(true, "DEFIH_OBJECT");
		this.setColour(290);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};

Blockly.JavaScript['defih_text'] = function(block) {
	var text_text = block.getFieldValue('TEXT');
	// TODO: Assemble JavaScript into code variable.
	var code =
		'{\n' +
		'"type": "text",\n' +
		'"value": "' + text_text + '",\n' +
		'},\n';
	return code;
};
