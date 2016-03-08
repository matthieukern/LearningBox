require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLCard = React.createClass({
    getDefaultProps: function() {
        return {
            'elevation': 1,
            'heading': null
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-card': true,
            'mdl-shadow--2dp': this.props.elevation == 1,
            'mdl-shadow--3dp': this.props.elevation == 2,
            'mdl-shadow--4dp': this.props.elevation == 3,
            'mdl-shadow--6dp': this.props.elevation == 4,
            'mdl-shadow--8dp': this.props.elevation == 5,
            'mdl-shadow--16dp': this.props.elevation == 6
        };
        return classnames(classes);
    },

    _getTitle: function() {
        if (this.props.heading == null)
            return null;

        return (
            <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">{this.props.heading}</h2>
            </div>
        );
    },

    _getContent: function() {
        var content = null;

        React.Children.toArray(this.props.children).forEach(function(elem) {
            if (elem.props.className == 'card-content') {
                content = elem;
            }
        });

        if (content == null)
            return null;

        return (
            <div className="mdl-card__supporting-text">{content}</div>
        );
    },

    _getActions: function() {
        var actions = null;

        React.Children.toArray(this.props.children).forEach(function(elem) {
            if (elem.props.className == 'card-actions') {
                actions = elem;
            }
        });

        if (actions == null)
            return null;

        return (
            <div className="mdl-card__actions mdl-card--border">{actions}</div>
        );
    },

    render: function() {
        return (
            <div className={this._getClasses()} {...this.props}>
                {this._getTitle()}
                {this._getContent()}
                {this._getActions()}
            </div>
        );
    }
});

export default MDLCard