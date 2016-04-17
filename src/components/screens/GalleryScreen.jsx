import React from 'react'
import { Link } from 'react-router'

import MDLList from '../material/components/MDLList.jsx'

import GalleryItem from './GalleryItem.jsx'

var GalleryScreen = React.createClass({
		_getItems() {
			return [
				{
					title: 'Exercise 1',
					id: 'id1'
				},
				{
					title: 'Exercise 2',
					id: 'id2'
				},
				{
					title: 'Exercise 3',
					id: 'id3'
				},
				{
					title: 'Exercise 4',
					id: 'id4'
				},
				{
					title: 'Exercise 5',
					id: 'id5'
				},
			]
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