import React, {useEffect, useState} from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import "./Movies.scss"



const Movies = props => {
    const moviesType = props.match.params.movieTypes;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${moviesType}?api_key=API KEY DE LA API&language=es-ES`).then(res => setMovies(res.data.results)).catch(console.error)
    }, [moviesType]);
    return (
        <div className="movies">
            {movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;
