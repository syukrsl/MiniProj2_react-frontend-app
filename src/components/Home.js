import React from 'react';
import './Home.css'; // Import a CSS file for styling (optional)

function Home() {
  return (
    <div>
      <div className="header">
        Welcome to WITTER 🐦
      </div>
      <div className="container">
        <p>See what's happening now....</p>

        {/* Login Form */}
        <div className="login-form">
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-control" />
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-primary login-button">
                Login
              </button>
              <button className="btn btn-primary new-user-button" onClick={handleNewUserClick} style={{ marginLeft: '10px' }}>
                New User
              </button>
            </div>
          </form>
          
          {/* Add Spacing */}
          <div style={{ marginTop: '30px' }}>
            {/* Forgot Password Link */}
            <p className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleNewUserClick() {
  // Handle the click event for the "New User" button
  // You can add the logic to navigate to a new user registration page or perform other actions
}

export default Home;