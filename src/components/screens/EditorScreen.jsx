import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'

var EditorScreen = React.createClass({
    cardsStyle: {
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px'
    },

    createBlocs: function() {
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

        Blockly.Blocks['defih_image'] = {
            init: function() {
                this.appendDummyInput()
                    .setAlign(Blockly.ALIGN_CENTRE)
                    .appendField("Image");
                this.appendDummyInput()
                    .appendField("URL")
                    .appendField(new Blockly.FieldTextInput("http://www.example.com/"), "URL");
                this.setPreviousStatement(true, "DEFIH_OBJECT");
                this.setNextStatement(true, "DEFIH_OBJECT");
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
    },

    workspace: null,

    componentDidMount: function() {
        this.createBlocs();
        var mainContent = document.getElementById('layoutMainContainer');
        var blocklyArea = document.getElementById('blocklyArea');
        var blocklyDiv = document.getElementById('blocklyDiv');
        var onresize = function(e) {
            blocklyArea.height = mainContent.minHeight;

            blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
            blocklyDiv.style.height = blocklyArea.height + 'px';
        };
        window.addEventListener('resize', onresize, false);
        onresize();
        this.workspace = Blockly.inject(blocklyDiv, {
                toolbox: document.getElementById('toolbox'),
                scrollbars: true,
                trashcan: true
            });
        this.workspace.addChangeListener(this.onCodeUpdate);
    },

    onCodeUpdate: function(e) {
        var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        console.log(code);
    },

    render: function() {
        if (this.props.children != null) {
            return this.props.children;
        }

        /*
         <MDLCard heading="Associations" style={this.cardsStyle}>
             <div className="card-content">
                 Mon mini-jeu se base sur des associations d'éléments. Je veux, par exemple, avoir d'un côté des
                 lettres et de l'autre des images les représentant.
             </div>
             <div className="card-actions">
                 <Link to={`/editor/associations`}><MDLButton colored>J'utilise cette base</MDLButton></Link>
             </div>
         </MDLCard>

         */

        return (
            <div>
                <xml id="toolbox" style={{display: 'none'}}>
                    <block type="defih_association_game"></block>
                    <block type="math_number"></block>
                    <block type="defih_associate"></block>
                    <block type="defih_image"></block>
                    <block type="defih_text"></block>
                </xml>
                <div id="blocklyArea">
                    <div id="blocklyDiv" style={{position: 'absolute'}}></div>
                </div>
            </div>
        );
    }
});

export default EditorScreen