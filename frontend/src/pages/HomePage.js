import React from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import './HomePage.css';

function HomePage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Your Dashboard</h1>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="home-content">
        <Card title={`Hello, ${user?.name}!`}>
          <div className="user-info">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
          
          <div className="welcome-message">
            <p>You have successfully logged in to your account!</p>
            <p>This is your personal dashboard where you can manage your profile and access various features.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
