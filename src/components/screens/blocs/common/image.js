Blockly.Blocks['defih_image'] = {
	init: function() {
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("Image");
		this.appendDummyInput()
			.appendField("URL")
			.appendField(new Blockly.FieldTextInput("http://www.example.com/"), "URL");
		this.setPreviousStatement(true, "Value");
		this.setNextStatement(true, "Value");
		this.setColour(290);
		this.setTooltip('');
		this.setHelpUrl('http://www.example.com/');
	}
};
Blockly.JavaScript['defih_image'] = function(block) {
	var text_url = block.getFieldValue('URL');
	// TODO: Assemble JavaScript into code variable.
	var code =
		'{\n' +
		'"type": "image_url",\n' +
		'"value": "' + text_url + '",\n' +
		'},\n';
	return code;
};
