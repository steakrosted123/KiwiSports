import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, fire } from "../../firebase";
import { signOut } from "firebase/auth";
import { Button } from "reactstrap";
const Navigation = (props) => {
  const logout = () => {
    signOut(auth);
  };
  // const [isActive, setisActive] = useState(second)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 text-light py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand h1" to="/" style={{ color: "orange" }}>
          REMEDY
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {props.name ? <NavLink to="listings" className="nav-link">
                Feedback
              </NavLink> : <NavLink to="login" className="nav-link">
                Feedback
              </NavLink>}
            </li>
            <li className="nav-item">
              {props.name ? <NavLink to="/Work" className="nav-link">
                Work Details
              </NavLink> : <NavLink to="/login" className="nav-link">
                Work Details
              </NavLink>}

            </li>
            <li className="nav-item">

              {props.name ? <NavLink to="new" className="nav-link btn text-light" style={{ backgroundColor: "orange" }}>
                Problem Details
              </NavLink> : <NavLink to="login" className="nav-link btn text-light" style={{ backgroundColor: "orange" }}>
                Problem Details
              </NavLink>}
            </li>

            <li className="nav-item dropdown mr-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"

              >
                My Account
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  {props.name ? ` ${props.name}` : <NavLink to="login" className="dropdown-item">
                    Login
                  </NavLink>}

                </li>
                <li>

                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <em />
                <li>
                  <NavLink to="/profile" className="dropdown-item">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
          {props.name ? <Button className="logot-btn" style={{listStyleType: "none"}}onClick={logout}>Logout</Button> : " "}
      </div>
    </nav>
  );
};
export default Navigation;
