require('material-design-lite');

import React from 'react'
import { Link } from 'react-router'
import MDLTextField from './../material/components/MDLTextField.jsx'
import MDLLayout from './../material/components/layout/MDLLayout.jsx'
import MDLHeader from './../material/components/layout/MDLHeader.jsx'
import MDLDrawer from './../material/components/layout/MDLDrawer.jsx'
import MDLNavigation from './../material/components/layout/MDLNavigation.jsx'
import MDLButton from './../material/components/MDLButton.jsx'
import MDLSwitch from './../material/components/MDLSwitch.jsx'
import MDLCard from './../material/components/MDLCard.jsx'
import MDLGrid from './../material/components/layout/MDLGrid.jsx'
import MDLCell from './../material/components/layout/MDLCell.jsx'

var ProfileCreationScreen = React.createClass({
    cardsStyle: {
        display: 'inline-block',
        marginLeft: '5px',
        marginTop: '5px'
    },

    render: function() {
        return (
            <MDLLayout style={this.style} fixedHeader>
                <MDLHeader>
                    <h1>Learning Box</h1>
                </MDLHeader>
                <MDLDrawer>
                    <h1>Learning Box</h1>
                    <MDLNavigation>
                        <Link to={`/`}>Accueil</Link>
                    </MDLNavigation>
                </MDLDrawer>
                <main>
                    <MDLCard heading="Éditeur" style={this.cardsStyle}>
                        <div className="card-content">Utilisez l'éditeur pour créer du contenu adapté à votre situation !
                            Facile d'utilisation, vous n'aurez plus jamais à passer des heures à créer du contenu pour
                            vos classes !</div>
                        <div className="card-actions"><MDLButton colored>Accéder à l'éditeur</MDLButton></div>
                    </MDLCard>
                    <MDLCard heading="Galerie" style={this.cardsStyle}>
                        <div className="card-content">Parcourez la galerie de contenu créée par des utilisateurs de la
                            plateforme ! Vous pourrez ensuite adapter le contenu à vos besoins spécifique ou l'utiliser
                            tel quel !</div>
                        <div className="card-actions"><MDLButton colored>Parcourir la galerie</MDLButton></div>
                    </MDLCard>
                </main>
            </MDLLayout>
        );
    }
});

export default ProfileCreationScreen