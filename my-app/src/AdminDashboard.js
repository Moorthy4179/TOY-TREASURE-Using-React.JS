import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faShoppingBag, faUsers, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';
const AdminDashboard = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundImage: 'url(https://t4.ftcdn.net/jpg/08/15/93/65/360_F_815936586_OcWXPiomNlA2SMaZq0i2X3ZLELj6iqRb.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const headerStyle = {
    color: '#343a40',
    marginBottom: '40px',
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px 10px 0 0',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    width: '100%',
  };
  const listItemStyle = {
    margin: '20px 0',
    flexBasis: '30%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    padding: '20px',
    textAlign: 'center',
    backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-powder-smoke-colorful-background-image_2164096.jpg)',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  };
  const iconStyle = {
    fontSize: '2rem',
    marginRight: '10px',
    color: '#007bff',
  };
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        <FontAwesomeIcon icon={faDashboard} style={iconStyle} /> ADMIN DASHBOARD
      </h2>
      <ul style={listStyle}>
        {/* <li style={listItemStyle}>
          <Link to="/Home1" style={linkStyle}>
            <FontAwesomeIcon icon={faHome} style={iconStyle} /> Home
          </Link>
        </li> */}
        <li style={listItemStyle}>
          <Link to="/admin/products" style={linkStyle}>
            <FontAwesomeIcon icon={faShoppingBag} style={iconStyle} /> Manage Products
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/admin/users" style={linkStyle}>
            <FontAwesomeIcon icon={faUsers} style={iconStyle} /> Manage Users
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/admin/products/add" style={linkStyle}>
            <FontAwesomeIcon icon={faPlus} style={iconStyle} /> Add New Product
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default AdminDashboard;
