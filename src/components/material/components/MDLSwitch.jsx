require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLSwitch = React.createClass({
    getDefaultProps: function() {
        return {
            'rippleEffect': true,
            'checked': false,
            'label': ""
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-switch': true,
            'mdl-js-switch': true,
            'mdl-js-ripple-effect': this.props.rippleEffect
        };
        return classnames(classes);
    },

    render: function() {
        return (
            <label className={this._getClasses()} for={this.props.id} {...this.props}>
                <input type="checkbox" id={this.props.id} className="mdl-switch__input" checked={this.props.checked} />
                <span className="mdl-switch__label">{this.props.label}</span>
            </label>
        );
    }
});

export default MDLSwitch