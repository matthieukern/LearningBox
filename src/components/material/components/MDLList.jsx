require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLList = React.createClass({
    render: function() {
        return (
            <ul className="mdl-list" {...this.props}>{this.props.children}</ul>
        );
    }
});

export default MDLList