import React from 'react'
import { Link } from 'react-router'

import MDLGrid from './../../material/components/layout/MDLGrid.jsx'
import MDLCell from './../../material/components/layout/MDLCell.jsx'
import MDLButton from './../../material/components/MDLButton.jsx'
import MDLList from './../../material/components/MDLList.jsx'
import MDLItem from './../../material/components/MDLItem.jsx'

var EditorAssociationsGameScreen = React.createClass({
    buttonStyle: {
        marginRight: '5px',
        marginBottom: '5px'
    },

    _elems: [
        {
            'name': 'A',
            'display': 'A',
            'associates': [
                <img src="https://www.selecta-spielzeug.de/var/selecta/storage/images/produkte/kindertraeume/deko/alphabet_a/4814-10-ger-DE/alphabet_a_large.jpg" width="200" height="200" />,
                <img src="https://pixabay.com/static/uploads/photo/2013/07/12/16/01/alphabet-150764_960_720.png" width="200" height="200" />
            ]
        },
        {
            'name': 'B',
            'display': 'B',
            'associates': [

            ]
        },
        {
            'name': 'C',
            'display': 'C',
            'associates': [

            ]
        },
        {
            'name': 'D',
            'display': 'D',
            'associates': [

            ]
        },
    ],

    _getLeftElems: function() {
        var elems = [];
        for (var i in this._elems) {
            elems[i] =
                <Link to={`/editor/associations/` + i} key={i}>
                    <MDLButton raised accentColor style={this.buttonStyle}>{this._elems[i].display}</MDLButton>
                </Link>
        }
        return elems;
    },

    _getRightContainer: function() {
        if (this.props.children != null)
            return React.cloneElement(this.props.children, {items: this._elems});
        return null;
    },

    render: function() {
        return (
            <MDLGrid style={{height: '100%'}}>
                <MDLCell cols="6">
                    {this._getLeftElems()}
                    <MDLButton primaryColor style={{width: '100%'}}>Ajouter un élément</MDLButton>
                </MDLCell>
                <MDLCell cols="6">
                    {this._getRightContainer()}
                </MDLCell>
            </MDLGrid>
        );
    }
});

export default EditorAssociationsGameScreen
