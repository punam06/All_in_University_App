import React from 'react';

const ARNavigation = () => {
  return (
    <div className="ar-navigation">
      <h1>AR Navigation</h1>
      <button>Start AR</button>
      <div className="key-features">
        <h2>Key Features</h2>
        <ul>
          <li>Find Classrooms - Easily locate classrooms using real-time mapping.</li>
          <li>Locate Libraries - Find libraries and study spaces with AR guidance.</li>
          <li>Faculty Offices - Navigate to faculty offices with step-by-step directions.</li>
        </ul>
      </div>
      <div className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Step 1: Open AR - Click "Start AR" to activate the augmented reality mode.</li>
          <li>Step 2: Point Your Camera - Point your camera at buildings to see location details.</li>
          <li>Step 3: Navigate - Follow the AR directions to reach your destination.</li>
        </ol>
      </div>
    </div>
  );
};

export default ARNavigation;
