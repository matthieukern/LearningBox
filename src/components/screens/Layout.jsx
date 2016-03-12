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

var Layout = React.createClass({
    componentDidMount: function() {
        var header = document.getElementById('layoutHeader');
        var main = document.getElementById('layoutMainContainer');
        var content = document.getElementById('layoutPageContent');
        var onresize = function(e) {
            main.minHeight = main.style.minHeight = content.minHeight = content.style.minHeight = window.innerHeight - header.offsetHeight;
        };
        window.addEventListener('resize', onresize, false);
        onresize();
    },

    render: function() {
        return (
            <MDLLayout style={this.style} fixedHeader>
                <MDLHeader id="layoutHeader">
                    <h1><Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>Learning Box</Link></h1>
                    <MDLNavigation>
                        <Link to={`/editor`}>Éditeur</Link>
                        <Link to={`/gallery`}>Galerie</Link>
                    </MDLNavigation>
                </MDLHeader>
                <MDLDrawer>
                    <h1>Learning Box</h1>
                    <MDLNavigation>
                        <Link to={`/`}>Accueil</Link>
                        <Link to={`/editor`}>Éditeur</Link>
                        <Link to={`/gallery`}>Galerie</Link>
                        <Link to={`/about`}>À propos</Link>
                    </MDLNavigation>
                </MDLDrawer>
                <main id="layoutMainContainer">
                    <div id="layoutPageContent" className="page-content">{this.props.children}</div>
                </main>
            </MDLLayout>
        );
    }
});

export default Layout