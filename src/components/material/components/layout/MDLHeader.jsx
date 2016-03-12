require('material-design-lite');

import React from 'react'
import MDLNavigation from './MDLNavigation.jsx'

var classnames = require('classnames');

var MDLHeader = React.createClass({
    getDefaultProps: function() {
        return {
            scroll: false,
            transparent: false
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-layout__header': true,
            'mdl-layout__header--scroll': this.props.scroll,
            'mdl-layout__header--transparent': this.props.transparent
        };
        return classnames(classes);
    },

    render: function() {
        var title = "", nav = null;

        React.Children.toArray(this.props.children).forEach(function(elem) {
            var type = elem.type;
            if (type == "h1") {
                title = elem.props.children;
            } else if (type == MDLNavigation) {
                nav = elem;
            }
        });

        return (
            <header className={this._getClasses()} {...this.props}>
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{title}</span>
                    <div className="mdl-layout-spacer"></div>
                    {nav}
                </div>
            </header>
        );
    }
});

export default MDLHeader