import React from 'react';

import noImage from '../images/no_image1.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

import { StyledMovieInfo } from '../styles/StyledMovieInfo';
import MovieThumb from './MovieThumb';
import { element } from 'prop-types';

const ActorInfo = ({ actor }) => (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
        <div className="movieinfo-content">
            <div className="movieinfo-thumb">
                <MovieThumb
                    image={
                        movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : noImage
                    }
                    clickable={false}
                />
            </div>
            <div className="movieinfo-text">
                <h1>{movie.title}</h1>
                <h2>{movie.tagline}</h2>
                <h3>Plot</h3>
                <p>{movie.overview}</p>
                <div className="rating-director-writer">
                    <div>
                        <h3>IMDB RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(element =>(
                            <p key={element.credit_id}>{element.name}</p>
                        )
                        )}
                    </div>
                    <div className="writer">
                        <h3>WRITER{movie.writting.length > 1 ? 'S' : ''}</h3>
                        {movie.writting.map(element => (
                            <p key={element.credit_id}>{element.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </StyledMovieInfo>
);


export default MovieInfo;