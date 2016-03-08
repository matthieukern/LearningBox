require('material-design-lite');

import React from 'react'
import MDLNavigation from './MDLNavigation.jsx'

var classnames = require('classnames');

var MDLDrawer = React.createClass({
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
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{title.toString()}</span>
                {nav}
            </div>
        );
    }
});

export default MDLDrawer