import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost/project/login.php', {
        params: {
          email,
          password,
        },
      });
  
      if (response.data.success) {
        if (email === 'admin@gmail.com') {
          navigate('/admin');
        } else {
          navigate('/Home1');
        }
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };
  

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const styles = {
    container: {
      backgroundImage: 'url(https://t3.ftcdn.net/jpg/01/22/71/96/360_F_122719641_V0yw2cAOrfxsON3HeWi2Sf4iVxhv27QO.jpg)',
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
    button: {
      marginTop: '1rem',
    },
    signUpButton: {
      marginTop: '1rem',
      borderColor: '#000',
      color: '#000',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleLogin}>
          <h2 style={styles.title}>LOGIN</h2>
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
          <button type="submit" className="w-100 btn btn-success rounded-0" style={styles.button}>Login</button>
          <button type="button" onClick={handleSignUpClick} className="w-100 btn btn-default border border-dark rounded-0" style={styles.signUpButton}>Sign UP</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
