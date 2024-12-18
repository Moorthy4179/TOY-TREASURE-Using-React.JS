import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost/project/w5.php');
      setUsers(response.data);
    } catch (error) {
      setError('Error fetching users. Please try again later.');
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost/project/deleteuser.php`, {
        data: { userId: userId }
      });
      console.log('Delete response:', response);
      fetchUsers();
    } catch (error) {
      setError('Error deleting user. Please try again later.');
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '20px',
    backgroundImage: 'url("https://spendmatters-site.s3.amazonaws.com/uploads/2024/01/AdobeStock_600882674-1024x574.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#343a40',
  };

  const tableStyle = {
    backgroundColor: '#ffffff',
    textAlign: 'center',
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const deleteButtonStyle = {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: '#ffffff',
    fontSize: '14px',
    marginRight: '10px',
  };

  const updateButtonStyle = {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: '#ffffff',
    fontSize: '14px',
  };

  const tableHeaderStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headerStyle}>Manage Users</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Table striped bordered hover style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>ID</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Address</th>
              <th style={tableHeaderStyle}>Pincode</th>
              <th style={tableHeaderStyle}>Phone Number</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: 'center' }}>{user.id}</td>
                <td style={{ textAlign: 'center' }}>{user.name}</td>
                <td style={{ textAlign: 'center' }}>{user.email}</td>
                <td style={{ textAlign: 'center' }}>{user.address}</td>
                <td style={{ textAlign: 'center' }}>{user.pincode}</td>
                <td style={{ textAlign: 'center' }}>{user.phoneno}</td>
                <td style={buttonContainerStyle}>
                  <button style={deleteButtonStyle} className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  {/* <button style={updateButtonStyle} className="btn btn-primary btn-sm" onClick={() => handleUpdateUser(user.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageUsers;
