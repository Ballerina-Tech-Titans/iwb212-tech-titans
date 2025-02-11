import React, { useState, useEffect } from 'react';
import '../../css/Login.css';
import { useNavigate } from 'react-router-dom';

const LoginO = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // For admin login
  const navigate = useNavigate(); // Use navigate for redirection

  // Admin credentials (hardcoded for testing)
  const adminCredentials = {
    email: 'admin@gmail.com',
    password: 'admin123',
  };

  // Fetch all registered users from the database
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8081/register');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData); // Check form data
    console.log('Users:', users); // Check the users array

    // Admin login
    if (
      formData.email === adminCredentials.email &&
      formData.password === adminCredentials.password
    ) {
      setIsAdmin(true);
      setIsAuthenticated(true);
      setLoginError(null);
      navigate('/organizer'); // Redirect to admin dashboard
      return;
    }

    // Regular user login
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      // Authentication successful
      setIsAuthenticated(true);
      setIsAdmin(false);
      setLoginError(null);
      navigate('/organizer'); // Redirect to regular user homepage
    } else {
      // Authentication failed
      setIsAuthenticated(false);
      setLoginError('Invalid email or password. Please try again.');
    }
  };

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='login'>
      

      <div className='wrapper'>
        <h2>{isAdmin ? 'Admin Login' : 'Organizer | Login'}</h2>

        {error && <p>{error.message}</p>}

        {isAuthenticated ? (
          <p>Welcome {isAdmin ? 'Admin' : 'back'}!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='input-box'>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box'>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box button'>
              <input type='submit' value='Login' />
            </div>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            <div className='text'>
              <h3>
                Don't have an account? <a href='/organizer/register'>Register now</a>
              </h3>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginO;
