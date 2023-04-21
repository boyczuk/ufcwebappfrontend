import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>UFC myGym</h1>
      <div className="text-box">
        <h2>Create your gym</h2>
        <p>Select and buy fighters to join your personal Gym.</p>
      </div>
      <div className="text-box">
        <h2>Train your fighters</h2>
        <p>Choose how and when to train the fighter's you've chosen. This will decide how many points you earn based on their performance.</p>
      </div>
      <div className="text-box">
        <h2>Top ranked contenders and champions</h2>
        <p>Top 15 of each weightclass including champions. </p>
      </div>
    </div>
  );
}

export default Home;
