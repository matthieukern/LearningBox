import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'
import GameScene from './GameScene.jsx'
import Engine from '../../engine/engine'
import { initBlocs, getToolboxXML } from './blocs/blocs.jsx'

var EditorScreen = React.createClass({
    workspace: null,

    componentDidMount: function() {
		initBlocs();
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
                toolbox: getToolboxXML(),
                scrollbars: true,
                trashcan: true
            });
        this.workspace.addChangeListener(this.onCodeUpdate);

		// TODO: Remove this debug...
//		if (localStorage.getItem('debug_blocs_xml')) {
//			var xml_text = localStorage.getItem('debug_blocs_xml');
//			var xml = Blockly.Xml.textToDom(xml_text);
//			Blockly.Xml.domToWorkspace(this.workspace, xml);
//		}

        console.log("params");
        console.log(this.props.params);
        if (this.props.params.id)
        {
            console.log("params");
            console.log(this.props.params);
            var exo = localStorage.getItem('exercises');
            exo = JSON.parse(exo);
            for (var i = 0; i < exo.exercises.length; ++i)
            {
                if (exo.exercises[i].id == this.props.params.id)
                {
                    var xml = Blockly.Xml.textToDom(exo.exercises[i].data);
        			Blockly.Xml.domToWorkspace(this.workspace, xml);
                }
            }

        }

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

    hash: function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
    },

    updateExo: function(exercises, exo, id, name) {
        for (var i = 0; i < exercises.exercises.length; ++i)
        {
            if (exercises.exercises[i].id == id)
            {
                exercises.exercises[i].data = exo;
                exercises.exercises[i].name = name;
                return;
            }
        }
        id = name + (new Date().getTime());
        id = this.hash(id);
        exercises.exercises.push({name: name, id : id, data : exo});
        this.props.params.id = id;
    },
    onCodeUpdate: function() {

		Engine.gameData = Blockly.JavaScript.workspaceToCode(this.workspace);

		var xml = Blockly.Xml.workspaceToDom(this.workspace);
		var xml_text = Blockly.Xml.domToText(xml);
        var exo = localStorage.getItem('exercises');
        exo = JSON.parse(exo);
        if (exo == null) {
            exo = {exercises: []};
        }
        this.updateExo(exo, xml_text,this.props.params.id , xml.firstChild.firstChild.firstChild.nodeValue);
        console.log(exo);
        localStorage.setItem('exercises', JSON.stringify(exo));
//		localStorage.setItem('debug_blocs_xml', xml_text);
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