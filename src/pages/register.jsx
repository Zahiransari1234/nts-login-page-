import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios
import toast from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: '', // Add username field
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  const { username, fullname, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Prepare data for the POST request
    const registrationData = {
      username,
      fullname,
      email,
      password, // Do not include confirmPassword
    };

    console.log('Registration Data:', registrationData);
    
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', registrationData);
      console.log('Registration Successful:', response.data);
      // Navigate to login after successful registration
      toast.success('Succesfully register')
      navigate('/Login');
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response) {
       toast.error('User allready exist.')
      } else {
        toast.error('Registration failed. Please try again.')
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username" // Ensure name matches formData key
            value={username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="fullname"
            value={fullname}
            onChange={handleChange}
            required
            placeholder="Enter your name"
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="btn">Register</button>
        <p>
          Already have an account? <span onClick={() => navigate('/Login')} className="link">Login here</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
