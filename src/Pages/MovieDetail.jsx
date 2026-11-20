import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`http://www.omdbapi.com/?&apikey=972deb25&i=${id}`)
            const data = await res.json()
            setMovie(data)
            console.log(data);

        }
        getMovie()
    }, [id])

    if (!movie) return <p className='load'>Loading...</p>
    return (
        <div className='px-4 min-h-screen py-5'>
            <div className='text-center w-full max-w-md mx-auto rounded border border-gray-600 mt-5 p-5 sm:p-5 mb-5 transition-all hover:border-green-300'>
                <h2 className='text-xl sm:text-2xl md:text-3xl mb-4'> {movie.Title}</h2>
                <img className='w-full max-w-xs mx-auto rounded object-contain' alt={movie.Title} src={movie.Poster} />
                <p className='rounded border border-gray-600 p-2 mt-2 text-gray-400 hover:text-green-400 transition-all hover:border-green-300' ><strong className='text-lg sm:text-xl text-white'>Genre:</strong>{movie.Genre}</p>
                <p className='rounded border border-gray-600 p-2 mt-2 text-gray-400 hover:text-green-400 transition-all hover:border-green-300 '><strong className='text-lg sm:text-xl text-white'>Released:</strong>{movie.Released}</p>
                <p className='rounded border border-gray-600 p-2 mt-2 hover:border-green-300'><strong className='text-lg sm:text-xl'>Plot : </strong>{movie.Plot}</p>
            </div>
        </div>
    )
}

export default MovieDetail
