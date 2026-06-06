import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" style={{borderBottom: "2px solid #6c63ff"}}>
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="/" style={{letterSpacing: "0.5px"}}>
      📰 NewsMonk
    </a>
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
        <li className="nav-item">
          <a className="nav-link active px-3" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar