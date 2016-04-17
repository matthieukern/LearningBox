import React from 'react'
import { Link } from 'react-router'

import MDLList from '../material/components/MDLList.jsx'

import GalleryItem from './GalleryItem.jsx'

var GalleryScreen = React.createClass({
		_getItems() {
			var exo = localStorage.getItem('exercises');
			exo = JSON.parse(exo);
			console.log(exo);
			return exo.exercises;
		},

    render: function() {
        return (
            <div>
							<MDLList>
								{this._getItems().map((item) => <GalleryItem key={item.id} exercise={item} />)}
							</MDLList>
            </div>
        );
    }
});

export default GalleryScreen