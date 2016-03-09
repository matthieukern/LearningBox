import React from 'react'
import { Link } from 'react-router'

import MDLButton from './../material/components/MDLButton.jsx'
import MDLCard from './../material/components/MDLCard.jsx'

var MainScreen = React.createClass({
    cardsStyle: {
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px'
    },

    render: function() {
        return (
            <div>
                <MDLCard heading="Éditeur" style={this.cardsStyle}>
                    <div className="card-content">
                        Utilisez l'éditeur pour créer du contenu adapté à votre situation !
                        Facile d'utilisation, vous n'aurez plus jamais à passer des heures à créer du contenu pour
                        vos classes !
                    </div>
                    <div className="card-actions">
                        <Link to={`/editor`}><MDLButton colored>Accéder à l'éditeur</MDLButton></Link>
                    </div>
                </MDLCard>
                <MDLCard heading="Galerie" style={this.cardsStyle}>
                    <div className="card-content">
                        Parcourez la galerie de contenu créée par des utilisateurs de la
                        plateforme ! Vous pourrez ensuite adapter le contenu à vos besoins spécifique ou l'utiliser
                        tel quel !
                    </div>
                    <div className="card-actions">
                        <Link to={`/gallery`}><MDLButton colored>Parcourir la galerie</MDLButton></Link>
                    </div>
                </MDLCard>
            </div>
        );
    }
});

export default MainScreen