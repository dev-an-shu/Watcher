import React from 'react';
import { Link } from '@reach/router';

import { StyledCategories } from '../styles/StyledCategories';

const Categories = ({ movie }) => (
    <StyledCategories>
        <div className="categories-content">
            <Link to="/">
                <p>Home</p>
            </Link>
            <p>|</p>
            <p>{ movie }</p>
        </div>
    </StyledCategories>
);


export default Categories;