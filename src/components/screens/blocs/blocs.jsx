import React from 'react'
import ReactDOM from 'react-dom'

var toolboxXml = (
	<xml>
		<category name="Associations">
			<block type="exercises" />
			<block type="associateonetoone" />
			<block type="defih_image" />
			<block type="defih_text" />
		</category>
	</xml>
);

export function initBlocs() {
	require('./common/image');
	require('./common/text');
	require('./common/exercises');
	require('./exercises/association/associationonetoone');
}

export function getToolboxXML() {
	var div = document.createElement('div');
	ReactDOM.render(toolboxXml, div);
	return div.innerHTML;
}
