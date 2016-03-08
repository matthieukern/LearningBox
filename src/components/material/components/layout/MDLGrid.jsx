require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLGrid = React.createClass({
    getDefaultProps: function() {
        return {
            'noSpacing': false
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-grid': true,
            'mdl-grid--no-spacing': this.props.noSpacing
        };
        return classnames(classes);
    },

    render: function() {
        return (
            <div className={this._getClasses()} {...this.props}>{this.props.children}</div>
        );
    }
});

export default MDLGrid