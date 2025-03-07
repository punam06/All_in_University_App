import React from 'react';

const WelcomeBack = () => {
  return (
    <div className="welcome-back">
      <h1>Welcome Back</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="features">
        <div className="feature">
          <h2>Cafeteria</h2>
          <p>Today's menu and meal plans</p>
        </div>
        <div className="feature">
          <h2>Bus Schedule</h2>
          <p>Real-time shuttle tracking</p>
        </div>
        <div className="feature">
          <h2>Class Schedule</h2>
          <p>Your daily class timeline</p>
        </div>
        <div className="feature">
          <h2>AR Navigation</h2>
          <p>Campus navigation made easy</p>
        </div>
      </div>
      <div className="clubs-events">
        <h2>Clubs & Events</h2>
        <p>Manage your activities</p>
      </div>
      <div className="notifications">
        <h2>Notifications</h2>
        <p>Recent updates and alerts</p>
      </div>
    </div>
  );
};

export default WelcomeBack;
