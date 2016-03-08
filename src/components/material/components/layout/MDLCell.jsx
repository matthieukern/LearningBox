require('material-design-lite');

import React from 'react'
import ReactDOM from 'react-dom'

var classnames = require('classnames');

var MDLCell = React.createClass({
    getDefaultProps: function() {
        return {
            'cols': null,
            'desktopCols': null,
            'tabletCols': null,
            'phoneCols': null,

            'offset': null,
            'desktopOffset': null,
            'tabletOffset': null,
            'phoneOffset': null,

            'order': null,
            'desktopOrder': null,
            'tabletOrder': null,
            'phoneOrder': null,

            'hideOnDesktop': false,
            'hideOnTablet': false,
            'hideOnPhone': false,

            'stretch': false,
            'align': null
        };
    },

    _getClasses: function() {
        var classes = {
            'mdl-cell': true,
            'mdl-cell--stretch': this.props.stretch,
            'mdl-cell--hide-desktop': this.props.hideOnDesktop,
            'mdl-cell--hide-tablet': this.props.hideOnTablet,
            'mdl-cell--hide-phone': this.props.hideOnPhone
        };

        if (this.props.cols != null)
            classes['mdl-cell--' + this.props.cols + '-col'] = true;
        if (this.props.desktopCols != null)
            classes['mdl-cell--' + this.props.cols + '-col-desktop'] = true;
        if (this.props.tabletCols != null)
            classes['mdl-cell--' + this.props.cols + '-col-tablet'] = true;
        if (this.props.phoneCols != null)
            classes['mdl-cell--' + this.props.cols + '-col-phone'] = true;

        if (this.props.offset != null)
            classes['mdl-cell--' + this.props.offset + '-offset'] = true;
        if (this.props.desktopOffset != null)
            classes['mdl-cell--' + this.props.desktopOffset + '-offset-desktop'] = true;
        if (this.props.tabletOffset != null)
            classes['mdl-cell--' + this.props.tabletOffset + '-offset-tablet'] = true;
        if (this.props.phoneOffset != null)
            classes['mdl-cell--' + this.props.phoneOffset + '-offset-phone'] = true;

        if (this.props.order != null)
            classes['mdl-cell--order-' + this.props.order] = true;
        if (this.props.desktopOrder != null)
            classes['mdl-cell--order-' + this.props.order + '-desktop'] = true;
        if (this.props.tabletOrder != null)
            classes['mdl-cell--order-' + this.props.order + '-tablet'] = true;
        if (this.props.phoneOrder != null)
            classes['mdl-cell--order-' + this.props.order + '-phone'] = true;

        return classnames(classes);
    },

    render: function() {
        return (
            <div className={this._getClasses()} {...this.props}>{this.props.children}</div>
        );
    }
});

export default MDLCell