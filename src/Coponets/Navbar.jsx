import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <Link className="logo" href="/" >
                    <h2>🎬 Movie Explorer</h2>
                </Link>
                <Link href="/">Home</Link>
            </nav>
        </div>
    )
}

export default Navbar
