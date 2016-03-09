import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../../material/components/MDLButton.jsx'

var AssociationItem = React.createClass({
    buttonStyle: {
        marginRight: '5px',
        marginBottom: '5px',
        height: 'auto',
        padding: '5px'
    },

    _getAssociates: function() {
        return this.props.items[this.props.params.itemId].associates;
    },

    _getContainer: function() {
        var items = [];

        for (var i in this._getAssociates()) {
            items[i] = <MDLButton raised style={this.buttonStyle}>{this._getAssociates()[i]}</MDLButton>
        }

        return items;
    },

    render: function() {
        return (
            <div>
                {this._getContainer()}
                <MDLButton primaryColor style={{width: '100%'}}>Ajouter un élément</MDLButton>
            </div>
        )
    }
});

export default AssociationItem