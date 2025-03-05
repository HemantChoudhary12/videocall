import React, { useState } from 'react';
import './App.css'
// Do some change in code
function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      console.log('Login:', { email, password });
      // Here, you would typically make an AJAX request to your backend for login
    } else {
      console.log('Register:', { username, email, password });
      // Here, you would typically make an AJAX request to your backend for registration
    }

    // Reset form fields
    setEmail('');
    setPassword('');
    setUsername('');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: 'calc(100% - 22px)', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: 'calc(100% - 22px)', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 'calc(100% - 22px)', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="#" onClick={toggleForm} style={{ textDecoration: 'none', color: '#007bff' }}>
            {isLogin ? 'Register' : 'Login'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App

