import React from 'react'
import ReactDOM from 'react-dom'

var toolboxXml = (
	<xml>
		<category name="Associations">
			<block type="defih_association_game">
				<value name="LEFT_NUMBER">
					<block type="math_number">
						<field name="NUM">1</field>
					</block>
				</value>
				<value name="RIGHT_NUMBER">
					<block type="math_number">
						<field name="NUM">5</field>
					</block>
				</value>
			</block>
			<block type="defih_associate" />
			<block type="defih_image" />
			<block type="defih_text" />
		</category>
	</xml>
);

export function initBlocs() {
	require('./association/associationgame');
	require('./association/associate');
	require('./common/image');
	require('./common/text');
}

export function getToolboxXML() {
	var div = document.createElement('div');
	ReactDOM.render(toolboxXml, div);
	return div.innerHTML;
}
