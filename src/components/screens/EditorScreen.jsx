import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'

var EditorScreen = React.createClass({
    cardsStyle: {
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px'
    },

    render: function() {
        if (this.props.children != null) {
            return this.props.children;
        }

        return (
            <div>
                <MDLCard heading="Associations" style={this.cardsStyle}>
                    <div className="card-content">
                        Mon mini-jeu se base sur des associations d'éléments. Je veux, par exemple, avoir d'un côté des
                        lettres et de l'autre des images les représentant.
                    </div>
                    <div className="card-actions">
                        <Link to={`/editor/associations`}><MDLButton colored>J'utilise cette base</MDLButton></Link>
                    </div>
                </MDLCard>
            </div>
        );
    }
});

export default EditorScreen