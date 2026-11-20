import React, { useEffect, useRef, useState } from 'react'
import MovieList from '../Coponets/MovieList'

const Home = () => {
    const [movie, setMovie] = useState([])
    const [loding, setLoding] = useState(false)
    const inputRef = useRef()


    const fetchMovie = async (query) => {
        setLoding(true)
        const res = await fetch(`https://www.omdbapi.com/?&apikey=972deb25&s=${query}`)
        const data = await res.json()
        console.log(data);

        setMovie(data.Search || [])
        setLoding(false)
    }

    useEffect(() => {
        fetchMovie('Nancy Drew')
    }, [])

    const hendleSubmit = (e) => {
        e.preventDefault()
        const query = inputRef.current.value.trim()
        if (query) fetchMovie(query)


    }

    return (
        <div className="home">
            <form onSubmit={hendleSubmit}>
                <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
                <button type="submit">Search 🔎</button>
            </form>
            {loding ? <p className='load'>Loading...</p> : <MovieList movie={movie} />}

        </div>
    )
}

export default Home