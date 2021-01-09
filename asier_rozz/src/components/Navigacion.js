import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigacion extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    

                        <Link className="navbar-brand" to="/">
                            Asier Rozz
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/music">Music</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                
                            </ul>
                        </div>
                  
                </div>
            </nav>
        )
    }
}
