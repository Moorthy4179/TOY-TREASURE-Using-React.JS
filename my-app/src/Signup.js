import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneno, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      // Perform the signup API call using GET method with query parameters
      const response = await axios.get('http://localhost/project/signup.php', {
        params: {
          name,
          email,
          address,
          pincode,
          phoneno,
          password,
        },
      });

      // If signup is successful, redirect to the login page
      if (response.data.success) {
        alert('Signup successful. Please login.');
        navigate('/login');
      } else {
        alert(`Signup failed. ${response.data.message}`);
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup successful. Please login.');
      navigate('/login');
    }
  };

  const styles = {
    container: {
      backgroundImage: 'url(https://img.freepik.com/premium-vector/gradient-design-shapes-dark-background_23-2148409686.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      padding: '2rem',
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    title: {
      textAlign: 'center',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSignup}>
          <h2 style={styles.title}>SIGN UP</h2>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name:</strong></label>
            <input 
              type="text" 
              autoComplete="off" 
              placeholder="Enter Name" 
              className="form-control rounded-0 border border-dark" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email:</strong></label>
            <input 
              type="email" 
              autoComplete="off" 
              placeholder="Enter Email" 
              className="form-control rounded-0 border border-dark" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address"><strong>Address:</strong></label>
            <input 
              type="text" 
              autoComplete="off" 
              placeholder="Enter Address" 
              className="form-control rounded-0 border border-dark" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pincode"><strong>Pincode:</strong></label>
            <input 
              type="text" 
              autoComplete="off" 
              placeholder="Enter Pincode" 
              className="form-control rounded-0 border border-dark" 
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneno"><strong>Phone Number:</strong></label>
            <input 
              type="text" 
              autoComplete="off" 
              placeholder="Enter Phone Number" 
              className="form-control rounded-0 border border-dark" 
              value={phoneno}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password:</strong></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              className="form-control rounded-0 border border-dark" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword"><strong>Confirm Password:</strong></label>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="form-control rounded-0 border border-dark" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-100 btn btn-success rounded-0">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
