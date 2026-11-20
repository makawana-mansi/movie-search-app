import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movies }) => {
    return (
        <div className="movie-card">
            <img alt={movies.Title} src={movies.Poster} />
            <h3>{movies.Title}</h3>
            <p>{movies.Year}</p>
            <Link to={`movie/${movies.imdbID}`} className='border-b'>Details</Link>
        </div>
    )
}

export default MovieCard 