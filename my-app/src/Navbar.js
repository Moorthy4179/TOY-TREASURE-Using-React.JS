import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faEnvelope, faMobileAlt, faTv, faChild, faBook, faTree, faSpinner, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ToyTreasure
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <FontAwesomeIcon icon={faTv} /> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/electronic-toys">
                <FontAwesomeIcon icon={faMobileAlt} /> Electronic Toys
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/plush-toys">
                <FontAwesomeIcon icon={faChild} /> Plush Toys
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/educational-toys">
                <FontAwesomeIcon icon={faBook} /> Educational Toys
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/outdoor-toys">
                <FontAwesomeIcon icon={faTree} /> Outdoor Toys
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fidget-toys">
                <FontAwesomeIcon icon={faSpinner} /> Fidget Toys
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
