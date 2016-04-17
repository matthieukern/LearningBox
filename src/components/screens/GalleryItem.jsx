import React from 'react'
import { Link } from 'react-router'

import MDLItem from '../material/components/MDLItem.jsx'
import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'

var GalleryScreen = React.createClass({
	render: function() {
		const exercise = this.props.exercise;

		return (
			<MDLItem>
				<b>{exercise.name}</b> <Link to={`/editor/${exercise.id}`}><MDLButton colored>Éditer</MDLButton></Link>
			</MDLItem>
		);
	}
});

GalleryScreen.propTypes = {
	exercise: React.PropTypes.object
};

export default GalleryScreen