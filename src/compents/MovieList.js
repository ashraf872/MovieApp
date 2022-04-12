import React from 'react';
import MovieCard from './MovieCard';;

const MovieList = ({films}) => {
    return (
        <div className='movie-list'>
            {films.map((el) => (
               < MovieCard feelm={el}/>
            ))}
        </div>
    )
}

export default MovieList
