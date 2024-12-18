import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faShoppingCart, faEnvelope, faMobileAlt, faChild, faBook, faTree, faSpinner, faChess, faSignOutAlt, faSearch
} from '@fortawesome/free-solid-svg-icons';

const Navbar1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logged out');
    navigate('/login'); // Redirect to the login page
  };

  const handleSearch = (event) => {
    event.preventDefault();
    highlightAndScroll(searchQuery);
  };

  const highlightAndScroll = (text) => {
    if (!text) return;

    // Remove existing highlights
    document.querySelectorAll('.highlight').forEach(el => {
      el.classList.remove('highlight');
    });

    const regExp = new RegExp(`(${text})`, 'gi');
    const elements = document.querySelectorAll('body *');

    elements.forEach(element => {
      if (element.children.length === 0 && regExp.test(element.textContent)) {
        const highlightedText = element.innerHTML.replace(regExp, '<mark class="highlight">$1</mark>');
        element.innerHTML = highlightedText;
      }
    });

    // Scroll to the first highlighted element
    const firstHighlight = document.querySelector('.highlight');
    if (firstHighlight) {
      firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const styles = {
    navbar: {
      background: 'linear-gradient(90deg, rgba(72,72,168,1) 0%, rgba(34,193,195,1) 100%)',
      padding: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '0.5rem',
    },
    brand: {
      color: '#fff',
      fontSize: '1.5rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s ease-in-out',
      '&:hover': {
        color: '#ffdc00',
      },
    },
    toggler: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    icon: {
      marginRight: '0.5rem',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.25rem',
      transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#ffdc00',
      },
    },
    dropdownToggle: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: '0.25rem',
      transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#ffdc00',
      },
    },
    dropdownMenu: {
      backgroundColor: '#444',
      border: 'none',
      borderRadius: '0.25rem',
      marginTop: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    dropdownItem: {
      color: '#fff',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.25rem',
      transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: '#ffdc00',
      },
    },
    searchForm: {
      display: 'flex',
      alignItems: 'center',
    },
    searchInput: {
      borderRadius: '0.25rem',
      border: 'none',
      padding: '0.5rem',
      marginRight: '0.5rem',
    },
    searchButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: 'none',
      borderRadius: '0.25rem',
      padding: '0.5rem 1rem',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#ffdc00',
      },
    },
  };

  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <div className="container-fluid">
        <div className="navbar-brand" to="/" style={styles.brand}>
          ToyTreasure
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={styles.toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home1" style={styles.link}>
                <FontAwesomeIcon icon={faHome} style={styles.icon} /> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={styles.dropdownToggle}
              >
                Categories
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={styles.dropdownMenu}>
                <Link className="dropdown-item" to="/electronic-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faMobileAlt} style={styles.icon} /> Electronic Toys
                </Link>
                <Link className="dropdown-item" to="/plush-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faChild} style={styles.icon} /> Plush Toys
                </Link>
                <Link className="dropdown-item" to="/educational-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faBook} style={styles.icon} /> Educational Toys
                </Link>
                <Link className="dropdown-item" to="/outdoor-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faTree} style={styles.icon} /> Outdoor Toys
                </Link>
                <Link className="dropdown-item" to="/fidget-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faSpinner} style={styles.icon} /> Fidget Toys
                </Link>
                <Link className="dropdown-item" to="/board-toys" style={styles.dropdownItem}>
                  <FontAwesomeIcon icon={faChess} style={styles.icon} /> Board Games
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" style={styles.link}>
                <FontAwesomeIcon icon={faEnvelope} style={styles.icon} /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={styles.link}>
                <FontAwesomeIcon icon={faShoppingCart} style={styles.icon} /> Cart
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleLogout} style={styles.link}>
                <FontAwesomeIcon icon={faSignOutAlt} style={styles.icon} /> Logout
              </div>
            </li>
          </ul>
          <form className="d-flex ms-3" onSubmit={handleSearch} style={styles.searchForm}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <button className="btn btn-outline-success" type="submit" style={styles.searchButton}>
              <FontAwesomeIcon icon={faSearch} style={styles.icon} /> 
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
