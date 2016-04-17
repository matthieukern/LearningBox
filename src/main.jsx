import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'

import Layout from './components/screens/Layout.jsx'

import MainScreen from './components/screens/MainScreen.jsx'
import EditorScreen from './components/screens/EditorScreen.jsx'
import GalleryScreen from './components/screens/GalleryScreen.jsx'
import AboutScreen from './components/screens/AboutScreen.jsx'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={MainScreen} />
            <Route path="editor" component={EditorScreen} />
              <Route path="editor/:id" component={EditorScreen}/>
            <Route path="gallery" component={GalleryScreen} />
            <Route path="about" component={AboutScreen} />
        </Route>
    </Router>,
    document.getElementById('content')
);
