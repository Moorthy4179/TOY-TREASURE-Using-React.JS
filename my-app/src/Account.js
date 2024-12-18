import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost/project/w5.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched user data:', data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdateDetails = async () => {
    // Update user details in the backend
    const response = await fetch('/api/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert('Details updated successfully');
      setIsEditing(false);
    } else {
      alert('Failed to update details');
    }
  };

  const handleChangePassword = async () => {
    // Change user password in the backend
    const response = await fetch('/api/user/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword }),
    });

    if (response.ok) {
      alert('Password changed successfully');
      setNewPassword('');
    } else {
      alert('Failed to change password');
    }
  };

  const handleLogout = () => {
    // Perform logout logic (e.g., clear auth tokens)
    // Assuming you store auth tokens in localStorage:
    localStorage.removeItem('authToken');
    alert('Logged out');
    navigate('/login'); // Redirect to the login page
  };

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '800px',
      margin: '2rem auto',
    },
    header: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    section: {
      marginBottom: '1.5rem',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      display: 'block',
    },
    text: {
      marginBottom: '0.5rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      border: '1px solid #ccc',
      marginBottom: '0.5rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#4830A8',
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background 0.3s ease-in-out',
      marginBottom: '1rem',
    },
    logoutButton: {
      padding: '0.75rem 1.5rem',
      backgroundColor: '#FF5733',
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor
: 'pointer',
transition: 'background 0.3s ease-in-out',
},
};

return (
<div style={styles.container}>
<h1 style={styles.header}>Account Details</h1>
{userData.name && (
<div style={styles.section}>
<label style={styles.label}>Logged in as:</label>
<p style={styles.text}>{userData.name} ({userData.email})</p>
</div>
)}
{isEditing ? (
<>
<div style={styles.section}>
<label style={styles.label} htmlFor="name">Name:</label>
<input type="text" id="name" style={styles.input} value={userData.name} onChange={handleChange} />
</div>
<div style={styles.section}>
<label style={styles.label} htmlFor="email">Email:</label>
<input type="email" id="email" style={styles.input} value={userData.email} onChange={handleChange} />
</div>
<div style={styles.section}>
<label style={styles.label} htmlFor="phone">Phone Number:</label>
<input type="text" id="phone" style={styles.input} value={userData.phone} onChange={handleChange} />
</div>
<div style={styles.section}>
<label style={styles.label} htmlFor="address">Address:</label>
<textarea id="address" style={styles.input} value={userData.address} onChange={handleChange}></textarea>
</div>
<button style={styles.button} onClick={handleUpdateDetails}>Update Details</button>
<button style={styles.button} onClick={() => setIsEditing(false)}>Cancel</button>
</>
) : (
<>
<div style={styles.section}>
<label style={styles.label}>Name:</label>
<p style={styles.text}>{userData.name}</p>
</div>
<div style={styles.section}>
<label style={styles.label}>Email:</label>
<p style={styles.text}>{userData.email}</p>
</div>
<div style={styles.section}>
<label style={styles.label}>Phone Number:</label>
<p style={styles.text}>{userData.phone}</p>
</div>
<div style={styles.section}>
<label style={styles.label}>Address:</label>
<p style={styles.text}>{userData.address}</p>
</div>
<button style={styles.button} onClick={() => setIsEditing(true)}>Edit</button>
</>
)}
<div style={styles.section}>
<label style={styles.label} htmlFor="newPassword">New Password:</label>
<input type="password" id="newPassword" style={styles.input} value={newPassword} onChange={handlePasswordChange} />
</div>
<button style={styles.button} onClick={handleChangePassword}>Change Password</button>
<button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
</div>
);
};

export default Account;