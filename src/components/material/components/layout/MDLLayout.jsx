require('material-design-lite');

import React from 'react'
import MDLHeader from './MDLHeader.jsx'
import MDLDrawer from './MDLDrawer.jsx'

var classnames = require('classnames');

var MDLLayout = React.createClass({
    _getClasses: function() {
        var classes = {
            'mdl-layout': true,
            'mdl-js-layout': true,
            'mdl-layout--fixed-header': this.props.fixedHeader,
            'mdl-layout--fixed-drawer': this.props.fixedDrawer
        };
        return classnames(classes);
    },

    render: function() {
        var header = null, drawer = null, content = null;

        React.Children.toArray(this.props.children).forEach(function(elem) {
            var type = elem.type;
            if (type == MDLHeader) {
                header = elem;
            } else if (type == MDLDrawer) {
                drawer = elem;
            } else if (type == "main") {
                content = elem;
            }
        });

        if (header != null)
            header = React.cloneElement(header, {
                scroll: !this.props.fixedHeader
            });

        return (
            <div className={this._getClasses()} {...this.props}>
                {header}
                {drawer}
                {content}
            </div>
        );
    }
});

export default MDLLayout