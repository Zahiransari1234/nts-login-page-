import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
// import '../style/Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare login data
    const loginData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/login',loginData);
      
      console.log('Login Successful:', response.data);
      // Navigate to dashboard or home after successful login
      toast.success('Succesfully Login')
      navigate('/dashboard'); // Adjust the route as needed
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        toast.error('Something went wrong, Please try again.')
      } else {
        toast.error('Login failed. Please try again.')
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn">Login</button>
        <p>
          Don't have an account? <span onClick={() => navigate('/register')} className="link">Register here</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
