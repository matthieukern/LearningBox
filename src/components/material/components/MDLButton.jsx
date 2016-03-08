require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLButton = React.createClass({
    getDefaultProps: function() {
        return {
            'fab': false,
            'colored': false,
            'rippleEffect': true,
            'disabled': false,
            'raised': false,
            'accentColor': false,
            'primaryColor': false,
            'miniFab': false,
            'icon': false
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-button': true,
            'mdl-js-button': true,
            'mdl-button--raised': this.props.raised,
            'mdl-button--fab': this.props.fab,
            'mdl-button--mini-fab': this.props.miniFab,
            'mdl-button--icon': this.props.icon,
            'mdl-button--colored': this.props.colored,
            'mdl-button--primary': this.props.primaryColor,
            'mdl-button--accent': this.props.accentColor,
            'mdl-js-ripple-effect': this.props.rippleEffect,
            'mdl-button--disabled': this.props.disabled
        };
        return classnames(classes);
    },

    render: function() {
        if (this.props.icon)
            return (
                <button className={this._getClasses()} {...this.props}>
                    <i className="material-icons">{this.props.children}</i>
                </button>
            );
        return (<button className={this._getClasses()} {...this.props}>{this.props.children}</button>);
    }
});

export default MDLButton