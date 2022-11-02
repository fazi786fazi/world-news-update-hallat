import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">Hallat Update</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-Link text-light mx-3 active " aria-current="page" to="/entertainment">Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-Link" to="/">Link</Link>
              </li> */}
              <li className="nav-item dropdown">
                <Link className="nav-Link text-light dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/business">business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/general">general</Link></li>
                  <li><Link className="dropdown-item" to="/health">health</Link></li>
                  <li><Link className="dropdown-item" to="/science">science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">technology</Link></li>
               
               
                  {/* <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li> */}
                </ul>
              </li>
             
            </ul>
            <form className="d-flex">
              <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
