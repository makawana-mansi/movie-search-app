import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movie }) => {
    if (movie.length === 0) {
        return <p>No movie found</p>
    }

    return (
        <div className="movie-list">
            {movie.map((movies) => (
                <MovieCard key={(movies.imdbID)} movies={movies} />
            ))}


        </div>
    )
}

export default MovieList