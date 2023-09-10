import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return <>

        <nav className="navbar navbar-expand-sm fixed-top py-4">
            <div className="container">
                <Link className="navbar-brand text-white fw-bolder text-uppercase fs-2" to='home'>Start Framework</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link nav-color rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                : "nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} to='about'>About</NavLink>
                        </li>

                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link nav-color rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                : "nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} to='portfolio'>Portfolio</NavLink>
                        </li>

                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link nav-color rounded-3 text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                : "nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"} to='contact'>Contact</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>


    </>
}
