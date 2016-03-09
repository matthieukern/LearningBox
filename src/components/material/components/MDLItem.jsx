require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLItem = React.createClass({
    render: function() {
        return (
            <li className="mdl-list__item" {...this.props}>
                <span className="mdl-list__item-primary-content">{this.props.children}</span>
            </li>
        );
    }
});

export default MDLItem