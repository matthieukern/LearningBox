var classnames = require('classnames');

export default function(props, classes) {
    classes['mdl-layout--large-screen-only'] = props.largeScreenOnly
    return classnames(classes);
}
