import React from "react";
import './movie.scss'


const Movie = ({movie}) => {
    return (
        <div className="movie">
            <h4>{movie.title}</h4>
            <img src={'https://image.tmdb.org/t/p/w200'+movie.poster_path} alt={movie.title}/>
            <p>Popularity: {movie.popularity}</p>
            <p>Vote Average: {movie.vote_average}</p>
        </div>
    )
};
export default Movie;
