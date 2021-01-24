import React from 'react';
import { Link } from '@reach/router';
import WatcherLogo from '../images/watcher-logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import { StyledHeader, StyledWatcherLogo, StyledTMDBLogo } from '../styles/StyledHeader';

const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/Home/">
                <StyledWatcherLogo src={ WatcherLogo } alt="watcher-logo" />
            </Link>
            <StyledTMDBLogo src={ TMDBLogo } alt="tmdb-logo" />
        </div>
    </StyledHeader>
)

export default Header;