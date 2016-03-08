import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import ReactDOM from 'react-dom'
import MainScreen from './components/screens/MainScreen.jsx'

const rootRoute = {
    component: MainScreen,
    childRoutes: [
        {
            path: '/',
            component: MainScreen,
            childRoutes: []
        }
    ]
};

ReactDOM.render(
    <Router history={hashHistory} routes={rootRoute} />,
    document.getElementById('content')
);
