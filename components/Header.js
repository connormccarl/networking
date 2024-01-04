import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();

  return (
    <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" href="#">Networking</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link className={`nav-link ${router.pathname == "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${router.pathname == "/about" ? "active" : ""}`} href="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${router.pathname == "/events" ? "active" : ""}`} href="/events">Events</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${router.pathname == "/contact" ? "active" : ""}`} href="/contact">Contact</Link>
                </li>
                </ul>
                {/*
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                */}
            </div>
            </div>
        </nav>
    </header>
  )
}
