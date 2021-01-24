import React from 'react';
import { Router } from '@reach/router';

import Dashboard from './Dashboard';
import Header from './elements/Header';
import MovieDashboard from './MovieDashboard';
import Movie from './Movie';
import NotFound from './NotFound';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
    <>
        <Header />
        <Router>
            <Dashboard path="/Dashboard/"></Dashboard>
            <MovieDashboard path="/Home/" />
            <Movie path="/Home/:movieId" />
            <NotFound default />
        </Router>
        <GlobalStyle />
    </>
)

export default App;
