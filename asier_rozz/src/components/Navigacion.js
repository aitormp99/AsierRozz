import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigacion extends Component {
    render() {
        return (
            
            <nav className="contain">
                <div className="navi">
                    
                        <Link className="navbi-Asier" to="/">
                            <img className= "logo_nav" src="./AR_logo_pequeño.png"></img>
                        </Link>

                        <div className="nav-lista">

                                <a className="nav">
                                    <Link className="na-link" to="/">Home</Link>
                                </a>
                                <a className="nav">
                                    <Link className="na-link" to="/music">Music</Link>
                                </a>
                                <a className="nav">
                                    <Link className="na-link" to="/about">About</Link>
                                </a>
                                
                                
                            
                        </div>
                        </div>
                  </nav>
                
           
        )
    }
}
