import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" >Reacting</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <NavLink exact activeClassName="active-link" to="/"> {/* NavLink insted of Link gets active class automaticallyh  ac.to route with active-link class in app.css  */}
                            <li className="nav-item">
                                <span className="nav-link" aria-current="page" >Home</span>
                            </li>
                           </NavLink>
                           <NavLink exact activeClassName="active-link" to="/hello">
                            <li className="nav-item">
                                <span className="nav-link" >Hello</span>
                            </li>
                           </NavLink>
                           <NavLink exact activeClassName="active-link" to="/hook">
                            <li className="nav-item">
                                <span className="nav-link" >Hook</span>
                            </li>
                           </NavLink>
                           <NavLink exact activeClassName="active-link" to="/useeffect">
                            <li className="nav-item">
                                <span className="nav-link" >UseEffect</span>
                            </li>
                           </NavLink>
                           <NavLink exact activeClassName="active-link" to="/useeffectapi">
                            <li className="nav-item">
                                <span className="nav-link" >UseEffectWithAPI</span>
                            </li>
                           </NavLink>
                           <NavLink exact activeClassName="active-link" to="/todo">
                            <li className="nav-item">
                                <span className="nav-link" >To Do App</span>
                            </li>
                           </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
