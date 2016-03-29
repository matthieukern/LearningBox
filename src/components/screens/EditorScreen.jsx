import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'
import GameScene from './GameScene.jsx'
import { gameSourceCodeChanged } from '../../engine/engine'

var EditorScreen = React.createClass({
    cardsStyle: {
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px'
    },

    getToolboxXml: function() {
        return (
            '<xml>' +
                '<category name="Associations">' +
                    '<block type="exercises" />' +
                    '<block type="associateonetoone" />' +
                    '<block type="defih_image" />' +
                    '<block type="defih_text" />' +
                '</category>' +
            '</xml>'
        );
    },

    createBlocs: function() {
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

        Blockly.Blocks['defih_text'] = {
            init: function() {
                this.appendDummyInput()
                    .setAlign(Blockly.ALIGN_CENTRE)
                    .appendField("Texte");
                this.appendDummyInput()
                    .appendField(" ")
                    .appendField(new Blockly.FieldTextInput("Tapez votre texte ici..."), "TEXT")
                    .appendField(" ");
                this.setPreviousStatement(true, "Value");
                this.setNextStatement(true, "Value");
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
    },

    workspace: null,

    componentDidMount: function() {
        this.createBlocs();
        var mainContent = document.getElementById('layoutMainContainer');
        var blocklyArea = document.getElementById('blocklyArea');
        var blocklyDiv = document.getElementById('blocklyDiv');

        var onresize = function(e) {
            blocklyArea.height = mainContent.minHeight;

            blocklyDiv.style.width = window.innerWidth - document.getElementById('gameScene').clientWidth + 'px';
            blocklyDiv.style.height = blocklyArea.height + 'px';
        };
        window.addEventListener('resize', onresize, false);
        onresize();
        this.workspace = Blockly.inject(blocklyDiv, {
                toolbox: this.getToolboxXml(),
                scrollbars: true,
                trashcan: true
            });
        this.workspace.addChangeListener(this.onCodeUpdate);

        var blocklyToolboxDiv = document.getElementsByClassName('blocklyToolboxDiv')[0];
        var blocklyTooltipDiv = document.getElementsByClassName('blocklyTooltipDiv')[0];
        var blocklyWidgetDiv = document.getElementsByClassName('blocklyWidgetDiv')[0];

        if (blocklyToolboxDiv)
            blocklyToolboxDiv.style.zIndex = 1;

        if (blocklyTooltipDiv)
            blocklyTooltipDiv.style.zIndex = 1;

        if (blocklyWidgetDiv)
            blocklyWidgetDiv.style.zIndex = 1;
    },

    onCodeUpdate: function(e) {
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
		gameSourceCodeChanged(code);
    },

	_showGameScene: function() {
		console.log('game scene');
	},

    render: function() {
        return (
            <div>
				<div id="gameScene" style={{width: '40%', position: 'fixed', height: '100%', left: 0, top: 64}}>
					<div style={{height: '100%'}}>
						<GameScene />
					</div>
				</div>
                <div id="blocklyArea" style={{marginLeft: '40%'}}>
                    <div id="blocklyDiv" style={{position: 'absolute'}}></div>
                </div>
            </div>
        );
    },

    componentWillUnmount: function() {
        var blocklyToolboxDiv = document.getElementsByClassName('blocklyToolboxDiv')[0];
        var blocklyTooltipDiv = document.getElementsByClassName('blocklyTooltipDiv')[0];
        var blocklyWidgetDiv = document.getElementsByClassName('blocklyWidgetDiv')[0];

        if (blocklyToolboxDiv)
            document.body.removeChild(blocklyToolboxDiv);

        if (blocklyTooltipDiv)
            document.body.removeChild(blocklyTooltipDiv);

        if (blocklyWidgetDiv)
            document.body.removeChild(blocklyWidgetDiv);

        this.workspace = null;
    }
});

export default EditorScreen