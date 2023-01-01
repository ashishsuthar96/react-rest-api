import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav(props) {

    let location = useLocation()

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Rest Api</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/addbook" ? "active" : ""}`} to="/addbook">Add Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/addbook" ? "active" : ""}`} to="/upload">upload</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input " type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode==='light'? 'dark' :'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
               
            </div>
        </nav>
    )
}

export default Nav

