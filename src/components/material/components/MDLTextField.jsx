require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLTextField = React.createClass({
    getDefaultProps: function() {
        return {
            type: "text",
            floatingLabel: false,
            label: "",
            errorMessage: "",
            required: false,
            disabled: false
        };
    },

    _getClasses: function() {
        var classes = {
            "mdl-textfield": true,
            "mdl-js-textfield": true,
            "mdl-textfield--floating-label": this.props.floatingLabel
        };
        return classnames(classes);
    },

    onChange: function(a, b, c) {
        if (this.props.onChange)
            this.props.onChange(a, b, c);
    },

    componentDidMount: function() {
        componentHandler.upgradeElement(ReactDOM.findDOMNode(this.refs.textField));
    },

    render: function() {
        return (
            <div className={this._getClasses()} ref="textField" {...this.props}>
                <input className="mdl-textfield__input"
                       id={this.props.id}
                       type={this.props.type}
                       pattern={this.props.pattern}
                       defaultValue={this.props.defaultValue}
                       value={this.props.value}
                       name={this.props.name}
                       disabled={this.props.disabled}
                       required={this.props.required}
                       onChange={this.onChange} />
                <label className="mdl-textfield__label" for={this.props.id}>{this.props.label}</label>
                <span className="mdl-textfield__error">{this.props.errorMessage}</span>
            </div>
        );
    }
});

export default MDLTextField