require('material-design-lite');

import React from 'react'
import MDLParameters from '../../utils/MDLParameters.jsx'

var MDLNavigation = React.createClass({
    _getClasses: function() {
        return MDLParameters(this.props, {
            'mdl-navigation': true
        });
    },

    handleClick: function() {
        console.log("bite");
    },

    render: function() {
        return (
            <nav className={this._getClasses()}>
                {React.Children.map(this.props.children, (child) => React.cloneElement(child, {
                    className: (child.props.className ? child.props.className : "") + " mdl-navigation__link"
                }))}
            </nav>
        );
    }
});

export default MDLNavigation