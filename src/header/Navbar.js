import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

 class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                <div className="logo">
                <Link className="l" to="/"><img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt="no"/></Link>
                </div>
                <div className="postlink">
                <Link className="l" to="/post">Post</Link>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
